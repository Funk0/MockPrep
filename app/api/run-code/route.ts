const JUDGE0_URL = 'https://judge0-ce.p.rapidapi.com';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST(request: Request) {
  const apiKey = process.env.JUDGE0_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: 'Code execution is not configured. Add JUDGE0_API_KEY to .env.local to enable it.' },
      { status: 503 }
    );
  }

  const { code, languageId } = await request.json();

  if (!code || !languageId) {
    return Response.json({ error: 'Missing code or languageId' }, { status: 400 });
  }

  const headers = {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
  };

  // Submit
  let token: string;
  try {
    const submitRes = await fetch(`${JUDGE0_URL}/submissions?base64_encoded=false`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ source_code: code, language_id: languageId }),
    });

    if (!submitRes.ok) {
      const text = await submitRes.text();
      return Response.json({ error: `Submission failed: ${text}` }, { status: 502 });
    }

    const submitData = await submitRes.json();
    token = submitData.token;
  } catch (err) {
    return Response.json({ error: `Failed to submit code: ${String(err)}` }, { status: 502 });
  }

  // Poll up to 8 seconds
  let result: Record<string, unknown> = {};
  for (let i = 0; i < 8; i++) {
    await sleep(1000);
    try {
      const pollRes = await fetch(
        `${JUDGE0_URL}/submissions/${token}?base64_encoded=false&fields=stdout,stderr,compile_output,status,time,memory`,
        { headers }
      );
      result = await pollRes.json();
      const statusId = (result.status as { id: number } | undefined)?.id ?? 0;
      if (statusId > 2) break; // 1=In Queue, 2=Processing, >2=done
    } catch {
      // keep polling
    }
  }

  return Response.json(result);
}

'use client';

import { useState, useEffect } from 'react';

const WORDS = ['developers', 'engineers', 'builders', 'problem solvers'];
const TYPE_MS = 75;
const DELETE_MS = 40;
const PAUSE_MS = 1800;
const GAP_MS = 300;

export default function TypewriterWord() {
  // Start fully typed so the initial page load shows content immediately
  const [displayed, setDisplayed] = useState(WORDS[0]);
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');

  useEffect(() => {
    const word = WORDS[wordIdx];
    let t: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (displayed.length < word.length) {
        t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), TYPE_MS);
      } else {
        t = setTimeout(() => setPhase('deleting'), PAUSE_MS);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), DELETE_MS);
      } else {
        t = setTimeout(() => {
          setWordIdx((i) => (i + 1) % WORDS.length);
          setPhase('typing');
        }, GAP_MS);
      }
    }

    return () => clearTimeout(t);
  }, [displayed, phase, wordIdx]);

  return (
    <span className="text-blue-600 dark:text-blue-400">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

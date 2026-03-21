export type Difficulty = 'easy' | 'medium' | 'hard';

export interface GenAIProblem {
  id: string;
  title: string;
  difficulty: Difficulty;
  category: string;
  description: string;
  scenario: string;
  exampleOutput: string;
  starterCode: { python: string; javascript: string };
  judgingLanguageIds: { python: number; javascript: number };
}

export const genaiProblems: GenAIProblem[] = [
  {
    id: 'find-duplicates-ai',
    title: 'Find All Duplicates',
    difficulty: 'medium',
    category: 'Algorithm',
    description: `Given a list of integers \`nums\`, return a list of all elements that appear more than once.

The result may be returned in any order. Each duplicate value should appear only once in the output even if it occurs more than twice.

**Example 1:**
Input: nums = [4, 3, 2, 7, 8, 2, 3, 1]
Output: [2, 3]

**Example 2:**
Input: nums = [1, 1, 2]
Output: [1]

**Example 3:**
Input: nums = [1]
Output: []

**Constraints:**
- 1 ≤ nums.length ≤ 10^5
- -10^5 ≤ nums[i] ≤ 10^5`,
    scenario: `You have access to an AI assistant that can help you write, debug, and explain code.

Your goal is to solve this problem correctly. The AI can write code for you — that's fine. But you'll be assessed on **how well you use the AI**: the quality of your prompts, whether you verify AI output, whether you understand what's submitted, and whether you exercise your own judgment.

Think of this as a realistic work simulation: a senior dev watching over your shoulder as you pair with an AI tool.`,
    exampleOutput: `find_duplicates([4, 3, 2, 7, 8, 2, 3, 1])  # → [2, 3]
find_duplicates([1, 1, 2])               # → [1]
find_duplicates([1])                     # → []`,
    starterCode: {
      python: `def find_duplicates(nums: list) -> list:
    # Use the AI assistant to help you solve this.
    # Ask it to write the function, explain the approach,
    # or help you debug — then run the code to verify.
    pass


# Test your solution
print(find_duplicates([4, 3, 2, 7, 8, 2, 3, 1]))  # [2, 3]
print(find_duplicates([1, 1, 2]))                   # [1]
print(find_duplicates([1]))                         # []
`,
      javascript: `function findDuplicates(nums) {
  // Use the AI assistant to help you solve this.
  // Ask it to write the function, explain the approach,
  // or help you debug — then run the code to verify.
}


// Test your solution
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));  // [2, 3]
console.log(findDuplicates([1, 1, 2]));                   // [1]
console.log(findDuplicates([1]));                         // []
`,
    },
    judgingLanguageIds: { python: 71, javascript: 63 },
  },

  {
    id: 'csv-report-ai',
    title: 'Sales CSV Report',
    difficulty: 'medium',
    category: 'Real-World Task',
    description: `You are given a CSV string representing sales data with columns: \`product\`, \`quantity\`, \`price\`.

Write a function \`parse_sales_report(csv_string)\` that returns a dictionary with:
- \`total_revenue\`: sum of (quantity × price) across all rows
- \`best_seller\`: product name with the highest total quantity sold
- \`transaction_count\`: total number of transactions (rows, excluding header)

**Example Input:**
\`\`\`
product,quantity,price
Widget A,10,5.99
Widget B,3,12.50
Widget A,7,5.99
Widget C,15,2.00
\`\`\`

**Expected Output:**
\`\`\`
{
  "total_revenue": 162.15,
  "best_seller": "Widget C",
  "transaction_count": 4
}
\`\`\`

**Notes:**
- The CSV always has a header row
- Prices are floats; quantities are integers
- If there's a tie for best seller, return any one of the tied products`,
    scenario: `You have access to an AI assistant that can help you write, debug, and explain code.

This is a real-world data processing task. The AI can write the parsing logic for you — but you should verify the output against the expected values, ask clarifying questions if needed, and make sure you understand the solution you submit.

You'll be assessed on how thoughtfully you use the AI: prompt quality, output validation, and whether you exercised genuine judgment rather than just copy-pasting.`,
    exampleOutput: `# Expected output:
# {'total_revenue': 162.15, 'best_seller': 'Widget C', 'transaction_count': 4}`,
    starterCode: {
      python: `def parse_sales_report(csv_string: str) -> dict:
    # Use the AI assistant to help you write this function.
    # Verify the output by running the test case below.
    pass


# Test case
csv_data = """product,quantity,price
Widget A,10,5.99
Widget B,3,12.50
Widget A,7,5.99
Widget C,15,2.00"""

result = parse_sales_report(csv_data)
print(result)
# Expected: {'total_revenue': 162.15, 'best_seller': 'Widget C', 'transaction_count': 4}
`,
      javascript: `function parseSalesReport(csvString) {
  // Use the AI assistant to help you write this function.
  // Verify the output by running the test case below.
}


// Test case
const csvData = \`product,quantity,price
Widget A,10,5.99
Widget B,3,12.50
Widget A,7,5.99
Widget C,15,2.00\`;

const result = parseSalesReport(csvData);
console.log(result);
// Expected: { total_revenue: 162.15, best_seller: 'Widget C', transaction_count: 4 }
`,
    },
    judgingLanguageIds: { python: 71, javascript: 63 },
  },
];

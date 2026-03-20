export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  category: string;
  description: string;
  examples: { input: string; output: string; explanation?: string }[];
  constraints: string[];
  hints: string[];
  starterCode: string;
}

export const problems: Problem[] = [
  // ─── EASY (7) ───────────────────────────────────────────────────────────────

  {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'easy',
    category: 'Arrays',
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
      },
      {
        input: 'nums = [3,3], target = 6',
        output: '[0,1]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.',
    ],
    hints: [
      'A brute force approach would be O(n²). Can you do better?',
      'Think about what information you need to store as you iterate.',
      'A hash map can give you O(1) lookups.',
    ],
    starterCode: 'def solution():\n    pass',
  },

  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    difficulty: 'easy',
    category: 'Strings',
    description: `Given a string \`s\` containing just the characters \`(\`, \`)\`, \`{\`, \`}\`, \`[\` and \`]\`, determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.`,
    examples: [
      {
        input: 's = "()"',
        output: 'true',
      },
      {
        input: 's = "()[]{}"',
        output: 'true',
      },
      {
        input: 's = "(]"',
        output: 'false',
      },
      {
        input: 's = "([)]"',
        output: 'false',
      },
      {
        input: 's = "{[]}"',
        output: 'true',
      },
    ],
    constraints: [
      '1 <= s.length <= 10^4',
      "s consists of parentheses only '()[]{}'",
    ],
    hints: [
      'Think about what data structure maintains order and lets you check the most recent element easily.',
      'A stack is perfect here — push opening brackets, pop and check when you see a closing bracket.',
      'At the end, the stack must be empty for the string to be valid.',
    ],
    starterCode: 'def solution():\n    pass',
  },

  {
    id: 'reverse-linked-list',
    title: 'Reverse Linked List',
    difficulty: 'easy',
    category: 'Linked Lists',
    description: `Given the \`head\` of a singly linked list, reverse the list, and return the reversed list.`,
    examples: [
      {
        input: 'head = [1,2,3,4,5]',
        output: '[5,4,3,2,1]',
      },
      {
        input: 'head = [1,2]',
        output: '[2,1]',
      },
      {
        input: 'head = []',
        output: '[]',
      },
    ],
    constraints: [
      'The number of nodes in the list is in the range [0, 5000].',
      '-5000 <= Node.val <= 5000',
    ],
    hints: [
      'You need to change the direction of every pointer.',
      'Keep track of the previous node as you traverse — you need it to reverse each pointer.',
      'Can you do this both iteratively and recursively?',
    ],
    starterCode: 'def solution():\n    pass',
  },

  {
    id: 'best-time-to-buy-sell-stock',
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'easy',
    category: 'Arrays',
    description: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i\`th day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return \`0\`.`,
    examples: [
      {
        input: 'prices = [7,1,5,3,6,4]',
        output: '5',
        explanation: 'Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.',
      },
      {
        input: 'prices = [7,6,4,3,1]',
        output: '0',
        explanation: 'In this case, no transactions are done and the max profit = 0.',
      },
    ],
    constraints: [
      '1 <= prices.length <= 10^5',
      '0 <= prices[i] <= 10^4',
    ],
    hints: [
      'You must buy before you sell — so you can only look forward from each buy day.',
      'Think about tracking the minimum price seen so far as you iterate.',
      'At each step, the best profit is the current price minus the minimum price seen so far.',
    ],
    starterCode: 'def solution():\n    pass',
  },

  {
    id: 'maximum-subarray',
    title: 'Maximum Subarray',
    difficulty: 'easy',
    category: 'Dynamic Programming',
    description: `Given an integer array \`nums\`, find the subarray with the largest sum, and return its sum.`,
    examples: [
      {
        input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
        output: '6',
        explanation: 'The subarray [4,-1,2,1] has the largest sum 6.',
      },
      {
        input: 'nums = [1]',
        output: '1',
      },
      {
        input: 'nums = [5,4,-1,7,8]',
        output: '23',
      },
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
    ],
    hints: [
      'A brute-force approach checking all subarrays is O(n²). Can you do it in O(n)?',
      "Kadane's algorithm: at each position, decide whether to extend the previous subarray or start fresh.",
      'If the current running sum becomes negative, it is better to start a new subarray from the next element.',
    ],
    starterCode: 'def solution():\n    pass',
  },

  {
    id: 'palindrome-number',
    title: 'Palindrome Number',
    difficulty: 'easy',
    category: 'Math',
    description: `Given an integer \`x\`, return \`true\` if \`x\` is a palindrome, and \`false\` otherwise.

A palindrome reads the same forward and backward.`,
    examples: [
      {
        input: 'x = 121',
        output: 'true',
        explanation: '121 reads as 121 from left to right and from right to left.',
      },
      {
        input: 'x = -121',
        output: 'false',
        explanation: 'From left to right, it reads -121. From right to left, it reads 121-. Therefore it is not a palindrome.',
      },
      {
        input: 'x = 10',
        output: 'false',
        explanation: 'Reads 01 from right to left. Therefore it is not a palindrome.',
      },
    ],
    constraints: [
      '-2^31 <= x <= 2^31 - 1',
    ],
    hints: [
      'Negative numbers are never palindromes. What about numbers ending in 0?',
      'You could convert to a string and check — but can you solve it without string conversion?',
      'Try reversing only the second half of the number and comparing it to the first half.',
    ],
    starterCode: 'def solution():\n    pass',
  },

  {
    id: 'merge-two-sorted-lists',
    title: 'Merge Two Sorted Lists',
    difficulty: 'easy',
    category: 'Linked Lists',
    description: `You are given the heads of two sorted linked lists \`list1\` and \`list2\`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.`,
    examples: [
      {
        input: 'list1 = [1,2,4], list2 = [1,3,4]',
        output: '[1,1,2,3,4,4]',
      },
      {
        input: 'list1 = [], list2 = []',
        output: '[]',
      },
      {
        input: 'list1 = [], list2 = [0]',
        output: '[0]',
      },
    ],
    constraints: [
      'The number of nodes in both lists is in the range [0, 50].',
      '-100 <= Node.val <= 100',
      'Both list1 and list2 are sorted in non-decreasing order.',
    ],
    hints: [
      'Use a dummy head node to simplify edge cases at the beginning of the merged list.',
      'Compare the current nodes of both lists and advance the pointer of the smaller one.',
      'After one list is exhausted, attach the remaining nodes of the other list.',
    ],
    starterCode: 'def solution():\n    pass',
  },

  // ─── MEDIUM (8) ─────────────────────────────────────────────────────────────

  {
    id: 'longest-substring',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'medium',
    category: 'Strings',
    description: `Given a string \`s\`, find the length of the **longest substring** without repeating characters.`,
    examples: [
      {
        input: 's = "abcabcbb"',
        output: '3',
        explanation: 'The answer is "abc", with the length of 3.',
      },
      {
        input: 's = "bbbbb"',
        output: '1',
        explanation: 'The answer is "b", with the length of 1.',
      },
      {
        input: 's = "pwwkew"',
        output: '3',
        explanation: 'The answer is "wke", with the length of 3.',
      },
    ],
    constraints: [
      '0 <= s.length <= 5 * 10^4',
      's consists of English letters, digits, symbols and spaces.',
    ],
    hints: [
      'Think about using a sliding window approach.',
      'How can you efficiently track which characters are in your current window?',
      'When you find a duplicate, where should your window start?',
    ],
    starterCode: 'def solution():\n    pass',
  },

  {
    id: '3sum',
    title: '3Sum',
    difficulty: 'medium',
    category: 'Arrays',
    description: `Given an integer array \`nums\`, return all the triplets \`[nums[i], nums[j], nums[k]]\` such that \`i != j\`, \`i != k\`, and \`j != k\`, and \`nums[i] + nums[j] + nums[k] == 0\`.

Notice that the solution set must not contain duplicate triplets.`,
    examples: [
      {
        input: 'nums = [-1,0,1,2,-1,-4]',
        output: '[[-1,-1,2],[-1,0,1]]',
        explanation:
          'nums[0] + nums[1] + nums[2] = -1 + 0 + 1 = 0. nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0. The distinct triplets are [-1,0,1] and [-1,-1,2].',
      },
      {
        input: 'nums = [0,1,1]',
        output: '[]',
        explanation: 'The only possible triplet does not sum up to 0.',
      },
      {
        input: 'nums = [0,0,0]',
        output: '[[0,0,0]]',
        explanation: 'The only possible triplet sums up to 0.',
      },
    ],
    constraints: [
      '3 <= nums.length <= 3000',
      '-10^5 <= nums[i] <= 10^5',
    ],
    hints: [
      'Sorting the array first makes it much easier to avoid duplicates.',
      'Fix one number and use a two-pointer approach to find the other two.',
      'After sorting, skip duplicate values at each pointer position to avoid duplicate triplets.',
    ],
    starterCode: 'def solution():\n    pass',
  },

  {
    id: 'container-with-most-water',
    title: 'Container With Most Water',
    difficulty: 'medium',
    category: 'Arrays',
    description: `You are given an integer array \`height\` of length \`n\`. There are \`n\` vertical lines drawn such that the two endpoints of the \`i\`th line are \`(i, 0)\` and \`(i, height[i])\`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Note: You may not slant the container.`,
    examples: [
      {
        input: 'height = [1,8,6,2,5,4,8,3,7]',
        output: '49',
        explanation:
          'The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.',
      },
      {
        input: 'height = [1,1]',
        output: '1',
      },
    ],
    constraints: [
      'n == height.length',
      '2 <= n <= 10^5',
      '0 <= height[i] <= 10^4',
    ],
    hints: [
      'The area is determined by the shorter of the two lines and the distance between them.',
      'A two-pointer approach starting from both ends works well here.',
      'Moving the pointer at the shorter line inward is always the right greedy choice — why?',
    ],
    starterCode: 'def solution():\n    pass',
  },

  {
    id: 'longest-palindromic-substring',
    title: 'Longest Palindromic Substring',
    difficulty: 'medium',
    category: 'Strings',
    description: `Given a string \`s\`, return the longest palindromic substring in \`s\`.`,
    examples: [
      {
        input: 's = "babad"',
        output: '"bab"',
        explanation: '"aba" is also a valid answer.',
      },
      {
        input: 's = "cbbd"',
        output: '"bb"',
      },
    ],
    constraints: [
      '1 <= s.length <= 1000',
      's consist of only digits and English letters.',
    ],
    hints: [
      'A palindrome expands symmetrically around its center.',
      'For each character (and each pair of characters), try expanding outward while the characters match.',
      'There are 2n-1 possible centers for a string of length n — why?',
    ],
    starterCode: 'def solution():\n    pass',
  },

  {
    id: 'word-search',
    title: 'Word Search',
    difficulty: 'medium',
    category: 'Backtracking',
    description: `Given an \`m x n\` grid of characters \`board\` and a string \`word\`, return \`true\` if \`word\` exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.`,
    examples: [
      {
        input:
          'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
        output: 'true',
      },
      {
        input:
          'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"',
        output: 'true',
      },
      {
        input:
          'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"',
        output: 'false',
      },
    ],
    constraints: [
      'm == board.length',
      'n = board[i].length',
      '1 <= m, n <= 6',
      '1 <= word.length <= 15',
      'board and word consists of only lowercase and uppercase English letters.',
    ],
    hints: [
      'Use DFS with backtracking starting from each cell that matches the first character.',
      'Mark cells as visited before recursing and unmark them when you backtrack.',
      'Your base case is when you have matched all characters in the word.',
    ],
    starterCode: 'def solution():\n    pass',
  },

  {
    id: 'coin-change',
    title: 'Coin Change',
    difficulty: 'medium',
    category: 'Dynamic Programming',
    description: `You are given an integer array \`coins\` representing coins of different denominations and an integer \`amount\` representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return \`-1\`.

You may assume that you have an infinite number of each kind of coin.`,
    examples: [
      {
        input: 'coins = [1,5,11], amount = 11',
        output: '1',
        explanation: '11 = 11',
      },
      {
        input: 'coins = [2], amount = 3',
        output: '-1',
      },
      {
        input: 'coins = [1], amount = 0',
        output: '0',
      },
    ],
    constraints: [
      '1 <= coins.length <= 12',
      '1 <= coins[i] <= 2^31 - 1',
      '0 <= amount <= 10^4',
    ],
    hints: [
      'Think about building up solutions from smaller sub-problems.',
      'Define dp[i] as the minimum number of coins needed to make amount i.',
      'For each amount, try subtracting each coin and take the minimum result.',
    ],
    starterCode: 'def solution():\n    pass',
  },

  {
    id: 'binary-tree-level-order-traversal',
    title: 'Binary Tree Level Order Traversal',
    difficulty: 'medium',
    category: 'Trees',
    description: `Given the \`root\` of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).`,
    examples: [
      {
        input: 'root = [3,9,20,null,null,15,7]',
        output: '[[3],[9,20],[15,7]]',
      },
      {
        input: 'root = [1]',
        output: '[[1]]',
      },
      {
        input: 'root = []',
        output: '[]',
      },
    ],
    constraints: [
      'The number of nodes in the tree is in the range [0, 2000].',
      '-1000 <= Node.val <= 1000',
    ],
    hints: [
      'BFS (breadth-first search) naturally visits nodes level by level.',
      'Use a queue. At each level, process all nodes currently in the queue before moving to the next level.',
      'Track how many nodes are at the current level so you know when one level ends and the next begins.',
    ],
    starterCode: 'def solution():\n    pass',
  },

  {
    id: 'product-of-array-except-self',
    title: 'Product of Array Except Self',
    difficulty: 'medium',
    category: 'Arrays',
    description: `Given an integer array \`nums\`, return an array \`answer\` such that \`answer[i]\` is equal to the product of all the elements of \`nums\` except \`nums[i]\`.

The product of any prefix or suffix of \`nums\` is **guaranteed** to fit in a 32-bit integer.

You must write an algorithm that runs in \`O(n)\` time and without using the division operation.`,
    examples: [
      {
        input: 'nums = [1,2,3,4]',
        output: '[24,12,8,6]',
      },
      {
        input: 'nums = [-1,1,0,-3,3]',
        output: '[0,0,9,0,0]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 10^5',
      '-30 <= nums[i] <= 30',
      'The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.',
    ],
    hints: [
      'For each index i, the answer is (product of all elements to the left) × (product of all elements to the right).',
      'Compute a prefix products array and a suffix products array.',
      'Can you do it with O(1) extra space by computing one pass left-to-right, then one pass right-to-left?',
    ],
    starterCode: 'def solution():\n    pass',
  },

  // ─── HARD (5) ───────────────────────────────────────────────────────────────

  {
    id: 'merge-k-sorted-lists',
    title: 'Merge K Sorted Lists',
    difficulty: 'hard',
    category: 'Linked Lists',
    description: `You are given an array of \`k\` linked-lists \`lists\`, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.`,
    examples: [
      {
        input: 'lists = [[1,4,5],[1,3,4],[2,6]]',
        output: '[1,1,2,3,4,4,5,6]',
        explanation:
          'The linked-lists are:\n1->4->5\n1->3->4\n2->6\nMerging them into one sorted list:\n1->1->2->3->4->4->5->6',
      },
      {
        input: 'lists = []',
        output: '[]',
      },
      {
        input: 'lists = [[]]',
        output: '[]',
      },
    ],
    constraints: [
      'k == lists.length',
      '0 <= k <= 10^4',
      '0 <= lists[i].length <= 500',
      '-10^4 <= lists[i][j] <= 10^4',
      'lists[i] is sorted in ascending order.',
      'The sum of lists[i].length will not exceed 10^4.',
    ],
    hints: [
      'Think about how you would merge two sorted lists first.',
      'Can you extend that to k lists efficiently?',
      'A min-heap (priority queue) can help you always find the smallest current element.',
      'Divide and conquer is another approach — merge lists pairwise.',
    ],
    starterCode: 'def solution():\n    pass',
  },

  {
    id: 'trapping-rain-water',
    title: 'Trapping Rain Water',
    difficulty: 'hard',
    category: 'Arrays',
    description: `Given \`n\` non-negative integers representing an elevation map where the width of each bar is \`1\`, compute how much water it can trap after raining.`,
    examples: [
      {
        input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
        output: '6',
        explanation:
          'The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped.',
      },
      {
        input: 'height = [4,2,0,3,2,5]',
        output: '9',
      },
    ],
    constraints: [
      'n == height.length',
      '1 <= n <= 2 * 10^4',
      '0 <= height[i] <= 10^5',
    ],
    hints: [
      'For each position, the water trapped is min(maxLeft, maxRight) - height[i].',
      'Precomputing maxLeft and maxRight arrays gives an O(n) solution with O(n) space.',
      'A two-pointer approach lets you do it in O(1) extra space — can you figure out why it works?',
    ],
    starterCode: 'def solution():\n    pass',
  },

  {
    id: 'n-queens',
    title: 'N-Queens',
    difficulty: 'hard',
    category: 'Backtracking',
    description: `The **n-queens** puzzle is the problem of placing \`n\` queens on an \`n x n\` chessboard such that no two queens attack each other.

Given an integer \`n\`, return all distinct solutions to the n-queens puzzle. You may return the answer in **any order**.

Each solution contains a distinct board configuration of the n-queens' placement, where \`'Q'\` and \`'.'\` both indicate a queen and an empty space, respectively.`,
    examples: [
      {
        input: 'n = 4',
        output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
        explanation: 'There exist two distinct solutions to the 4-queens puzzle.',
      },
      {
        input: 'n = 1',
        output: '[["Q"]]',
      },
    ],
    constraints: ['1 <= n <= 9'],
    hints: [
      'Place queens row by row. For each row, try placing the queen in each column.',
      'Track which columns, and which diagonals are already occupied.',
      'Two cells (r1, c1) and (r2, c2) are on the same diagonal if |r1-r2| == |c1-c2|.',
    ],
    starterCode: 'def solution():\n    pass',
  },

  {
    id: 'word-ladder',
    title: 'Word Ladder',
    difficulty: 'hard',
    category: 'Graphs',
    description: `A **transformation sequence** from word \`beginWord\` to word \`endWord\` using a dictionary \`wordList\` is a sequence of words \`beginWord -> s1 -> s2 -> ... -> sk\` such that:

- Every adjacent pair of words differs by a single letter.
- Every \`si\` for \`1 <= i <= k\` is in \`wordList\`. Note that \`beginWord\` does not need to be in \`wordList\`.
- \`sk == endWord\`

Given two words, \`beginWord\` and \`endWord\`, and a dictionary \`wordList\`, return the **number of words** in the shortest transformation sequence from \`beginWord\` to \`endWord\`, or \`0\` if no such sequence exists.`,
    examples: [
      {
        input:
          'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: '5',
        explanation:
          'One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> "cog", which is 5 words long.',
      },
      {
        input:
          'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]',
        output: '0',
        explanation:
          'The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.',
      },
    ],
    constraints: [
      '1 <= beginWord.length <= 10',
      'endWord.length == beginWord.length',
      '1 <= wordList.length <= 5000',
      'wordList[i].length == beginWord.length',
      'beginWord, endWord, and wordList[i] consist of lowercase English letters.',
      'beginWord != endWord',
      'All the words in wordList are unique.',
    ],
    hints: [
      'Model this as a graph problem where each word is a node and edges connect words that differ by one letter.',
      'BFS gives you the shortest path in an unweighted graph.',
      'To find neighbors efficiently, try replacing each character with every letter a-z and check if it is in the wordList set.',
    ],
    starterCode: 'def solution():\n    pass',
  },

  {
    id: 'median-of-two-sorted-arrays',
    title: 'Median of Two Sorted Arrays',
    difficulty: 'hard',
    category: 'Arrays',
    description: `Given two sorted arrays \`nums1\` and \`nums2\` of size \`m\` and \`n\` respectively, return the **median** of the two sorted arrays.

The overall run time complexity should be \`O(log (m+n))\`.`,
    examples: [
      {
        input: 'nums1 = [1,3], nums2 = [2]',
        output: '2.00000',
        explanation: 'merged array = [1,2,3] and median is 2.',
      },
      {
        input: 'nums1 = [1,2], nums2 = [3,4]',
        output: '2.50000',
        explanation: 'merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.',
      },
    ],
    constraints: [
      'nums1.length == m',
      'nums2.length == n',
      '0 <= m <= 1000',
      '0 <= n <= 1000',
      '1 <= m + n <= 2000',
      '-10^6 <= nums1[i], nums2[i] <= 10^6',
    ],
    hints: [
      'A naive merge and find would be O(m+n). The O(log(m+n)) constraint requires binary search.',
      'Think about partitioning both arrays such that the left half of all elements is less than the right half.',
      'Binary search on the smaller array to find the correct partition point.',
    ],
    starterCode: 'def solution():\n    pass',
  },
];

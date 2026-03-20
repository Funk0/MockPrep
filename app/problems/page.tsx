'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { problems } from '@/lib/problems';
import type { Difficulty } from '@/lib/problems';

// Global difficulty score (0–100) per problem.
// Easy problems cluster in the lower third, medium in the middle, hard in the upper third.
// Bar length gives a visual sense of relative challenge within the full problem set.
const DIFFICULTY_SCORE: Record<string, number> = {
  'palindrome-number': 12,
  'two-sum': 16,
  'best-time-to-buy-sell-stock': 20,
  'valid-parentheses': 24,
  'maximum-subarray': 27,
  'reverse-linked-list': 29,
  'merge-two-sorted-lists': 32,
  'longest-substring': 42,
  'binary-tree-level-order-traversal': 45,
  'container-with-most-water': 48,
  'product-of-array-except-self': 51,
  '3sum': 54,
  'coin-change': 57,
  'longest-palindromic-substring': 60,
  'word-search': 63,
  'merge-k-sorted-lists': 70,
  'trapping-rain-water': 77,
  'word-ladder': 82,
  'n-queens': 88,
  'median-of-two-sorted-arrays': 95,
};

const DIFFICULTY: Record<Difficulty, { badge: string; text: string; bar: string; active: string }> = {
  easy: {
    badge: 'bg-green-900/40 text-green-300 border border-green-700/40',
    text: 'text-green-400',
    bar: 'bg-green-500',
    active: 'bg-green-800/60 border-green-500 text-green-200',
  },
  medium: {
    badge: 'bg-yellow-900/40 text-yellow-300 border border-yellow-700/40',
    text: 'text-yellow-400',
    bar: 'bg-yellow-500',
    active: 'bg-yellow-800/60 border-yellow-500 text-yellow-200',
  },
  hard: {
    badge: 'bg-red-900/40 text-red-300 border border-red-700/40',
    text: 'text-red-400',
    bar: 'bg-red-500',
    active: 'bg-red-800/60 border-red-500 text-red-200',
  },
};

function InfoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="8" strokeWidth="3" strokeLinecap="round" />
      <line x1="12" y1="12" x2="12" y2="16" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function ProblemsPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<'' | Difficulty>('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = useMemo(() => {
    const set = new Set(problems.map((p) => p.category));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    return problems.filter((p) => {
      if (selectedDifficulty && p.difficulty !== selectedDifficulty) return false;
      if (selectedCategory && p.category !== selectedCategory) return false;
      return true;
    });
  }, [selectedDifficulty, selectedCategory]);

  const counts = useMemo(() => ({
    easy: problems.filter((p) => p.difficulty === 'easy').length,
    medium: problems.filter((p) => p.difficulty === 'medium').length,
    hard: problems.filter((p) => p.difficulty === 'hard').length,
  }), []);

  const isFiltered = selectedDifficulty || selectedCategory;

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">

      {/* ── Header ── */}
      <div className="relative border-b border-gray-800/60 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 80% at 50% -20%, rgba(59,130,246,0.1) 0%, transparent 65%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-extrabold text-white mb-2">Practice Problems</h1>
              <p className="text-gray-400">
                Select a problem to start a 45-minute AI interview session.
              </p>
            </div>

            {/* Stat pills */}
            <div className="flex items-center gap-px bg-gray-800/60 border border-gray-700/60 rounded-xl overflow-hidden shrink-0">
              {(['easy', 'medium', 'hard'] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDifficulty(selectedDifficulty === d ? '' : d)}
                  aria-pressed={selectedDifficulty === d}
                  className={`flex flex-col items-center px-5 py-3 transition-colors ${
                    selectedDifficulty === d ? 'bg-gray-700/80' : 'bg-gray-900/60 hover:bg-gray-800/60'
                  }`}
                >
                  <span className={`text-xl font-bold ${DIFFICULTY[d].text}`}>{counts[d]}</span>
                  <span className="text-gray-500 text-xs capitalize">{d}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Filters + Grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="text-gray-500 text-sm font-medium hidden sm:block">Filter:</span>

          {/* Difficulty pills */}
          <div className="flex gap-2" role="group" aria-label="Filter by difficulty">
            {(['', 'easy', 'medium', 'hard'] as const).map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDifficulty(d)}
                aria-pressed={selectedDifficulty === d}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                  selectedDifficulty === d
                    ? d === ''
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : DIFFICULTY[d].active
                    : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200'
                }`}
              >
                {d === '' ? 'All' : d.charAt(0).toUpperCase() + d.slice(1)}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-gray-700 hidden sm:block" aria-hidden />

          {/* Category dropdown */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter by category"
              className="appearance-none bg-gray-900 border border-gray-700 text-gray-300 text-sm rounded-lg pl-3 pr-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-500 transition-colors cursor-pointer"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

          {/* Difficulty bar info */}
          <div className="group relative flex items-center gap-1 text-gray-600 hover:text-gray-400 transition-colors cursor-default ml-auto" aria-label="Bar length indicates relative difficulty across all problems">
            <InfoIcon />
            <span className="text-xs hidden sm:block">Difficulty bars</span>
            <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-gray-800 border border-gray-700 text-gray-300 text-xs rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 text-center leading-relaxed shadow-xl">
              Bar length shows relative difficulty across the full problem set, not just within a tier.
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-700" />
            </div>
          </div>

          {/* Active filter count + clear */}
          {isFiltered && (
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">
                {filtered.length} of {problems.length}
              </span>
              <button
                onClick={() => { setSelectedDifficulty(''); setSelectedCategory(''); }}
                className="text-xs text-blue-400 hover:text-blue-300 border border-blue-500/30 hover:border-blue-400/50 px-2.5 py-1 rounded-lg transition-colors"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Problem grid */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-12 h-12 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <p className="text-gray-400 font-medium mb-1">No problems match your filters</p>
            <p className="text-gray-600 text-sm">Try adjusting the difficulty or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((problem) => {
              const d = DIFFICULTY[problem.difficulty];
              const descSnippet = problem.description
                .replace(/`[^`]*`/g, (m) => m.slice(1, -1))
                .replace(/\*\*([^*]+)\*\*/g, '$1')
                .split('\n')[0]
                .slice(0, 110);

              return (
                <Link
                  key={problem.id}
                  href={`/interview/${problem.id}`}
                  className="group flex flex-col bg-gray-900/60 border border-gray-800 hover:border-gray-600 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label={`Start interview: ${problem.title}, ${problem.difficulty} difficulty, ${problem.category}`}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className={`shrink-0 px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize border ${d.badge}`}>
                      {problem.difficulty}
                    </span>
                    <span className="text-gray-600 group-hover:text-blue-400 transition-colors mt-0.5">
                      <ArrowIcon />
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-semibold text-white group-hover:text-blue-300 transition-colors leading-snug mb-2 text-[15px]">
                    {problem.title}
                  </h2>

                  {/* Category */}
                  <span className="inline-block text-xs text-gray-500 bg-gray-800/80 border border-gray-700/50 rounded-md px-2 py-0.5 mb-3 w-fit">
                    {problem.category}
                  </span>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mt-auto">
                    {descSnippet}{problem.description.length > 110 ? '...' : ''}
                  </p>

                  {/* Difficulty bar */}
                  <div className="mt-4 h-0.5 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${d.bar}`}
                      style={{ width: `${DIFFICULTY_SCORE[problem.id] ?? 50}%` }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Footer note */}
        {filtered.length > 0 && (
          <p className="text-center text-gray-700 text-sm mt-12">
            {filtered.length} problem{filtered.length !== 1 ? 's' : ''} shown &nbsp;·&nbsp; 45-minute timed sessions &nbsp;·&nbsp; AI-powered feedback
          </p>
        )}
      </div>
    </main>
  );
}

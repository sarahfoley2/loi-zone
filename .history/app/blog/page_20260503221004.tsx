'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = ['All', 'Match Reports', 'European Football', 'Analysis', 'Transfer News', 'Cup Competitions'];

const posts = [
  { slug: 'shamrock-rovers-premier-division', title: 'Shamrock Rovers Continue Dominance in Premier Division', excerpt: 'The Hoops secure another crucial victory as they maintain their lead at the top of the table...', date: '2 May 2026', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=400&fit=crop', category: 'Match Reports' },
  { slug: 'dundalk-european-campaign', title: "Dundalk's Historic European Campaign Continues", excerpt: 'The Lilywhites prepare for another crucial European fixture...', date: '1 May 2026', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=400&fit=crop', category: 'European Football' },
  { slug: 'young-stars-first-division', title: 'Young Stars Shine in First Division', excerpt: "A look at the emerging talent making waves in Ireland's second tier...", date: '30 April 2026', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop', category: 'Analysis' },
  { slug: 'derry-city-transfer-news', title: 'Derry City Make Key Summer Signing', excerpt: 'The Candystripes bolster their squad ahead of the second half of the season...', date: '29 April 2026', image: 'https://images.unsplash.com/photo-1551958219-acbc595d5b6c?w=800&h=400&fit=crop', category: 'Transfer News' },
  { slug: 'fai-cup-preview', title: 'FAI Cup Quarter-Finals Preview', excerpt: 'All four quarter-final ties analysed ahead of a bumper weekend of cup football...', date: '28 April 2026', image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=400&fit=crop', category: 'Cup Competitions' },
  { slug: 'loi-tactical-analysis', title: 'How the Press Has Changed LOI Tactics', excerpt: 'A deep dive into how high-pressing has transformed the Premier Division this season...', date: '27 April 2026', image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&h=400&fit=crop', category: 'Analysis' },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = posts.filter((p) => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-5xl text-gray-900 mb-2">Blog & News</h1>
      <p className="text-gray-500 mb-8 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        Stay up to date with the latest news, match reports, and analysis from the League of Ireland
      </p>

      {/* Search */}
      <div className="relative mb-6">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search posts by title, content, or tags..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#16a34a]"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === cat ? 'bg-[#16a34a] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-gray-400 text-sm mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        Showing {filtered.length} of {posts.length} posts
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div className="overflow-hidden h-48">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>{post.date}</span>
                <span className="text-xs bg-[#f0fdf4] text-[#16a34a] font-semibold px-2 py-0.5 rounded-full" style={{ fontFamily: 'DM Sans, sans-serif' }}>{post.category}</span>
              </div>
              <p className="font-bold text-base mb-2 leading-snug text-gray-900 group-hover:text-[#16a34a] transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {post.title}
              </p>
              <p className="text-gray-500 text-sm mb-3 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{post.excerpt}</p>
              <span className="text-[#16a34a] text-sm font-semibold" style={{ fontFamily: 'DM Sans, sans-serif' }}>Read more →</span>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          No posts found matching your search.
        </div>
      )}
    </div>
  );
}
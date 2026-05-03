'use client';

import { useState } from 'react';

const categories = ['All', 'Match Action', 'European Football', 'Youth', 'Fans', 'Training', 'Celebrations', 'Behind the Scenes', 'Stadiums'];

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80', alt: 'Match action', category: 'Match Action' },
  { id: 2, src: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80', alt: 'Stadium view', category: 'Stadiums' },
  { id: 3, src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80', alt: 'Football on pitch', category: 'Match Action' },
  { id: 4, src: 'https://images.unsplash.com/photo-1551958219-acbc595d5b6c?w=800&q=80', alt: 'Training session', category: 'Training' },
  { id: 5, src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80', alt: 'Fans celebrating', category: 'Fans' },
  { id: 6, src: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80', alt: 'European night', category: 'European Football' },
  { id: 7, src: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80', alt: 'Youth players', category: 'Youth' },
  { id: 8, src: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80', alt: 'Celebrations', category: 'Celebrations' },
  { id: 9, src: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&q=80', alt: 'Behind the scenes', category: 'Behind the Scenes' },
  { id: 10, src: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80', alt: 'Match action 2', category: 'Match Action' },
  { id: 11, src: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&q=80', alt: 'Stadium lights', category: 'Stadiums' },
  { id: 12, src: 'https://images.unsplash.com/photo-1504016798967-59a258e9383f?w=800&q=80', alt: 'Training drill', category: 'Training' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const filtered = photos.filter((p) => activeCategory === 'All' || p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-5xl text-gray-900 mb-2">Photo Gallery</h1>
      <p className="text-gray-500 mb-8 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        Explore our collection of stunning images from across the League of Ireland
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
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

      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
        {filtered.map((photo) => (
          <div
            key={photo.id}
            className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl hover:opacity-90 transition-opacity"
            onClick={() => setLightbox({ src: photo.src, alt: photo.alt })}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo.src} alt={photo.alt} className="w-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 leading-none">×</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
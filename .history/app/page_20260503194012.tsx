import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';

const featuredPosts = [
  {
    slug: 'shamrock-rovers-premier-division',
    title: 'Shamrock Rovers Continue Dominance in Premier Division',
    excerpt: 'The Hoops secure another crucial victory as they maintain their lead at the top of the table...',
    date: '2 May 2026',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80',
    category: 'Match Reports',
  },
  {
    slug: 'dundalk-european-campaign',
    title: "Dundalk's Historic European Campaign Continues",
    excerpt: 'The Lilywhites prepare for another crucial European fixture as they look to make history...',
    date: '1 May 2026',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80',
    category: 'European Football',
  },
  {
    slug: 'young-stars-first-division',
    title: 'Young Stars Shine in First Division',
    excerpt: "A look at the emerging talent making waves in Ireland's second tier...",
    date: '30 April 2026',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    category: 'Analysis',
  },
];

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    title: 'Latest News & Blogs',
    description: 'Stay updated with the latest news, match reports, and in-depth analysis from across the League of Ireland.',
    href: '/blog',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Photo Gallery',
    description: 'Browse our extensive collection of match photos, player portraits, and memorable moments.',
    href: '/gallery',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'League Tables',
    description: 'Track the latest standings, statistics, and results from both divisions of the League of Ireland.',
    href: '/league-tables',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#16a34a] text-white py-24 px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wide" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
          Welcome to LOI.ZONE
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Your home for League of Ireland football – news, analysis, photos, and all the latest from Irish football
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-white text-[#16a34a] font-semibold px-8 py-3 rounded-xl hover:bg-green-50 transition-colors text-sm"
        >
          Read Latest Posts →
        </Link>
      </section>

      {/* Feature Cards */}
      <section className="bg-[#f0fdf4] py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{f.description}</p>
              <Link href={f.href} className="text-[#16a34a] text-sm font-semibold hover:underline">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
            Featured Posts
          </h2>
          <Link href="/blog" className="text-[#16a34a] text-sm font-semibold hover:underline">
            View all posts →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <p className="text-gray-400 text-xs mb-2">{post.date}</p>
                <h3 className="font-bold text-base mb-2 leading-snug group-hover:text-[#16a34a] transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">{post.excerpt}</p>
                <span className="text-[#16a34a] text-sm font-semibold">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import NewsletterSignup from '@/components/NewsletterSignup';

const featuredPosts = [
  {
    slug: 'shamrock-rovers-premier-division',
    title: 'Shamrock Rovers Continue Dominance in Premier Division',
    excerpt: 'The Hoops secure another crucial victory as they maintain their lead at the top of the table...',
    date: '2 May 2026',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=400&fit=crop',
    category: 'Match Reports',
  },
  {
    slug: 'dundalk-european-campaign',
    title: "Dundalk's Historic European Campaign Continues",
    excerpt: 'The Lilywhites prepare for another crucial European fixture as they look to make history...',
    date: '1 May 2026',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=400&fit=crop',
    category: 'European Football',
  },
  {
    slug: 'young-stars-first-division',
    title: 'Young Stars Shine in First Division',
    excerpt: "A look at the emerging talent making waves in Ireland's second tier...",
    date: '30 April 2026',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop',
    category: 'Analysis',
  },
];

const features = [
  {
    title: 'Latest News & Blogs',
    description: 'Stay updated with the latest news, match reports, and in-depth analysis from across the League of Ireland.',
    href: '/blog',
    icon: (
      <svg className="w-8 h-8 text-[#16a34a]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Photo Gallery',
    description: 'Browse our extensive collection of match photos, player portraits, and memorable moments.',
    href: '/gallery',
    icon: (
      <svg className="w-8 h-8 text-[#16a34a]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: 'League Tables',
    description: 'Track the latest standings, statistics, and results from both divisions of the League of Ireland.',
    href: '/league-tables',
    icon: (
      <svg className="w-8 h-8 text-[#16a34a]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero - light background with centered logo */}
      <section className="bg-[#f0fdf4] py-20 px-4 text-center">
        {/* Logo circle */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#16a34a] shadow-lg">
            <Image
              src="/loi-zone-logo.png"
              alt="LOI Zone Logo"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <h1
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight"
          style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 800 }}
        >
          League of Ireland News &amp; Analysis
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          Match reports, photo galleries, and live league tables
        </p>

        {/* Two buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/blog"
            className="bg-[#16a34a] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#15803d] transition-colors text-sm inline-flex items-center gap-2"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Latest Posts →
          </Link>
          <Link
            href="/league-tables"
            className="border-2 border-gray-300 text-gray-800 font-semibold px-8 py-3 rounded-xl hover:border-[#16a34a] hover:text-[#16a34a] transition-colors text-sm inline-flex items-center gap-2"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            View Tables
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col gap-3"
            >
              <div className="w-8 h-8">{f.icon}</div>
              <p className="font-bold text-gray-900 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {f.title}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed flex-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {f.description}
              </p>
              <span className="text-[#16a34a] text-sm font-semibold" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl text-gray-900">Featured Posts</h2>
            <Link
              href="/blog"
              className="text-[#16a34a] text-sm font-semibold hover:underline"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              View all posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="overflow-hidden h-48">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {post.date}
                    </span>
                    <span
                      className="text-xs bg-[#f0fdf4] text-[#16a34a] font-semibold px-2 py-0.5 rounded-full"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <p
                    className="font-bold text-base mb-2 leading-snug text-gray-900 group-hover:text-[#16a34a] transition-colors"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {post.title}
                  </p>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {post.excerpt}
                  </p>
                  <span className="text-[#16a34a] text-sm font-semibold" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
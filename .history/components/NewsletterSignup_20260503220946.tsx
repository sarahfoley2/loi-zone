'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="bg-[#16a34a] py-16 px-4 text-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-5xl mb-3 text-white">Stay in the Loop</h2>
        <p className="text-white/80 text-sm mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          Get the latest League of Ireland news, match reports, and exclusive content delivered to your inbox.
        </p>
        {status === 'success' ? (
          <div className="bg-white/20 rounded-xl px-6 py-4 font-semibold" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            ✅ You're subscribed! Welcome to LOI.ZONE.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-white text-[#16a34a] font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors text-sm disabled:opacity-60 whitespace-nowrap cursor-pointer"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="mt-3 text-red-200 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
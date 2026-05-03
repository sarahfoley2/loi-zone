'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    // Replace this with your actual API route or email service (e.g. Mailchimp, Resend)
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
        <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}>
          Stay in the Loop
        </h2>
        <p className="text-white/80 text-sm mb-8">
          Get the latest League of Ireland news, match reports, and exclusive content delivered straight to your inbox.
        </p>

        {status === 'success' ? (
          <div className="bg-white/20 rounded-xl px-6 py-4 text-white font-semibold">
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
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-white text-[#16a34a] font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors text-sm disabled:opacity-60 whitespace-nowrap"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-3 text-red-200 text-sm">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}

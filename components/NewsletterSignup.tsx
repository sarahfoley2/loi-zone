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
      if (res.ok) { setStatus('success'); setEmail(''); }
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-16 px-4 text-white" style={{ backgroundColor: '#1e7e3e' }}>
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-5xl mb-3 text-white">Stay in the Loop</h2>
        <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'DM Sans, sans-serif' }}>
          Get the latest League of Ireland news, match reports, and exclusive content delivered to your inbox.
        </p>

        {status === 'success' ? (
          <div className="rounded-xl px-6 py-4 font-semibold" style={{ backgroundColor: 'rgba(255,255,255,0.2)', fontFamily: 'DM Sans, sans-serif' }}>
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
              className="flex-1 px-5 py-3 rounded-xl text-gray-700 text-sm focus:outline-none focus:ring-2"
              style={{
                backgroundColor: 'white',
                border: '2px solid white',
                fontFamily: 'DM Sans, sans-serif',
                focusRingColor: '#1e7e3e',
              }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap cursor-pointer"
              style={{ backgroundColor: 'white', color: '#1e7e3e', fontFamily: 'DM Sans, sans-serif' }}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-3 text-sm" style={{ color: '#fca5a5', fontFamily: 'DM Sans, sans-serif' }}>
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
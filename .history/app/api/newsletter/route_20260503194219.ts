import { NextResponse } from 'next/server';

// This is a simple in-memory store for now.
// Later, replace with a real email service like Resend, Mailchimp, or a Supabase table.
const subscribers: string[] = [];

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    if (subscribers.includes(email)) {
      return NextResponse.json({ message: 'Already subscribed' }, { status: 200 });
    }

    subscribers.push(email);
    console.log('New subscriber:', email); // You'll see this in Vercel logs

    // TODO: Replace with real email service:
    // Option 1 – Resend: https://resend.com (recommended, simple)
    // Option 2 – Mailchimp API
    // Option 3 – Save to Supabase table

    return NextResponse.json({ message: 'Subscribed successfully' }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

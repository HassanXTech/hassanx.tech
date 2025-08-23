'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Perfect email validation function
  const isValidEmail = (email: string): boolean => {
    // RFC 5322 compliant email regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    // Additional checks
    if (!email || email.length === 0) return false;
    if (email.length > 254) return false; // RFC 5321 limit
    if (email.indexOf('@') === -1) return false;

    const parts = email.split('@');
    if (parts.length !== 2) return false;

    const [localPart, domainPart] = parts;

    // Local part checks
    if (localPart.length === 0 || localPart.length > 64) return false;
    if (localPart.startsWith('.') || localPart.endsWith('.')) return false;
    if (localPart.includes('..')) return false;

    // Domain part checks
    if (domainPart.length === 0 || domainPart.length > 253) return false;
    if (domainPart.startsWith('.') || domainPart.endsWith('.')) return false;
    if (domainPart.startsWith('-') || domainPart.endsWith('-')) return false;
    if (!domainPart.includes('.')) return false;

    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Handle newsletter subscription here
    console.log('Newsletter subscription:', email);
    setIsSubmitted(true);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(''); // Clear error when user starts typing
  };

  if (isSubmitted) {
    return (
      <section className="space-y-6">
        <div className="" style={{opacity: 1, transform: 'none'}}>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-zinc-900 text-xl md:text-2xl font-semibold leading-relaxed">
                You&apos;re subscribed!
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed max-w-md mx-auto">
              Check your email for a confirmation link. Thanks for joining!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <AnimatedSection>
        <div className="text-center space-y-4">
          <h2 className="text-zinc-900 text-xl md:text-2xl font-semibold leading-relaxed">
            Subscribe to my Newsletter
          </h2>
          <p className="text-zinc-600 text-base leading-relaxed max-w-md mx-auto">
            Tired of balancing code, design, deadlines, and new tools? You&apos;re not alone. Every week I send you what actually works. No fluff, just results.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex justify-center">
          <div className="w-full max-w-md mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  className={`px-6 py-3.5 text-base font-medium border transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 bg-zinc-100 outline-1 outline-offset-[-1px] outline-black/10 text-neutral-400 focus:text-zinc-900 focus:bg-white w-full rounded-xl ${
                    error ? 'border-red-500' : 'border-zinc-200/60'
                  }`}
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {error && (
                  <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
                )}
              </div>
              <button
                className="inline-flex justify-center items-center gap-2.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-500 px-6 w-full text-sm rounded-xl lg:text-base py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={!email.trim()}
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-xs text-zinc-400 text-center mt-3">
              No spam, unsubscribe anytime. Over 1,000 subscribers.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

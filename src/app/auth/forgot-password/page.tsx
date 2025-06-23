'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Logo from '@/assets/logo.svg';
import { HeaderText } from '@/components/ui/headerText';
import { ParagraphText } from '@/components/ui/paragraphText';
import Image from 'next/image';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Simulate form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // TODO: Add password reset logic here (e.g., call Supabase)
      // For now, just redirect to email-sent
      window.location.href = `/auth/email-sent?email=${encodeURIComponent(
        email
      )}`;
    } catch (err) {
      console.error(err);
      setError('Failed to send reset link.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex min-h-screen'>
      <div className='w-full md:w-1/2 flex items-center justify-center p-10'>
        <div className='w-full max-w-md'>
          <div className='flex justify-center mb-10'>
            <Image src={Logo} alt='Logo' />
          </div>
          <HeaderText variant='h2' className='mb-2'>
            Reset password
          </HeaderText>
          <ParagraphText variant='secondary' className='mb-8 text-center'>
            Enter your email to receive a reset link
          </ParagraphText>
          <form onSubmit={handleSubmit}>
            <div className='mb-6'>
              <Input
                type='email'
                name='email'
                variant='default'
                placeholder='Email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type='submit' className='w-full' disabled={loading}>
              {loading ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </form>
          {error && <div className='text-red-500 mt-2'>{error}</div>}
          <ParagraphText
            variant='secondary'
            className='text-center mt-4 text-sm'
          >
            <Link
              href='/auth/login'
              className='text-[var(--color-text-link)] hover:underline'
            >
              Back to Login
            </Link>
          </ParagraphText>
        </div>
      </div>
      <div className='hidden md:block md:w-1/2 bg-[var(--color-bg-side)]'></div>
    </div>
  );
}

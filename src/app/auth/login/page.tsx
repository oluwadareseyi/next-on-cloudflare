'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import EyeIcon from '@/assets/eye.svg';
import { useAuth } from '@/contexts/AuthContext';
import Logo from '@/assets/logo.svg';
import GoogleLogo from '@/assets/googleLogo.svg';
import Footer from '@/components/layout/Footer';
import { HeaderText } from '@/components/ui/headerText';
import { ParagraphText } from '@/components/ui/paragraphText';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { error: authError } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      router.push('/auth/email-sent');
      // await login(email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      router.push('/auth/email-sent');
      // const token = 'token';
      // await googleSignIn(token);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Google authentication failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex min-h-screen bg-white font-geist'>
      {/* Left Side with form */}
      <div className='w-full md:w-1/2 flex flex-col p-10'>
        <div className='mb-8 flex justify-center'>
          <Image src={Logo} alt='Logo' />
        </div>
        <div className='flex-grow flex items-center justify-center'>
          <div className='w-full max-w-md'>
            <HeaderText variant='h1' className='mb-2'>
              Create Like
              <br />
              Magic
            </HeaderText>
            <ParagraphText variant='secondary' className='mb-8 text-center'>
              No Three Wishes Needed.
            </ParagraphText>

            <form onSubmit={handleSubmit}>
              {error ||
                (authError && (
                  <div className='text-red-500 mb-4'>{error || authError}</div>
                ))}
              <div className='mb-6 space-y-2'>
                <div className='group w-full border border-[var(--color-border-light)] rounded-2xl p-3'>
                  <Label htmlFor='email'>Email address</Label>
                  <Input
                    id='email'
                    type='email'
                    variant='plain'
                    placeholder='yourname@example.com'
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    required
                  />
                </div>

                <div className='group w-full border border-[var(--color-border-light)] rounded-2xl p-3'>
                  <Label htmlFor='password'>Password</Label>
                  <div className='relative'>
                    <Input
                      id='password'
                      variant='plain'
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                      }
                      placeholder='Enter your password'
                      required
                    />
                    <button
                      type='button'
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-input-placeholder)] cursor-pointer'
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <Image src={EyeIcon} alt='EyeIcon' />
                    </button>
                  </div>
                </div>
              </div>

              <Button type='submit' className='w-full' disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
            <ParagraphText variant='primary' className='mt-6 text-center'>
              Don&apos;t have an account?{' '}
              <Link
                href='/auth/signup'
                className='text-[var(--color-text-link)] font-medium hover:underline'
              >
                Sign up
              </Link>
            </ParagraphText>

            <div className='flex items-center my-6'>
              <div className='flex-grow border-t border-[var(--color-border-light)]'></div>
              <span className='px-4 text-[var(--color-text-secondary)] text-base font-medium font-geist'>
                Or
              </span>
              <div className='flex-grow border-t border-[var(--color-border-light)]'></div>
            </div>

            <Button
              variant='outline'
              className='w-full'
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <Image src={GoogleLogo} alt='GoogleLogo' />
              Continue with Google
            </Button>
          </div>
        </div>
      </div>

      <div className='hidden md:flex md:w-1/2 md:flex-col md:justify-between'>
        <div className='flex-grow m-4 bg-[var(--color-bg-side)] rounded-3xl flex items-end'>
          <div className='w-full p-12'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

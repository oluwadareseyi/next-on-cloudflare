'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import EyeIcon from '@/assets/eye.svg';
import { useAuth } from '@/contexts/AuthContext';
import Logo from '@/assets/logo.svg';
import { HeaderText } from '@/components/ui/headerText';
import { ParagraphText } from '@/components/ui/paragraphText';
import GoogleLogo from '@/assets/googleLogo.svg';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const { error: authError } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showDomainCheck, setShowDomainCheck] = useState(false);

  const router = useRouter();

  const showAccessRequest = false;
  const [domainInfo, setDomainInfo] = useState<{
    domain: string;
    orgId?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      router.push('/onboarding');
      // await signUp(email, password);

      // Extract domain from email
      const domain = email.split('@')[1];
      setDomainInfo({ domain });
      setShowDomainCheck(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      router.push('/onboarding');
      // const token = 'token';
      // await googleSignIn(token);

      //   if (!supabaseData?.user || supabaseError) {
      //     throw new Error('Google sign-in failed');
      //   }

      // Extract domain from email
      //   const domain = supabaseData.user.email?.split('@')[1];
      //   if (domain) {
      //     setDomainInfo({ domain });
      //     setShowDomainCheck(true);
      //   }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Google sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  //   const handleRequestAccess = async () => {
  //     if (!domainInfo?.orgId) return;
  //     try {
  //       // TODO: Implement access request
  //       setShowDomainCheck(false);
  //       setShowAccessRequest(true);
  //     } catch (err) {
  //       setError(err instanceof Error ? err.message : 'Access request failed');
  //     }
  //   };

  //   const handleCreateNew = () => {
  //     setShowDomainCheck(false);
  //     router.push('/auth/onboarding');
  //   };

  return (
    <div className='flex min-h-screen bg-[var(--color-bg-form)] font-geist'>
      {/* Domain dialogs (implement as needed) */}
      {showDomainCheck && domainInfo && (
        // <DomainCheckDialog
        //   domain={domainInfo.domain}
        //   onRequestAccess={handleRequestAccess}
        //   onCreateNew={handleCreateNew}
        // />
        <></>
      )}
      {showAccessRequest && domainInfo && (
        // <AccessRequest domain={domainInfo.domain} />
        <></>
      )}
      {/* Left side with form */}
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
              {(error || authError) && (
                <div className='text-red-500 mb-4'>{error || authError}</div>
              )}
              <div className='mb-6 flex flex-col gap-2'>
                <div className='group w-full border border-[var(--color-border-light)] rounded-2xl p-3'>
                  <Label
                    htmlFor='email'
                    className='block text-label text-sm font-medium mb-1 text-[var(--color-input-label)]'
                  >
                    Email address
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    variant='plain'
                    placeholder='Yourname@example.com'
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    required
                  />
                </div>
                <div className='group w-full border border-[var(--color-border-light)] rounded-2xl p-3'>
                  <Label
                    htmlFor='password'
                    className='block text-label text-sm font-medium mb-1 text-[var(--color-input-label)]'
                  >
                    Password
                  </Label>
                  <div className='relative'>
                    <Input
                      id='password'
                      name='password'
                      variant='plain'
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                      }
                      placeholder='Enter your password'
                      className='w-full'
                      required
                    />
                    <button
                      type='button'
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-input-placeholder)] cursor-pointer'
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={
                        showPassword ? 'Hide password' : 'Show password'
                      }
                    >
                      <Image src={EyeIcon} alt='EyeIcon' />
                    </button>
                  </div>
                </div>
              </div>
              <Button type='submit' className='w-full' disabled={loading}>
                {loading ? 'Creating account...' : 'Create an Account'}
              </Button>
            </form>
            <ParagraphText variant='secondary' className='mt-6 text-center'>
              Already have an account?{' '}
              <Link
                href='/auth/login'
                className='text-[var(--color-text-link)] font-medium hover:underline'
              >
                Login
              </Link>
            </ParagraphText>
            {/* Divider */}
            <div className='flex items-center my-6'>
              <div className='flex-grow border-t border-[var(--color-border-light)]'></div>
              <span className='px-4 text-[var(--color-text-secondary)] text-base font-medium font-geist'>
                Or
              </span>
              <div className='flex-grow border-t border-[var(--color-border-light)]'></div>
            </div>
            {/* Google login */}
            <Button
              variant='outline'
              className='w-full'
              onClick={handleGoogleSignIn}
              disabled={loading}
              type='button'
            >
              <Image src={GoogleLogo} alt='GoogleLogo' />
              Continue with Google
            </Button>
          </div>
        </div>
      </div>
      {/* Right side with background */}
      <div className='hidden md:flex md:w-1/2 md:flex-col md:justify-between'>
        <div className='flex-grow my-4 mx-4 bg-[var(--color-bg-side)] rounded-3xl flex items-end'>
          <div className='p-12 w-full'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className='flex min-h-screen'>
  //     <div className='w-full md:w-1/2 flex flex-col p-10'>
  //       <div className='mb-8 flex justify-center'>
  //         <h1 className='text-2xl font-bold'>Genie Web</h1>
  //       </div>
  //       <div className='flex-grow flex items-center justify-center'>
  //         <div className='w-full max-w-md'>
  //           <h1 className='text-4xl font-medium mb-2 leading-tight text-center'>
  //             Create Like Magic
  //           </h1>
  //           <p className='text-muted-foreground mb-8 text-center'>
  //             No Three Wishes Needed.
  //           </p>

  //           <form onSubmit={handleSubmit} className='space-y-6'>
  //             {(error || authError) && (
  //               <div className='text-destructive text-sm text-center'>
  //                 {error || authError}
  //               </div>
  //             )}

  //             <div className='space-y-2'>
  //               <Label htmlFor='email'>Email address</Label>
  //               <Input
  //                 id='email'
  //                 type='email'
  //                 placeholder='yourname@example.com'
  //                 value={email}
  //                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  //                   setEmail(e.target.value)
  //                 }
  //                 required
  //               />
  //             </div>

  //             <div className='space-y-2'>
  //               <Label htmlFor='password'>Password</Label>
  //               <div className='relative'>
  //                 <Input
  //                   id='password'
  //                   type={showPassword ? 'text' : 'password'}
  //                   value={password}
  //                   onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  //                     setPassword(e.target.value)
  //                   }
  //                   placeholder='Enter your password'
  //                   required
  //                 />
  //                 <button
  //                   type='button'
  //                   className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground'
  //                   onClick={() => setShowPassword(!showPassword)}
  //                 >
  //                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
  //                 </button>
  //               </div>
  //             </div>

  //             <Button type='submit' className='w-full' disabled={loading}>
  //               {loading ? 'Creating account...' : 'Create an Account'}
  //             </Button>
  //           </form>

  //           <p className='text-center text-sm mt-6'>
  //             Already have an account?{' '}
  //             <Link href='/auth/login' className='text-primary hover:underline'>
  //               Login
  //             </Link>
  //           </p>

  //           <div className='flex items-center my-6'>
  //             <div className='flex-grow border-t' />
  //             <span className='px-4 text-muted-foreground text-sm'>Or</span>
  //             <div className='flex-grow border-t' />
  //           </div>

  //           <Button
  //             variant='outline'
  //             className='w-full'
  //             onClick={handleGoogleSignIn}
  //             disabled={loading}
  //           >
  //             <svg
  //               className='mr-2 h-4 w-4'
  //               aria-hidden='true'
  //               focusable='false'
  //               data-prefix='fab'
  //               data-icon='google'
  //               role='img'
  //               xmlns='http://www.w3.org/2000/svg'
  //               viewBox='0 0 488 512'
  //             >
  //               <path
  //                 fill='currentColor'
  //                 d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
  //               ></path>
  //             </svg>
  //             Continue with Google
  //           </Button>
  //         </div>
  //       </div>
  //     </div>

  //     <div className='hidden md:flex md:w-1/2 bg-muted'>
  //       <div className='flex-grow p-12 flex items-end'>
  //         <div className='w-full'>
  //           <p className='text-center text-sm text-muted-foreground'>
  //             © {new Date().getFullYear()} Genie Web. All rights reserved.
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

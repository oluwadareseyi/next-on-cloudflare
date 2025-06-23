'use client';

import Logo from '@/assets/logo.svg';
import Footer from '@/components/layout/Footer';
import { HeaderText } from '@/components/ui/headerText';
import { ParagraphText } from '@/components/ui/paragraphText';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function EmailSentContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  return (
    <div className='w-full max-w-xl text-center'>
      <div className='mb-8 flex justify-center h-80 w-full bg-white rounded-3xl' />
      <HeaderText variant='h1' className='mb-4 text-[40px] text-[#333]'>
        You&apos;re almost in!
      </HeaderText>
      <ParagraphText variant='secondary' className='mb-8 leading-[24px]'>
        We&apos;ve sent a magic link to {email || 'your email'}. Open your email
        and tap the link to log in.
      </ParagraphText>
      <Link
        href='/auth/login'
        className='inline-block cursor-pointer bg-[var(--color-btn-dark)] text-white px-18 py-3.5 rounded-[90px] font-medium hover:bg-[var(--color-btn-dark-hover)] font-geist shadow-button'
      >
        Back to Login
      </Link>
    </div>
  );
}

export default function EmailSentPage() {
  return (
    <div className='flex min-h-screen w-full flex-col p-10 bg-[var(--color-bg-side)] font-geist'>
      <div className='mb-8 flex justify-center'>
        <Image src={Logo} alt='Logo' />
      </div>
      <div className='flex-grow flex items-center justify-center'>
        <Suspense fallback={null}>
          <EmailSentContent />
        </Suspense>
      </div>
      <div className='mt-auto'>
        <Footer elements={['Genie Labs. 2025', 'Privacy Policy']} />
      </div>
    </div>
  );
}

// src/app/auth/join-team/page.tsx

'use client';

import Logo from '@/assets/logo.svg';
import Footer from '@/components/layout/Footer';
import { HeaderText } from '@/components/ui/headerText';
import { ParagraphText } from '@/components/ui/paragraphText';
import MiniGenieIcon from '@/assets/minigenieIcon.svg';
import Image from 'next/image';

const workspaces = [
  { id: 1, name: 'Mason', members: 6 },
  { id: 2, name: 'Acme Corp', members: 12 },
  { id: 3, name: 'Dream Team', members: 4 },
  { id: 4, name: 'Rocket Labs', members: 9 },
];

export default function JoinTeamPage() {
  return (
    <div className='flex min-h-screen w-full flex-col p-10 bg-[var(--color-bg-side)] font-geist'>
      <div className='mb-8 flex justify-center'>
        <Image src={Logo} alt='Logo' />
      </div>
      <div className='flex-grow flex flex-col items-center md:w-xl max-w-xl mx-auto mt-16'>
        <div className='w-full text-center'>
          <HeaderText variant='h1' className='mb-4 text-[40px] text-[#333]'>
            Join Your Team
          </HeaderText>
          <ParagraphText variant='secondary' className='mb-8 leading-[24px]'>
            Choose a workspace you&apos;d like to join or create your own.
          </ParagraphText>
        </div>
        <div className='border-[var(--color-border-medium)] rounded-3xl w-full border'>
          {workspaces.map((workspace) => (
            <div
              key={workspace.id}
              className='flex justify-between items-center p-6 border-b border-[var(--color-border-medium)] last:border-b-0'
            >
              <div className='flex items-center gap-2'>
                <div className='bg-black w-10 h-10 rounded-lg' />
                <div>
                  <p className='text-[#333333] font-medium text-sm'>
                    {workspace.name}
                  </p>
                  <p className='text-[var(--color-input-label)] font-medium text-xs'>
                    {workspace.members} Members
                  </p>
                </div>
              </div>
              <button className='px-4  cursor-pointer py-1.5 bg-[var(--color-btn-dark)] text-white rounded-3xl font-medium text-sm hover:bg-[var(--color-btn-dark-hover)] transition'>
                Request to join
              </button>
            </div>
          ))}
        </div>
        <div className='flex justify-between items-center w-full bg-[#F0F0F0] p-6 rounded-3xl mt-3'>
          <div className='flex items-center gap-2'>
            <Image src={MiniGenieIcon} alt='MiniGenieIcon' />
            <p className='text-[#333333] font-medium text-sm'>
              Want to use Genie with a different team?
            </p>
          </div>
          <button className='px-4 py-1.5 cursor-pointer bg-white text-[var(--color-btn-dark)] text-sm font-medium border border-[var(--color-border-light)] rounded-3xl'>
            Create a new workspace
          </button>
        </div>
      </div>
      <div className='mt-auto'>
        <Footer elements={['Genie Labs. 2025', 'Privacy Policy']} />
      </div>
    </div>
  );
}

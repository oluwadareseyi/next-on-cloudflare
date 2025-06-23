import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <main className='h-full'>{children}</main>
    </div>
  );
};

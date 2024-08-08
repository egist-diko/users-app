import React, { FC, ReactNode } from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow'>
        <Navbar />
        <div className='p-8'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

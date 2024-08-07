import React, { FC, ReactNode } from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = () => {
  return (
    <>
      <Navbar />
      <div className='p-8'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

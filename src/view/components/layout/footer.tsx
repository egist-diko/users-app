import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button, { ButtonProps } from '../button';
import renderMultipleComponents from '../../../helper/renderMultipleComponents';

export const Footer = () => {
  const navigate = useNavigate();
  const arrayOfButtons: Array<ButtonProps> = [
    {
      content: 'Privacy Policy',
      className: 'text-gray-400 hover:text-white',
      onClickFunction: () => navigate('/users', { replace: true }),
    },
    {
      content: 'Terms of Service',
      className: 'text-gray-400 hover:text-white',
      onClickFunction: () => navigate('/users', { replace: true }),
    },
    {
      content: 'Support',
      className: 'text-gray-400 hover:text-white',
      onClickFunction: () => navigate('/users', { replace: true }),
    },
  ];
  return (
    <footer className='bg-gray-800 text-white py-6'>
      <div className='container mx-auto flex flex-col items-center'>
        <div className='text-center mb-4'>
          <p className='text-lg font-semibold'>UsersApp</p>
          <p className='text-sm'>© 2024 UsersApp. All rights reserved.</p>
        </div>
        <div className='flex space-x-4'>
          {renderMultipleComponents(Button, arrayOfButtons)}
        </div>
      </div>
    </footer>
  );
};

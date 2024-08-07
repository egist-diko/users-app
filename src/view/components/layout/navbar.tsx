import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button, { ButtonProps } from '../button';
import renderMultipleComponents from '../../../helper/renderMultipleComponents';

export const Navbar = () => {
  const navigate = useNavigate();
  const arrayOfButtons: Array<ButtonProps> = [
    {
      content: 'All Users',
      className: 'text-white hover:text-gray-200',
      onClickFunction: () => navigate('/users', { replace: true }),
    },
    {
      content: 'Create User',
      className: 'text-white hover:text-gray-200',
      onClickFunction: () => navigate('/createUser', { replace: true }),
    },
  ];

  return (
    <nav className='bg-blue-600 p-4 shadow-md'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='text-white text-xl font-bold'>UsersApp</div>
        <div className='space-x-4'>
          {renderMultipleComponents(Button, arrayOfButtons)}
        </div>
      </div>
    </nav>
  );
};

import React from 'react';
import renderMultipleComponents from '../../helper/renderMultipleComponents';
import Button, { ButtonProps } from './button';

export interface UserProps {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: 'active' | 'inactive';
}

export interface UserCardProps {
  userData: UserProps;
  showButtons?: boolean;
  onUpdate?: (userData: UserProps) => void;
  onDelete?: (id: number) => void;
  onShow?: (id: number) => void;
}

const UserCard = (props: UserCardProps) => {
  const { userData, onUpdate, onDelete, onShow, showButtons = true } = props;
  const { name, email, gender, status, id } = userData;
  const buttonArray: Array<ButtonProps> = [
    {
      content: 'Show',
      className:
        'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500',
      type: 'button',
      onClickFunction: () => {
        if (onShow) {
          onShow(id);
        }
      },
    },
    {
      content: 'Update',
      className:
        'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500',
      type: 'button',
      onClickFunction: () => {
        if (onUpdate) {
          onUpdate(userData);
        }
      },
    },
    {
      content: 'Delete',
      className:
        'bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500',
      type: 'button',
      onClickFunction: () => {
        if (onDelete) {
          onDelete(id);
        }
      },
    },
  ];
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto'>
      <h2 className='text-2xl font-bold mb-2'>{name}</h2>
      <p className='text-gray-600 mb-2'>{email}</p>
      <p className='text-gray-800 mb-2'>Gender: {gender}</p>
      <p
        className={`text-sm font-medium ${
          status === 'active' ? 'text-green-500' : 'text-red-500'
        }`}
      >
        Status: {status}
      </p>
      {showButtons && (
        <div className='mt-4 flex gap-2'>
          {renderMultipleComponents(Button, buttonArray)}
        </div>
      )}
    </div>
  );
};

export default UserCard;

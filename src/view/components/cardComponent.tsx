import React from 'react';

export interface UserCardProps {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: 'active' | 'inactive';
}

const UserCard: React.FC<UserCardProps> = ({ name, email, gender, status }) => {
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
    </div>
  );
};

export default UserCard;

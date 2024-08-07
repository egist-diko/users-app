import React from 'react';

const LoadingScreen = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
      <div className='flex items-center justify-center'>
        <div className='w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin'></div>
        <p className='ml-4 text-white text-lg'>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;

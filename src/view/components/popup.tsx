import React from 'react';

interface PopupProps {
  type: 'success' | 'failure';
  message: string;
  onClose: () => void;
}

const Popup = (props: PopupProps) => {
  const { type, message, onClose } = props;
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div
        className={`relative p-6 mx-4 max-w-sm w-full bg-white shadow-lg rounded-lg ${
          type === 'success' ? 'border-green-500' : 'border-red-500'
        } border-2`}
      >
        <button
          onClick={onClose}
          className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none'
        >
          &times;
        </button>
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-full ${
            type === 'success' ? 'bg-green-100' : 'bg-red-100'
          } mb-4`}
        >
          <svg
            className={`w-6 h-6 ${
              type === 'success' ? 'text-green-500' : 'text-red-500'
            }`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {type === 'success' ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 13l4 4L19 7'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            )}
          </svg>
        </div>
        <p
          className={`text-center text-lg ${
            type === 'success' ? 'text-green-800' : 'text-red-800'
          }`}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default Popup;

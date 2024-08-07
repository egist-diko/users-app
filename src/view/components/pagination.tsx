import React from 'react';
import Button, { ButtonProps } from './button';
import renderMultipleComponents from '../../helper/renderMultipleComponents';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const { currentPage, totalPages, onPageChange } = props;
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const buttonsArray: Array<ButtonProps> = [
    {
      content: 'Prev',
      className:
        'px-4 py-2 mx-1 text-white bg-blue-500 border border-blue-600 rounded-lg disabled:bg-gray-300',
      disabled: currentPage === 1,
      onClickFunction: handlePrevClick,
    },
    {
      content: 'Next',
      className:
        'px-4 py-2 mx-1 text-white bg-blue-500 border border-blue-600 rounded-lg disabled:bg-gray-300',
      disabled: currentPage === totalPages,
      onClickFunction: handleNextClick,
    },
  ];

  return (
    <div className='flex justify-between mt-4'>
      {renderMultipleComponents(Button, buttonsArray)}
    </div>
  );
};

export default Pagination;

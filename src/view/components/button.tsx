import React from 'react';

export interface ButtonProps {
  content: string;
  className: string;
  onClickFunction: () => void;
}

const Button = (props: ButtonProps) => {
  const { content, className, onClickFunction } = props;
  return (
    <button className={className} onClick={onClickFunction}>
      {content}
    </button>
  );
};

export default Button;

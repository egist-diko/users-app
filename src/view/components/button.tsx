import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps {
  content: string;
  className?: string;
  onClickFunction?: () => void;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

const Button = (props: ButtonProps) => {
  const { content, className, onClickFunction, type } = props;
  return (
    <button className={className} onClick={onClickFunction} type={type}>
      {content}
    </button>
  );
};

export default Button;

import { ErrorMessage } from '@hookform/error-message';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { BasicInputProps } from './form';

export interface InputComponentProps extends BasicInputProps {
  type?: 'text' | 'password' | 'email' | 'number'; // Add any other input types you need
  placeholder?: string;
}

const InputComponent = (props: InputComponentProps) => {
  const {
    type = 'text',
    placeholder = '',
    value,
    onChangeFunction,
    className = '',
    name,
    label,
  } = props;

  const [inputState, setInputState] = useState<string | undefined>(value);
  const {
    formState: { errors },
    register,
  } = useFormContext();

  const { onChange, onBlur, ref } = register(name);

  return (
    <>
      <div className='flex flex-col space-y-2 relative'>
        {label && <label className='text-gray-700 font-medium'>{label}</label>}
        <input
          type={type}
          placeholder={placeholder}
          value={inputState}
          onBlur={onBlur}
          name={name}
          ref={ref}
          onChange={(event) => {
            setInputState(event.target.value);
            onChange(event);
            if (onChangeFunction) {
              onChangeFunction(event.target.value);
            }
          }}
          className={`border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        />
        {errors[name] && (
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className='text-red-500 absolute -bottom-6'>{message}</p>
            )}
          />
        )}
      </div>
    </>
  );
};

export default InputComponent;

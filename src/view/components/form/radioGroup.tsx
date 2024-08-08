import React, { ChangeEvent, useState } from 'react';
import { BasicInputProps } from './form';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface RadioOptions {
  value: string;
  label: string;
}

export interface RadioGroupProps extends BasicInputProps {
  options: Array<RadioOptions>;
}

const RadioGroup = (props: RadioGroupProps) => {
  const { options, name, onChangeFunction, label, value } = props;
  const [selectedValue, setSelectedValue] = useState(value ?? '');
  const {
    formState: { errors },
    register,
  } = useFormContext();

  const { onBlur, onChange, ref } = { ...register(name) };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    onChange(event);
    if (onChangeFunction) {
      onChangeFunction(event.target.value);
    }
  };

  return (
    <>
      {label && <span className='text-lg font-semibold'>{label}</span>}
      <div className='flex items-center relative'>
        {options.map((option) => (
          <label
            key={option.value}
            className='flex items-center space-x-2 pr-4'
          >
            <input
              type='radio'
              value={option.value}
              checked={selectedValue === option.value}
              onBlur={onBlur}
              name={name}
              ref={ref}
              onChange={handleChange}
              className='h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500'
            />
            <span className='text-gray-700'>{option.label}</span>
          </label>
        ))}
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

export default RadioGroup;

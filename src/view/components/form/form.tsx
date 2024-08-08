import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import generateYupSchema, {
  SchemaConfig,
} from '../../../helper/generateYupSchema';
import { InputComponentProps } from './input';
import { RadioGroupProps } from './radioGroup';
import renderForm from '../../../helper/renderForm';
import Button from '../button';

export interface BasicInputProps {
  name: string;
  onChangeFunction?: (value: string) => void;
  className?: string;
  label?: string;
  value?: string;
}

export type FieldType = 'input' | 'radio';

export type FieldData = {
  input: InputComponentProps;
  radio: RadioGroupProps;
};

export interface FormInput<T extends FieldType> {
  type: T;
  data: FieldData[T];
}

interface FormProps {
  inputArray: Array<FormInput<FieldType>>;
  schema: Record<string, SchemaConfig>;
  defaultValues?: Record<string, any>;
  onSubmit: (values: any) => void;
}

export const Form = (props: FormProps) => {
  const { inputArray, defaultValues, schema, onSubmit } = props;
  const formSchema = generateYupSchema(schema);

  const form = useForm({
    resolver: yupResolver(formSchema),
    mode: 'onSubmit',
    defaultValues,
  });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col space-y-10 w-full p-10 '
      >
        {renderForm(inputArray)}
        <Button
          content='Submit'
          type='submit'
          className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 w-min'
        />
      </form>
    </FormProvider>
  );
};

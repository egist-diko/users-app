import InputComponent, {
  InputComponentProps,
} from '../view/components/form/input';
import RadioGroup, {
  RadioGroupProps,
} from '../view/components/form/radioGroup';
import { FieldType, FormInput } from '../view/components/form/form';
import { ReactElement } from 'react';

const renderForm = (arrayOfProps: Array<FormInput<FieldType>>) => {
  const items: ReactElement[] = [];
  for (let i = 0; i < arrayOfProps.length; i++) {
    switch (arrayOfProps[i].type) {
      case 'input':
        items.push(
          <div key={i}>
            <InputComponent
              {...(arrayOfProps[i].data as InputComponentProps)}
            />
          </div>
        );
        break;
      case 'radio':
        items.push(
          <div key={i}>
            <RadioGroup {...(arrayOfProps[i].data as RadioGroupProps)} />
          </div>
        );
        break;
    }
  }

  return <div className='flex flex-col space-y-6'>{items}</div>;
};

export default renderForm;

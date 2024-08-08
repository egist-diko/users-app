import React, { useEffect, useState } from 'react';
import { FieldType, Form, FormInput } from '../components/form/form';
import { SchemaConfig } from '../../helper/generateYupSchema';
import usersApi, { UserInterface } from '../../api/usersApi/userApi';
import Popup from '../components/popup';
import { useLocation } from 'react-router-dom';

const UserForm = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [status, setStatus] = useState<number>(0);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'failure'>(
    'success'
  );
  const location = useLocation();
  const defaultData = location.state?.userData;

  const schema: Record<string, SchemaConfig> = {
    name: { type: 'string', required: true, min: 2, max: 50 },
    email: { type: 'string', required: true, email: true },
    gender: { type: 'string', required: true },
    status: { type: 'string', required: true },
  };

  const onPopupClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (status === 0) {
      return;
    } else if (status === 201) {
      setMessageType('success');
    } else {
      setMessageType('failure');
    }
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  }, [message]);

  const inputArray: Array<FormInput<FieldType>> = [
    {
      type: 'input',
      data: {
        name: 'name',
        label: 'Name',
        type: 'text',
      },
    },
    {
      type: 'input',
      data: {
        name: 'email',
        label: 'Email',
        type: 'email',
      },
    },
    {
      type: 'radio',
      data: {
        name: 'gender',
        label: 'Gender',
        value: defaultData?.gender,
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ],
      },
    },
    {
      type: 'radio',
      data: {
        name: 'status',
        label: 'Status',
        value: defaultData?.status,
        options: [
          { label: 'Active', value: 'active' },
          { label: 'Inactive', value: 'inactive' },
        ],
      },
    },
  ];

  const onSubmit = async (values: UserInterface) => {
    if (defaultData) {
      console.log(values);
    } else {
      const result = await usersApi.createUser(values);
      setStatus(result.status);
      if (result.status === 201) {
        setMessage('User creation was successful!');
      } else {
        if (result.data) {
          setMessage(`${result.data[0].field} ${result.data[0].message}`);
        } else {
          setMessage(result.statusText);
        }
      }
      console.log(result);
    }
  };
  return (
    <>
      <Form
        onSubmit={onSubmit}
        schema={schema}
        inputArray={inputArray}
        defaultValues={defaultData}
      />
      {showPopup && (
        <Popup message={message} type={messageType} onClose={onPopupClose} />
      )}
    </>
  );
};

export default UserForm;

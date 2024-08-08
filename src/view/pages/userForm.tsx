import React, { useEffect, useState } from 'react';
import { FieldType, Form, FormInput } from '../components/form/form';
import { SchemaConfig } from '../../helper/generateYupSchema';
import usersApi, { UserInterface } from '../../api/usersApi/userApi';
import Popup from '../components/popup';
import { useLocation } from 'react-router-dom';
import PopupModal from '../components/popupModal';

const UserForm = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [status, setStatus] = useState<number>(0);
  const [submittionState, setSubmittionState] = useState<boolean>(true);
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
    } else if (status === 201 || status === 200) {
      setMessageType('success');
    } else {
      setMessageType('failure');
    }
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  }, [submittionState]);

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
      const result = await usersApi.updateUser(values);
      setStatus(result.status);
      if (result.status === 200) {
        setMessage('User update was successful!');
      } else {
        if (result.data) {
          setMessage(`${result.data[0].field} ${result.data[0].message}`);
        } else {
          setMessage(result.statusText);
        }
      }
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
    }
    setSubmittionState(!submittionState);
  };
  return (
    <div className='flex justify-center items-center p=10 w-full border-blue-600 border-4 rounded-lg'>
      <Form
        onSubmit={onSubmit}
        schema={schema}
        inputArray={inputArray}
        defaultValues={defaultData}
      />
      {showPopup && (
        <PopupModal
          child={
            <Popup
              message={message}
              type={messageType}
              onClose={onPopupClose}
            />
          }
        />
      )}
    </div>
  );
};

export default UserForm;

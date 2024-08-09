import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserCard, { UserProps } from '../components/cardComponent';
import usersApi from '../../api/usersApi/userApi';
import LoadingScreen from '../components/loadingScreen';

const DisplayUser = () => {
  const location = useLocation();
  const id = location.state?.id;
  const [loadingState, setLoadingState] = useState<boolean>(true);
  const [userData, setUserData] = useState<UserProps>({
    email: '',
    gender: '',
    name: '',
    status: 'inactive',
    id: 0,
  });

  const getUser = async () => {
    setLoadingState(true);
    const result = await usersApi.getUser(id);
    setUserData(result.data);
    setLoadingState(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loadingState) {
    return <LoadingScreen />;
  }

  return <UserCard showButtons={false} userData={userData} />;
};

export default DisplayUser;

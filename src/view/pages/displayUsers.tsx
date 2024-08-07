import React, { useEffect, useState } from 'react';
import UserCard, { UserCardProps } from '../components/cardComponent';
import renderMultipleComponents from '../../helper/renderMultipleComponents';
import makeRequest from '../../helper/makeRequest';

const DisplayUsers = () => {
  const [userData, setUserData] = useState<Array<UserCardProps>>([]);
  const fetchUsers = async () => {
    try {
      const result = await makeRequest({ method: 'GET', url: '/users' });
      setUserData(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className='flex flex-wrap justify-between items-center p-8 gap-y-3 gap-x-1'>
      {renderMultipleComponents(UserCard, userData)}
    </div>
  );
};

export default DisplayUsers;

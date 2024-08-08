import React, { useEffect, useState } from 'react';
import UserCard, { UserCardProps } from '../components/cardComponent';
import renderMultipleComponents from '../../helper/renderMultipleComponents';
import Pagination from '../components/pagination';
import LoadingScreen from '../components/loadingScreen';
import { AxiosResponse } from 'axios';
import usersApi from '../../api/usersApi/userApi';

const DisplayUsers = () => {
  const [userData, setUserData] = useState<Array<UserCardProps>>([]);
  const [loadingState, setLoadingState] = useState<boolean>(true);
  const [pageState, setPageState] = useState<number>(1);
  const [totalPagesState, setTotalPagesState] = useState<number>(0);

  const getUsers = async () => {
    setLoadingState(true);
    const result: AxiosResponse<any, any> = await usersApi.fetchUsers(
      pageState
    );
    setUserData(result.data);
    setTotalPagesState(result.headers['x-pagination-pages']);
    setLoadingState(false);
  };

  useEffect(() => {
    getUsers();
  }, [pageState]);

  if (loadingState) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div className='flex flex-wrap justify-between items-center gap-y-3 gap-x-1'>
        {renderMultipleComponents(UserCard, userData)}
      </div>
      <Pagination
        currentPage={pageState}
        onPageChange={setPageState}
        totalPages={totalPagesState}
      />
    </>
  );
};

export default DisplayUsers;

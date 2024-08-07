import React, { useEffect, useState } from 'react';
import UserCard, { UserCardProps } from '../components/cardComponent';
import renderMultipleComponents from '../../helper/renderMultipleComponents';
import Pagination from '../components/pagination';
import fetchUsers from '../../api/usersApi/userApi';
import LoadingScreen from '../components/loadingScreen';

const DisplayUsers = () => {
  const [userData, setUserData] = useState<Array<UserCardProps>>([]);
  const [loadingState, setLoadingState] = useState<boolean>(true);
  const [pageState, setPageState] = useState<number>(1);
  const [totalPagesState, setTotalPagesState] = useState<number>(0);

  useEffect(() => {
    setLoadingState(true);
    const result = fetchUsers(pageState);
    result.then((res) => {
      setUserData(res.data);
      setLoadingState(false);
      setTotalPagesState(res.totalPages);
    });
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

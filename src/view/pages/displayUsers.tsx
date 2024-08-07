import React, { useEffect, useState } from 'react';
import UserCard, { UserCardProps } from '../components/cardComponent';
import renderMultipleComponents from '../../helper/renderMultipleComponents';
import makeRequest from '../../helper/makeRequest';
import Pagination from '../components/pagination';
import fetchUsers from '../../api/usersApi/userApi';

const DisplayUsers = () => {
  const [userData, setUserData] = useState<Array<UserCardProps>>([]);
  const [pageState, setPageState] = useState<number>(1);
  const [totalPagesState, setTotalPagesState] = useState<number>(0);

  useEffect(() => {
    const result = fetchUsers(pageState);
    result.then((res) => {
      setUserData(res.data);
      setTotalPagesState(res.totalPages);
    });
  }, [pageState]);

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

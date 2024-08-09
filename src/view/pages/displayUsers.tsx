import React, { useEffect, useState } from 'react';
import UserCard, {
  UserCardProps,
  UserProps,
} from '../components/cardComponent';
import renderMultipleComponents from '../../helper/renderMultipleComponents';
import Pagination from '../components/pagination';
import LoadingScreen from '../components/loadingScreen';
import { AxiosResponse } from 'axios';
import usersApi from '../../api/usersApi/userApi';
import { useNavigate } from 'react-router-dom';
import PopupModal from '../components/popupModal';

const DisplayUsers = () => {
  const [userData, setUserData] = useState<Array<UserCardProps>>([]);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [loadingState, setLoadingState] = useState<boolean>(true);
  const [pageState, setPageState] = useState<number>(1);
  const [totalPagesState, setTotalPagesState] = useState<number>(0);
  const [userID, setUserId] = useState<number>(0);
  const navigate = useNavigate();

  const onUpdate = (userData: UserProps) =>
    navigate(`/users/${userData.id}`, {
      replace: true,
      state: { userData: userData },
    });

  const onModalDelete = async (id: number) => {
    setLoadingState(true);
    const result: AxiosResponse<any, any> = await usersApi.deleteUser(id);
    getUsers();
    setShowDialog(false);
  };

  const onDelete = (id: number) => {
    setShowDialog(true);
    setUserId(id);
  };

  const onShow = (id: number) => {
    navigate(`/user/${id}`, {
      replace: true,
      state: { id },
    });
  };

  const getUsers = async () => {
    setLoadingState(true);
    const result: AxiosResponse<any, any> = await usersApi.fetchUsers(
      pageState
    );
    let userTempData = [];
    for (let i = 0; i < result.data.length; i++) {
      userTempData.push({
        userData: result.data[i],
        onUpdate,
        onDelete,
        onShow,
      });
    }
    setUserData(userTempData);
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
      {showDialog && (
        <PopupModal
          child={
            <div className='absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-25'>
              <div className='bg-white rounded-lg shadow-lg p-6 max-w-sm w-full'>
                <h2 className='text-lg font-semibold mb-4'>
                  Are you sure you want to delete this user?
                </h2>
                <div className='flex justify-end space-x-4'>
                  <button
                    onClick={() => {
                      onModalDelete(userID);
                    }}
                    className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setShowDialog(false);
                    }}
                    className='bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300'
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          }
        />
      )}
    </>
  );
};

export default DisplayUsers;

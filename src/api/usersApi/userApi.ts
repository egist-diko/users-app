import makeRequest from '../../helper/makeRequest';

const fetchUsers = async (page: number) => {
  try {
    const result = await makeRequest({
      method: 'GET',
      url: '/users',
      params: {
        page: page,
        per_page: 10,
      },
      wantHeaders: true,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default fetchUsers;

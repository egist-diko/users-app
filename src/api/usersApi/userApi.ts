import { AxiosError, AxiosResponse } from 'axios';
import makeRequest from '../../helper/makeRequest';

export interface UserInterface {
  id?: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

const usersApi = {
  fetchUsers: async (page: number): Promise<AxiosResponse<any, any>> => {
    try {
      const result: AxiosResponse<any, any> | AxiosError<unknown | any> =
        await makeRequest({
          method: 'GET',
          url: '/users',
          params: {
            page: page,
            per_page: 10,
          },
        });
      return result;
    } catch (error) {
      throw error;
    }
  },
  createUser: async (body: UserInterface): Promise<AxiosResponse<any, any>> => {
    try {
      const result = await makeRequest({
        method: 'POST',
        url: '/users',
        data: body,
      });
      return result;
    } catch (error) {
      throw error;
    }
  },
};
export default usersApi;

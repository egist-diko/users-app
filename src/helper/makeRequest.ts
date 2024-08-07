import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://gorest.co.in/public/v2',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
  },
});

interface RequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  data?: any;
  params?: any;
}

const makeRequest = async ({ method, url, data, params }: RequestConfig) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
    } else {
      console.error('Error:', error);
    }
    throw error;
  }
};

export default makeRequest;

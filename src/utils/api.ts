import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async (url: string, params?: any) => {
  try {
    const response = await api.get(url, { params });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export const post = async (url: string, data: any) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export const put = async (url: string, data: any) => {
  try {
    const response = await api.put(url, data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export const del = async (url: string) => {
  try {
    const response = await api.delete(url);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

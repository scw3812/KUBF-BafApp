import { API } from './apiUtils';

const USER_ENDPOINT = '/users';
const userApi = {
  getProfileCounts: async (userId: number) => await API.get(`${USER_ENDPOINT}/${userId}/profile`),
  getPosts: async (userId: number) => await API.get(`${USER_ENDPOINT}/${userId}/posts`),
  getComments: async (userId: number) => await API.get(`${USER_ENDPOINT}/${userId}/comments`),
  deleteUser: async (userId: number) => await API.delete(`${USER_ENDPOINT}/${userId}`),
};

export { userApi };

import { API } from './apiUtils';

const AUTH_ENDPOINT = '/auth';
const authApi = {
  emailLogin: async (body: { email: string; password: string }) => await API.post(`${AUTH_ENDPOINT}/email`, body),
};

export { authApi };

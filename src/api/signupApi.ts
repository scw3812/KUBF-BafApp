import { API } from './apiUtils';

const SIGN_UP_ENDPOINT = '/signup';
const signupApi = {
  emailSignUp: async (body: { email: string; password: string; nickname: string; name: string }) =>
    await API.post(`${SIGN_UP_ENDPOINT}/email`, body),
  getEmailDuplicate: async (body: { email: string }) => await API.post(`${SIGN_UP_ENDPOINT}/duplicate/email`, body),
  getNicknameDuplicate: async (body: { nickname: string }) =>
    await API.post(`${SIGN_UP_ENDPOINT}/duplicate/nickname`, body),
};

export { signupApi };

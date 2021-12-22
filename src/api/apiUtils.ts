import Axios from 'axios';
import type { AxiosError } from 'axios';

const isApiError = (err: any): err is AxiosError => Axios.isAxiosError(err);
const API = Axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export { isApiError, API };

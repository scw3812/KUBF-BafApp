import { API } from './apiUtils';

const CATEGORY_ENDPOINT = '/categories';
const categoryApi = {
  getCategories: async () => await API.get(CATEGORY_ENDPOINT),
};

export { categoryApi };

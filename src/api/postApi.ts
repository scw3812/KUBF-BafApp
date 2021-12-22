import { API } from './apiUtils';

const POST_ENDPOINT = '/posts';
const postApi = {
  getLatestPost: async () => await API.get(`${POST_ENDPOINT}/latest`),
  deletePost: async (postId: number) => await API.delete(`${POST_ENDPOINT}/${postId}`),
  getCategoryPosts: async (categoryId: number) => await API.get(`${POST_ENDPOINT}/categories/${categoryId}`),
  addPost: async (body: { userId: number; title: string; content: string; categoryId: number }) =>
    await API.post(POST_ENDPOINT, body),
};

export { postApi };

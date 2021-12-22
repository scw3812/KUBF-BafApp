import { API } from './apiUtils';

const COMMENT_ENDPOINT = '/comments';
const commentApi = {
  getPostComments: async (postId: number) => await API.get(`${COMMENT_ENDPOINT}/${postId}`),
  deleteComments: async (commentId: number) => await API.delete(`${COMMENT_ENDPOINT}/${commentId}`),
  postComment: async (body: { userId: number; content: string; postId: number }) =>
    await API.post(COMMENT_ENDPOINT, body),
};

export { commentApi };

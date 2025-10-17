const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const jsonPlaceholderAPI = {
  // Get all posts
  async getPosts() {
    try {
      const response = await fetch(`${BASE_URL}/posts`);
      if (!response.ok) throw new Error('Failed to fetch posts');
      return await response.json();
    } catch (error) {
      throw new Error(`API Error: ${error.message}`);
    }
  },

  // Get posts with pagination
  async getPostsPaginated(page = 1, limit = 10) {
    try {
      const response = await fetch(
        `${BASE_URL}/posts?_page=${page}&_limit=${limit}`
      );
      if (!response.ok) throw new Error('Failed to fetch posts');
      
      const totalCount = response.headers.get('x-total-count');
      const posts = await response.json();
      
      return {
        posts,
        totalPages: Math.ceil(totalCount / limit),
        currentPage: page
      };
    } catch (error) {
      throw new Error(`API Error: ${error.message}`);
    }
  },

  // Get single post
  async getPost(id) {
    try {
      const response = await fetch(`${BASE_URL}/posts/${id}`);
      if (!response.ok) throw new Error('Failed to fetch post');
      return await response.json();
    } catch (error) {
      throw new Error(`API Error: ${error.message}`);
    }
  },

  // Get comments for a post
  async getComments(postId) {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
      if (!response.ok) throw new Error('Failed to fetch comments');
      return await response.json();
    } catch (error) {
      throw new Error(`API Error: ${error.message}`);
    }
  }
};
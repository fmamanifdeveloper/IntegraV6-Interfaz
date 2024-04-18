export const API_ROUTES_COMERCIAL = {
    users: {
        getAll: '/api/users',
        getById: (userId: string) => `/api/users/${userId}`,
        createUser: '/api/users',
      },
      posts: {
        getAll: '/api/posts',
        getById: (postId: string) => `/api/posts/${postId}`,
        createPost: '/api/posts',
      },
}
const ENDPOINTS = {
    POSTS: {
        ADD: '/posts',
        GET: '/posts/{id}',
        LIST: '/posts?offset={offset}&limit={limit}',
        SEARCH: '/posts/search?q={key}',
        UPDATE: '/posts/{id}',
        DELETE: '/posts/${id}'
    }
}

export default ENDPOINTS;
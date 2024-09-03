import ENDPOINTS from "../../../data/constants/endpoints";
import api from "../../../services";
import { PostModel, PostListQueryArgs, PostListResponse, PostResponse } from "../../../types/post";
import { formatTemplate } from "../../../utils";

const postApi = api.injectEndpoints({
    endpoints: (builder) => ({

        addPost: builder.mutation<PostModel, void>({
            query: (data) => ({
                url: ENDPOINTS.POSTS.ADD,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Post']
        }),

        getPosts: builder.query<PostListResponse<PostModel>, PostListQueryArgs>({
            query: ({ offset, limit }) => formatTemplate(ENDPOINTS.POSTS.LIST, { offset, limit }),
            providesTags: (res) => res ? res.data.map(({ id }) => ({ type: 'Post', id })) : ['Post']
        }),

        getPost: builder.query<PostResponse<PostModel>, number>({
            query: (id) => formatTemplate(ENDPOINTS.POSTS.GET, { id }),
            providesTags: (res, err, arg) => [{ type: 'Post', id: arg }]
        }),

        searchPosts: builder.query<PostListResponse<PostModel>, string>({
            query: (key) => formatTemplate(ENDPOINTS.POSTS.SEARCH, { key }),
            providesTags: (res) => res ? res.data.map(({ id }) => ({ type: 'Post', id })) : ['Post']
        }),

        updatePost: builder.mutation<PostModel, number>({
            query: (id) => ({
                url: formatTemplate(ENDPOINTS.POSTS.UPDATE, { id }),
                method: 'PATCH',
                body: {}
            }),
            invalidatesTags: (res, err, id) => [{ type: 'Post', id }]
        }),

        deletePost: builder.mutation<void, number>({
            query: (id) => ({
                url: formatTemplate(ENDPOINTS.POSTS.DELETE, { id }),
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        })

    })
});

export const {
    useAddPostMutation,
    useGetPostQuery,
    useGetPostsQuery,
    useLazyGetPostsQuery,
    useSearchPostsQuery,
    useUpdatePostMutation,
    useDeletePostMutation
} = postApi;
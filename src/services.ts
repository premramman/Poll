import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const baseQueryConfig = {
    baseUrl: `${API_BASE_URL}/api`,
    // TODO: Uncomment below code for authorization
    // prepareHeaders: (headers, { getState }) => {
    //     const token = getState().auth.userToken;

    //     if (token) {
    //         headers.set('authorization', `Bearer ${token}`)
    //     }

    //     return headers;
    // }
};

// Define a service using a base URL and expected endpoints
const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery(baseQueryConfig),
    endpoints: () => ({})
})

export default api;
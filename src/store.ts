import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import api from './services';

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

// Required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export default store;
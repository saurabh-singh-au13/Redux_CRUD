import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { postApi } from "../services/post";


export const store = configureStore({
    reducer: {
        [ postApi.reducerPath ] : postApi.reducer,

    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(postApi.middleware),
})

setupListeners(store.dispatch);

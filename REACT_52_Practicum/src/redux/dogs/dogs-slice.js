import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
    loading: false,
    error: null,
};

const request = (store) => {
    store.loading = true;
    store.error = null;
};

const error = (store, { payload }) => {
    store.loading = false;
    store.error = payload;
}

const dogsSlice = createSlice({
    name: 'dogs',
    initialState,
    reducers: {
        fetchDogsRequest: request,
        fetchDogsError: error,
        fetchDogsSuccess: (store, { payload }) => {
            store.loading = false;
            store.items = payload;
        }
    }
}

);

export const {
    fetchDogsRequest,
    fetchDogsError,
    fetchDogsSuccess,
} = dogsSlice.actions;

export default dogsSlice.reducer;
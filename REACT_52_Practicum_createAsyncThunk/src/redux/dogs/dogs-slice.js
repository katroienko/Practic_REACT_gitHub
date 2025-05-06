import { createSlice } from "@reduxjs/toolkit";
import {fetchDogs} from './dogs-thunks'


const initialState = {
    items: [],
    loading: false,
    error: null,
};

const pending = (store) => {
    store.loading = true;
    store.error = null;
};

const rejected = (store, { payload }) => {
    store.loading = false;
    store.error = payload;
}

const dogsSlice = createSlice({
    name: 'dogs',
    initialState,
    // reducers: {
    //     fetchDogsRequest: request,
    //     fetchDogsError: error,
    //     fetchDogsSuccess: (store, { payload }) => {
    //         store.loading = false;
    //         store.items = payload;
    //     }
    // },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchDogs.pending, pending)
        .addCase(fetchDogs.fulfilled, (store, { payload }) => {
            store.loading = false;
            store.items = payload;
        })
        .addCase(fetchDogs.rejected, rejected)
    }

}

);

// export const {
//     fetchDogsRequest,
//     fetchDogsError,
//     fetchDogsSuccess,
// } = dogsSlice.actions;

export default dogsSlice.reducer;
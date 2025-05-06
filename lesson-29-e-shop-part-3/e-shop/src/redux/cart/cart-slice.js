import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    items:[],
    loading: false,
    error: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,

})

export default cartSlice.reducer
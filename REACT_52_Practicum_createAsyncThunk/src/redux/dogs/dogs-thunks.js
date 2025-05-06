import {createAsyncThunk} from '@reduxjs/toolkit'


// import {
//     fetchDogsRequest,
//     fetchDogsError,
//     fetchDogsSuccess,
// } from './dogs-slice'

import { getDogsApi } from '../../api/dogs-api'


export const fetchDogs = createAsyncThunk (
    'dogs/fetch', 
    async (_, {rejectWithValue}) => {
        try {
            const data = await getDogsApi();
            return data;
            
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message)
        }
    }
);
// export const  fetchDogs = () => {
//     const func = async (dispatch) => {
//         try {
//             dispatch(fetchDogsRequest());
//             const data = await getDogsApi();
//             dispatch(fetchDogsSuccess(data))

//         } catch (error) {
//             dispatch(fetchDogsError(error?.response?.data?.message))
//         }
//     }
//     return func;
// }
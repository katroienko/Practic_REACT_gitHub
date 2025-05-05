import {
    fetchDogsRequest,
    fetchDogsError,
    fetchDogsSuccess,
} from './dogs-slice'

import { getDogsApi } from '../../api/dogs-api'


export const fetchDogs = () => {
    const func = async (dispatch) => {
        try {
            dispatch(fetchDogsRequest());
            const data = await getDogsApi();
            dispatch(fetchDogsSuccess(data))

        } catch (error) {
            dispatch(fetchDogsError(error?.response?.data?.message))
        }
    }
    return func;
}
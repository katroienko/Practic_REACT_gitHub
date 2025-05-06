import axios from "axios"


const dogsInstance = axios.create({
    baseURL: 'https://api.thedogapi.com/v1/breeds'
});

export const getDogsApi = async()=> {
    const {data} = await dogsInstance.get('/');
    return data;
}
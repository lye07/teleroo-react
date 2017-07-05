import axios from 'axios';

export const FETCH_MEDIA ='fetch_media';
export const CREATE_MEDIA = 'create_media';
export const FETCH_SINGLE_MEDIA = 'fetch_single_media';
export const DELETE_SINGLE_MEDIA ='delete_single_media';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=lye007';

export function fetchMedia(){
    const request = axios.get(ROOT_URL + '/posts' + API_KEY);
    return {
        type: FETCH_MEDIA,
        payload: request
        //request resolved by the redux-promise middleware
    };
}


export function createMedia(values,callback){
    const request = axios.post(ROOT_URL + '/posts' + API_KEY, values)
        .then(() => callback());
    return {
        type: CREATE_MEDIA,
        payload: request
    };
}

export function fetchSingleMedia(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: FETCH_SINGLE_MEDIA,
        payload: request
    }
}

export function deleteSingleMedia(id,callback){
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(() => callback());
    return{
        type: DELETE_SINGLE_MEDIA,
        payload: id
    }
}
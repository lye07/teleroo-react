import _ from 'lodash';
import { FETCH_MEDIA , FETCH_SINGLE_MEDIA, DELETE_SINGLE_MEDIA} from '../actions'; //import payload from actions

export function MediaReducer(state={},action){
    switch (action.type){
        case FETCH_SINGLE_MEDIA:
            return { ...state, [action.payload.data.id]: action.payload.data};//key interpolation es6 here/ meaning make a new key with the ID value. set its value equal to action.payload.data
        case FETCH_MEDIA:
            return _.mapKeys(action.payload.data, 'id');

        case DELETE_SINGLE_MEDIA:
            return _.omit(state, action.payload);


        default:
            return state;
    }
}



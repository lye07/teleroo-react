import { combineReducers } from 'redux';
import {  MediaReducer} from './reducer_media';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    media : MediaReducer,
    form: formReducer
});

export default rootReducer;

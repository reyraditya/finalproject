import {combineReducers} from 'redux';

import AuthReducer from './AuthReducer';
import ProdReducer from './ProdReducer';

export default combineReducers(
    {
        auth: AuthReducer,
        prod: ProdReducer
    }
)
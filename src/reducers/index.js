import {combineReducers} from 'redux';

import AuthReducer from './AuthReducer';
import ProdReducer from './ProdReducer';
import OrderReducer from './OrderReducers';

export default combineReducers(
    {
        auth: AuthReducer,
        prod: ProdReducer,
        order: OrderReducer
    }
)
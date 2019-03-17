import {combineReducers} from 'redux';

const init = {
    id: "",
    username: "",
    error: '',
}

const AuthReducers = (state = init, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                id: action.payload.id,
                username: action.payload.username
            }
        
        case 'LOGOUT_USER':
            return(state = init);
        
        case 'AUTH_ERROR':
            return{
                ...state,
                error: action.payload
            }
        
        case 'SET_TIMEOUT':
            return{
                ...state,
                error: '',
            }

        default:
            return state
    }
}

export default combineReducers (
    {
        auth: AuthReducers
    }
)
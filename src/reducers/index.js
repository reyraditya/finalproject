import {combineReducers} from 'redux';

const init = {
    id: "",
    username: "",
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

        default:
            return state
    }
}

export default combineReducers (
    {
        auth: AuthReducers
    }
)
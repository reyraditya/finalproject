const init = {
    id: "",
    username: "",
    email: "",
    password: "",
    addresses: [],
    error: "",
    success: ""
}

export default (state = init, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
            };

        case 'KEEP_LOGIN':
            return {
                ...state, 
                id: action.payload.id, 
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
            };
        
        case 'LOGOUT_USER':
            return(state = init);

        case 'GET_ADDRESSES':
            return{
                ...state, 
                addresses: action.payload.data
            };
        
        case 'AUTH_ERROR':
            return{
                ...state,
                error: action.payload.error,
                success: ""
            };

        case 'SET_TIMEOUT':
            return{
                ...state,
                error: "",
                success: ""
            };
        
        case 'AUTH_SUCCESS':
            return{
                ...state,
                error:"",
                success: action.payload
            };

        default:
            return state
    }
}
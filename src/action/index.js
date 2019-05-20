import axios from '../config/axios';
import cookies from 'universal-cookie';

const cookie = new cookies()

// Login users
export const onLoginClick = (email, password) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('/users/login', { email, password })
            console.log(res);

            if(res.data.length !== 1) {
                return dispatch ({
                    type: 'LOGIN_ERR',
                    payload: res.data
                }) 
            }

            cookie.set('stillLogged', res.data[0].username, { path: '/' })
            cookie.set('idLogin', res.data[0].id, { path: '/' })
            cookie.set('email', res.data[0].email, { path: '/' })
            cookie.set('password', res.data[0].password, { path: '/' })
            cookie.set('status', res.data[0].status, {path: '/'})

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: {
                    id: res.data[0].id,
                    username: res.data[0].username,
                    email: res.data[0].email,
                    password: res.data[0].password,
                }
            })

        } catch (e) {
            console.log(e);

        }
    }
}

// keeping user's sessions
export const keepLogin = (id, username, email, password) => {
    if(username === undefined && id === undefined){
        return{
            type: 'KEEP_LOGIN',
            payload: {
                id: '',
                username: '',
                email: '',
                password: ''
            }
        } 
    }return{
        type: 'KEEP_LOGIN',
        payload: {
            id, 
            username,
            email,
            password
        }
    }
}

// Logout user
export const onLogoutUser = () => {
    cookie.remove("stillLogged")
    cookie.remove("idLogin")
    cookie.remove("username")
    cookie.remove("email")
    cookie.remove("password")
    return {type: "LOGOUT_USER"};
}

export const onSetTimeOut = () => {
    return {type: "SET_TIMEOUT"}
}

// Register new user
export const onRegisterUser = (username, email, password) => {
    return async (dispatch) => {
       try {
           const res = await axios.get(`/getusers/${email}/${username}`)
           console.log(res.data);
           
           if(res.data.length === 0){
                await axios.post('/users', {
                    username, email, password
                })
               
                return dispatch({
                   type: 'AUTH_SUCCESS',
                   payload: 'Register succeeded. Please go to login'
               })
           } else if(res.data.length !== 0){
               return dispatch({
                   type: 'AUTH_ERROR',
                   payload: 'Email or username has been taken'
               })
           }
       } catch (e) {
           console.log(e);
           
       }
    }
}

// Show all address
 export const getAddress = () => {
     return async dispatch => {
        try {
         const userid = cookie.get('idLogin')
         const res = await axios.get(`/addresses/${userid}`)

         dispatch({
             type: 'GET_ADDRESSES',
             payload: res
         })
        
        } catch (e) {
            console.log(e);
         
        }
    }   
 }

//  Edit user's credentials
export const editCred = (username, email, password) => {
    return async (dispatch) =>  {
        try {
            const userid = cookie.get('idLogin')
            const res = await axios.patch(`/users/${userid}`, {
                username,
                email,
                password
            })
            console.log(res);

            if(res.data[0].username){
                return dispatch({
                    type: 'EDIT_PROFILE',
                    payload: res
                })
            }

        } catch (e) {
            console.log(e);
        }
    }
}

// get user's cred by user id
export const getUser = () => {
    return async dispatch => {
        try {
            const userid = cookie.get('idLogin')
            const res = await axios.get(`/getusers/${userid}`)
            console.log(res.data);
            
            return dispatch({
                type: 'EDIT_PROFILE',
                payload: res
            })
            
        } catch (e) {
            console.log(e);
            
        }
    } 
}

// get user's credentials (username and email) => as protective in register
export const getCred = () => {
    return async () => {
        try {
            const email = cookie.get('email')
            const username = cookie.get('stillLogged')
            const res = await axios.get(`/getusers/${email}/${username}`)
            console.log(res);
            
        } catch (e) {
            console.log(e);
            
        }
    }
}


// Get all products
export const getProducts = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('/allproducts')
            console.log(res);

            return dispatch ({
                type: 'SHOW_PRODUCT',
                payload: res
            })
            
        } catch (e) {
            console.log(e);
            
        }
    }
}

// Delete products
export const deleteProducts = (productid) => {
    return async () => {
        try { 
            await axios.delete(`/deleteproducts/${productid}`)
            this.getProducts()
        } catch (e) {
            console.log(e);
    
        }
    }
}
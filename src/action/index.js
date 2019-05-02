import axios from '../config/axios';
import cookies from 'universal-cookie';

const cookie = new cookies()


export const onLoginClick = (email, password) => {
    return async dispatch => {
        try {
            const res = await axios.post('/users/login', { email, password })
            console.log(res);

            if(res.data.length !== 1) {
                return dispatch ({
                    type: 'AUTH_ERROR',
                    payload:{
                        error: res.data
                    }
                })
            }

            cookie.set('stillLogged', res.data[0].username, { path: '/' })
            cookie.set('idLogin', res.data[0].id, { path: '/' })
            cookie.set('email', res.data[0].email, { path: '/' })
            cookie.set('password', res.data[0].password, { path: '/' })

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

export const onRegisterUser = (username, email, password) => {
    return () => {
        axios.post('/users', {
            username, email, password
        }).then(res => {
            console.log("Register successful");

        }).catch(e => {
            console.log(e.response.data);
        })
    }
}

// Show all address
 export const getAddress = (userid) => {
     return async dispatch => {
        try {
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
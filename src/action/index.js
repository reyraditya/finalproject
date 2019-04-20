import axios from '../config/axios';
import cookies from 'universal-cookie';

const cookie = new cookies()


export const onLoginClick = (email, password) => {
    return async dispatch => {
        try {
            const res = await axios.post('/users/login', { email, password })
            console.log(res);

            cookie.set('stillLogged', res.data.username, { path: '/' })
            cookie.set('idLogin', res.data._id, { path: '/' })
            cookie.set('email', res.data.email, { path: '/' })
            // cookie.set('password', res.data.password, { path: '/' })


            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: {
                    id: res.data._id,
                    username: res.data.username,
                    email: res.data.email,
                    // password: res.data.password
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
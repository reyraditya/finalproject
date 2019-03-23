import axios from 'axios';
import cookies from 'universal-cookie';

const cookie = new cookies()


export const onLoginClick = (user, pass) => {
    return (dispatch) => {
        axios.get('http://localhost:1995/users',{
            params: {
                username: user, 
                password: pass
            }
        }).then(res => {
            if(res.data.length > 0) {
                console.log(res.data[0]);

                const {id, username} = res.data[0]
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: {id, username}
                })
                cookie.set('stillLogged', username, {path:"/"})
            } else {
                dispatch({
                    type: "AUTH_ERROR",
                    payload: "USERNAME AND PASSWORD DON'T MATCH"
                })
            }
        }).catch(ifDatabaseDoesNotWorking => {
            console.log("System Error");
        })
    }
}

export const keepLogin = (user) => {
    return dispatch => {
        axios.get('http://localhost:1995/users', {
            params: {
                username: user
            }
        }).then(res => {
            if(res.data.length > 0){
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: {username: user}
                })
            }
        })
    }
}

export const onLogoutUser = () => {
    cookie.remove("stillLogged")
    return {type: "LOGOUT_USER"};
}

export const onSetTimeOut = () => {
    return {type: "SET_TIMEOUT"}
}

export const onRegisterUser = (user, email, pass) => {
    return dispatch => {
        axios.get('http://localhost:1995/users', {
            params:{
                username: user
            }
        }).then(res => {
            if(res.data.length === 0){
                axios.post('http://localhost:1995/users', {
                    username: user,
                    email,
                    password: pass
                }).then(res => {
                    dispatch({
                        type: 'AUTH_SUCCESS',
                        payload: 'YOU HAVE BEEN REGISTERED. PLEASE LOGIN'
                    });
                })
            } else{
                dispatch({
                    type: 'AUTH_ERROR',
                    payload: 'USERNAME HAS BEEN TAKEN'
                })
            }
        })
    }
}
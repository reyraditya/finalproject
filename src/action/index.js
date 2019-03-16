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
                    payload: "Username and Password don't match."
                })
            }
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
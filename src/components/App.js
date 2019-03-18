import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import cookies from 'universal-cookie';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';

import { keepLogin } from '../action';

library.add(faUserAlt);
library.add(faSignInAlt);
library.add(faShoppingCart);


const cookie = new cookies()

class App extends Component {
    componentDidMount() {
        var userCookie = cookie.get('stillLogged')
        if(userCookie !== undefined){
            this.props.keepLogin(userCookie)
        }
    }

    render () {
        return (
            <BrowserRouter>
                <div> 
                    <Header/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </div>
            </BrowserRouter>
        )
    }
}

const mapsStateToProps = state => {
    return {username: state.auth.username}
}

export default connect(mapsStateToProps, {keepLogin})(App);
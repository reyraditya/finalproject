import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import cookies from 'universal-cookie';

import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import AllDesigners from './AllDesigners';
import Cart from './Cart';

import { keepLogin } from '../action';


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
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/alldesigners" component={AllDesigners} />
                    <Route path="/cart" component={Cart} />
                </div>
            </BrowserRouter>
        )
    }
}

const mapsStateToProps = state => {
    return {username: state.auth.username}
}

export default connect(mapsStateToProps, {keepLogin})(App);
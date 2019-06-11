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
import ManageAccount from './ManageAccount';
import ManageAddress from './ManageAddress';
import EditAddress from './EditAddress';
import ManageProduct from './ManageProduct';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

import { keepLogin } from '../action';


const cookie = new cookies()

class App extends Component {
    componentDidMount() {
        this.props.keepLogin(
            cookie.get('idLogin'), 
            cookie.get('stillLogged'), 
            cookie.get('email'))
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
                    <Route path="/account" component={ManageAccount}/>
                    <Route path="/addresses" component={ManageAddress}/>
                    <Route path="/editaddress/:path" component={EditAddress}/>
                    <Route path="/manageproduct/" component={ManageProduct}/>
                    <Route path="/addproduct/" component={AddProduct}/>
                    <Route path="/editproduct/:path" component={EditProduct}/>
                </div>
            </BrowserRouter>
        )
    }
}

const mapsStateToProps = state => {
    return {username: state.auth.username}
}

export default connect(mapsStateToProps, {keepLogin})(App);
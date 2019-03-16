import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// BrowserRouter, route digunakan utk menentukan directory component ketika 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';

library.add(faUserAlt);
library.add(faSignInAlt);


class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div> 
                    <Header/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
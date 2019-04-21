import React, {Component} from 'react';
import {connect} from 'react-redux';

import Footer from './Footer';

import '../css/manageAccount.css'

class ManageAccount extends Component{
    render () {
        const {user} = this.props
        return (
          <div>
            <form>
              <div className="container containerAccount">
                <h1 className="text-center title">Manage Account</h1>
                <div className="mt-3">
                  <p className="body">Account Information</p>
                  <label className="bodyInput" for="name">
                    Name
                  </label>
                  <input
                    className="accountInputForm p-2 text-capitalize form-control"
                    type="text"
                    id="name"
                    placeholder={user.username}
                  />
                  <label className="bodyInput mt-3" for="email">
                    Email address
                  </label>
                  <input
                    className="accountInputForm p-2 form-control"
                    type="email"
                    id="email"
                    placeholder={user.email}
                  />
                  <p className="bodyInput mt-3">New Password</p>
                  <input
                    className="accountInputForm p-2 form-control"
                    type="text"
                  />
                </div>
              </div>
            </form>
            <div className="container containerAccount">
                <button type="submit" className="buttonAccount btn-dark btn-block mt-5 mx-auto p-auto">save changes</button>
            </div>
            
            

            <div className="footer">
              <Footer />
            </div>
          </div>
        );
    }
}

const mps = state => {
    return {user: state.auth}
}

export default connect(mps)(ManageAccount);
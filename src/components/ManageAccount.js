import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import Footer from './Footer';

import '../css/manageAccount.css'

class ManageAccount extends Component{
    render () {
        const {user} = this.props

        return (
          <div>
            <div className="container-fluid d-flex mx-2">
              <div className="title col-2 mx-2">
                <Link to="/account" className="d-block">Account details</Link>
                <Link to="/addresses" className="d-block mt-2">Addresses</Link>
                <Link to="/addresses" className="d-block mt-2">Order history</Link>
                <Link to="/addresses" className="d-block mt-2">Wishlist</Link>
              </div>
              <div className="col-7">
                <form>
                <div className="container containerAccount">
                  <h1 className="text-center title">Manage Account</h1>
                  <div className="mt-3">
                    <p className="body text-center">Account Information</p>
                    <label className="bodyInput" for="name">
                      Username
                    </label>
                    <input
                      className="accountInputForm p-2 text-capitalize form-control"
                      type="text"
                      id="name"
                      defaultValue={user.username}
                    />
                    <label className="bodyInput mt-3" for="email">
                      Email address
                    </label>
                    <input
                      className="accountInputForm p-2 form-control"
                      type="email"
                      id="email"
                      defaultValue={user.email}
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
                <button
                  type="submit"
                  className="buttonAccount btn-dark btn-block mt-5 mx-auto p-auto">
                  save changes
                </button>
              </div>
              </div>
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
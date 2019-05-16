import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {editCred, getUser} from '../action/index';
// import {getUser} from '../action/index';

import Footer from './Footer';

import '../css/manageAccount.css'

class ManageAccount extends Component{ 
  componentDidMount(){
    this.props.getUser()
  }

  onEditButton = () => { 
    const username = this.username.value;
    const email = this.email.value;
    const password = this.password.value;
    this.props.editCred(username, email, password)
    this.props.getUser()
  }


    render () {
      console.log(this.props.cred);
      // console.log(this.props.user.users[0]);
      
      if(this.props.cred.length !== 0) {
        var {username, email} = this.props.cred[0]
      }
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
                    <label className="bodyInput">
                      Username
                    </label>
                    <input
                      className="accountInputForm p-2 text-capitalize form-control"
                      type="text"
                      ref={input => {this.username = input}}
                      defaultValue={username}
                    />
                    <label className="bodyInput mt-3">
                      Email address
                    </label>
                    <input
                      className="accountInputForm p-2 form-control"
                      type="email"
                      ref={input => {this.email = input}}
                      defaultValue={email}
                    />
                    <p className="bodyInput mt-3">New Password</p>
                    <input
                      className="accountInputForm p-2 form-control"
                      type="text"
                      ref={input => {this.password = input}}
                    />
                  </div>
                </div>
              </form>
              <div className="container containerAccount">
                <button
                  type="submit"
                  className="buttonAccount btn-dark btn-block mt-5 mx-auto p-auto"
                  onClick={this.onEditButton}
                  >
                  save changes
                </button>
              </div>
              </div>
            </div>
            <div className="footer">
              <Footer />
            </div>
          </div>
          )
      }
  }

const mps = state => {
    return {user: state.auth, cred: state.auth.users}
}

export default connect(mps, {getUser, editCred})(ManageAccount);
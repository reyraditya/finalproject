import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';

import { onLoginClick } from '../action';
import { onSetTimeOut } from '../action';

import "../css/login.css"

const cookie = new Cookies()

class Login extends Component {

  onSubmitClick = () => {
    const email = this.email.value
    const password = this.password.value
    this.props.onLoginClick(email, password)
  }

  onErrorLogin = () => {
    if(this.props.errorLogin !== ''){
      // setTimeout(this.props.onSetTimeOut, 3000);
      return(
        <div className="mt-3 loginErrorAlert">
          {this.props.errorLogin}
        </div>
      )
    } else{
      return null
    }
  }

  render() {
    const {user} = this.props
    
    if(user.username === ""){
      return (
        <div className="mt-5 pt-5 row">
            <div className="col-10 col-md-3 mx-auto card cardLogin">
                <div className="card-body bodyLogin">
                    <div className="border-bottom card-title">
                      <h1 className="text-center">
                        LOG IN
                      </h1>
                    </div>
                    <div className="card-title mt-4">
                      <p className="mb-0">EMAIL</p>
                    <form className="input-group">
                        <input ref={input => {this.email = input}} className="form-control inputLogin" type="text"/>
                    </form>
                    </div>
                    <div className="card-title mt-4">
                      <p className="mb-0">PASSWORD</p>
                    <form className="input-group">
                        <input ref={input => {this.password = input}} className="form-control inputLogin" type="password"/>
                    </form>
                    </div>
                    <div className="text-center mt-4">
                      <div className="mb-3">
                        {this.onErrorLogin()}
                      </div>
                      <button className="btn btn-dark px-5" onClick={this.onSubmitClick}>LOGIN</button>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="loginText loginTextMargin">New customer?</p>
                    </div>
                    <div className="text-center">
                      <p className="loginText1">Register <Link to="/register" className="loginText linkLogin">HERE</Link></p>
                    </div>
                </div>
            </div>
        </div>
      )
    } else {
      if(cookie.get('status') === 'user'){
        return <Redirect to="/"/>
      } else if (cookie.get('status') === 'admin'){
        return <Redirect to="/manageproduct"/>
      }
    }
  }
}

const mapsStateToProps = state => {
  return {
    user: state.auth, 
    errorLogin: state.auth.errorLogin
  }
}

export default connect (mapsStateToProps, {onSetTimeOut, onLoginClick})(Login);
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import { onLoginClick } from '../action';
import { onSetTimeOut } from '../action';


class Login extends Component {
  onSubmitClick = () => {
    const user = this.username.value
    const pass = this.password.value
    this.props.onLoginClick(user, pass)
  }

  onErrorLogin = () => {
    if(this.props.user.error !== ''){
      setTimeout(this.props.onSetTimeOut, 3000);
      return(
        <div className="mt-3 loginErrorAlert">
          {this.props.user.error}
        </div>
      )
    } else{
      return null
    }
  }

  render() {
    if(this.props.user.username === ""){
      return (
        <div className="mt-5 pt-5 row">
            <div className="col-10 col-lg-3 col-md-3 col-sm-3 mx-auto card">
                <div className="card-body">
                    <div className="border-bottom card-title">
                      <h1>
                        SIGN IN
                      </h1>
                    </div>
                    <div className="card-title mt-4">
                      <p>USERNAME</p>
                    <form className="input-group">
                        <input ref={input => {this.username = input}} className="form-control" type="text"/>
                    </form>
                    </div>
                    <div className="card-title mt-4">
                      <p>PASSWORD</p>
                    <form className="input-group">
                        <input ref={input => {this.password = input}} className="form-control" type="password"/>
                    </form>
                    </div>
                    <div className="text-center mt-4">
                      <button className="btn btn-outline-dark px-5" onClick={this.onSubmitClick}>Login</button>
                      {this.onErrorLogin()}
                    </div>
                </div>
            </div>
        </div>
      )
    } else {
      return <Redirect to="/home"/>
    }
  }
}

const mapsStateToProps = state => {
  return {user: state.auth}
}

export default connect (mapsStateToProps, {onSetTimeOut, onLoginClick})(Login);
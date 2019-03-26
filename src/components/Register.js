import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { onRegisterUser } from '../action';
import { onSetTimeOut } from '../action';

import "../css/register.css"
import "../css/login.css"
import { setTimeout } from 'timers';


class Register extends Component {
  onRegisterClick = () => {
    const user = this.username.value;
    const pass = this.password.value;
    const mail = this.email.value;

    this.props.onRegisterUser(user, mail, pass);
  }

  onErrorRegister = () => {
    if(this.props.error !== ''){ // if error, then return...
      setTimeout(this.props.onSetTimeOut, 2000);
      return(
        <div className="mt-3 loginErrorAlert">
          {this.props.error}
        </div>
      )
    } else if(this.props.success !== ''){
      return(
        <div className="mt-3 registerSuccessAlert">
          {this.props.success}
        </div>
      )
    }
  }
  
  render() {
    return (
      <div>
          <div className="mt-5 pt-5 row">
            <div className="col-10 col-md-4 mx-auto card cardRegister">
                <div className="card-body bodyRegister">
                    <div className="border-bottom card-title">
                      <h1 className="text-center">
                        CREATE AN ACCOUNT
                      </h1>
                    </div>
                    <div className="card-title mt-4">
                      <p className="mb-0">USERNAME</p>
                    <form className="input-group">
                        <input ref={input => {this.username = input}} className="form-control inputRegister" type="text"/>
                    </form>
                    </div>
                    <div className="card-title mt-4">
                      <p className="mb-0">EMAIL</p>
                    <form className="input-group">
                        <input ref={input => {this.email = input}} className="form-control inputRegister" type="email"/>
                    </form>
                    </div>
                    <div className="card-title mt-4">
                      <p className="mb-0">PASSWORD</p>
                    <form className="input-group">
                        <input ref={input => {this.password = input}} className="form-control inputRegister" type="password"/>
                    </form>
                    </div>
                    <div className="text-center">
                    <div className="mb-3">
                      {this.onErrorRegister()}
                    </div>
                      <button className="btn btn-dark px-5 buttonRegister" onClick={this.onRegisterClick}>CREATE</button>
                    </div>
                    <div className="mt-4 text-center">
                      <p>HAVE AN ACCOUNT? <Link to="/login" className="registerText">LOGIN</Link></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    error: state.auth.error,
    success: state.auth.success 
  }
}

export default connect(mapStateToProps, {onRegisterUser, onSetTimeOut})(Register)
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import "../css/register.css"


export default class Register extends Component {
  render() {
    return (
      <div>
          <div className="mt-5 pt-5 row">
            <div className="col-10 col-md-4 mx-auto card cardRegister">
                <div className="card-body">
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
                    <div className="text-center mt-4">
                      <button className="btn btn-dark px-5 buttonRegister" onClick={this.onSubmitClick}>CREATE</button>
                    </div>
                    <div className="mt-4 text-center">
                      <p>HAVE AN ACCOUNT? <Link to="/login">LOGIN</Link></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
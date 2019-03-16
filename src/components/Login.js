import React, { Component } from 'react';


export default class Login extends Component {
  render() {
    return (
      <div className="mt-5 row">
          <div className="col-10 col-lg-5 col-md-4 col-sm-3 mx-auto card">
              <div className="card-body">
                  <div className="border-bottom card-title">
                    <h1>
                      SIGN IN
                    </h1>
                  </div>
                  <div className="card-title">
                    <h4>Username</h4>
                  </div>
                  <form className="input-group">
                      <input className="form-control" type="text"/>
                  </form>
                  <div className="card-title mt-3">
                    <h4>Password</h4>
                  </div>
                  <form className="input-group">
                      <input className="form-control" type="password"/>
                  </form>
                  <button className="btn btn-dark mt-3 float-right">Login</button>
              </div>
          </div>
      </div>
    )
  }
}
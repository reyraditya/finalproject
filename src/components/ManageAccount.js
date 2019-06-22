import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {editCred, getUser, uploadAvatar, deleteAvatar} from '../action/index';
import avatarDefault from '../components/icons/user.png'
import Cookie from 'universal-cookie'

import Footer from './Footer';

import '../css/manageAccount.css'

const cookie = new Cookie()

class ManageAccount extends Component{ 
  state = { 
    avatar: {avatarDefault},
    editAva: true
  }

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

  saveAva = async () => {
    await this.props.uploadAvatar(cookie.get('stillLogged'), this.imginput.files)
    console.log(this.imginput.files);
    
    this.setState({editAva: !this.state.editAva})
    this.props.getUser()
  }

  editAva = () => {
    this.imginput.click()
    if(this.imginput.files){
      this.setState({editAva: !this.state.editAva})
    }
  }

  deleteAva = async () => {
    await this.props.deleteAvatar(cookie.get('stillLogged'))
    this.props.getUser()
  }


    render () {
      // console.log(this.props.cred);
      // console.log(this.props.user.users[0]);
      
      if(this.props.cred.length !== 0) {
        var {username, email, avatar} = this.props.cred[0]
      }
      
      if(cookie.get('status') === 'user'){
        return (
          <div>
          <div className="container-fluid d-flex mx-2">
            <div className="title col-2 mx-2">
              <Link to="/account" className="d-block">Account details</Link>
              <Link to="/addresses" className="d-block mt-2">Addresses</Link>
              <Link to="/orderhistory" className="d-block mt-2">Order history</Link>
              <Link to="/wishlist" className="d-block mt-2">Wishlist</Link>
            </div>
            <div className="col-7">
              <div className="container containerAccount">
                <h1 className="text-center title">Manage Account</h1>
                <div className="mt-3">
                  <p className="body text-center">Account Information</p>
                  {/* Avatarbox */}
                  <div className="text-center mb-2">
                    <img className="avatar" src={avatar ? `http://localhost:1995/avatar/${avatar}` : require(`../components/icons/user.png`)} alt="avatar">
                    </img>
                  </div>
                  <div className="mb-4">
                  <button hidden={this.state.editAva} className="buttonAccount btn-dark mx-auto p-auto" onClick={() => {this.saveAva()}}>
                        save
                    </button>
                    <label className="labelAccount btn-dark p-auto" hidden={!this.state.editAva}>
                      <input hidden type='file' onChange={this.editAva} ref={input => this.imginput = input}/>
                      edit
                    </label>
                  <button type="submit" className="buttonAccountCancel btn-dark ml-3 p-auto" onClick={() => {this.deleteAva()}}>
                      delete
                  </button>
                </div>
              <form>
                
                  {/* Input */}
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
            </form>
                </div>
              </div>
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
      } else if(cookie.get('status') === 'admin'){
        return (
          <div>
          <div className="container-fluid d-flex mx-2">
            <div className="title col-2 mx-2">
              <Link to="/account" className="d-block">Account details</Link>
              <Link to="/addresses" className="d-block mt-2">Order history</Link>
            </div>
            <div className="col-7">
              <div className="container containerAccount">
                <h1 className="text-center title">Manage Account</h1>
                <div className="mt-3">
                  <p className="body text-center">Account Information</p>
                  {/* Avatarbox */}
                  <div className="text-center mb-2">
                    <img className="avatar" src={avatar ? `http://localhost:1995/avatar/${avatar}` : require(`../components/icons/user.png`)} alt="avatar">
                    </img>
                  </div>
                  <div className="mb-4">
                   <button hidden={this.state.editAva} className="buttonAccount btn-dark mx-auto p-auto" onClick={() => {this.saveAva()}}>
                        save
                    </button>
                    <label className="labelAccount btn-dark mx-auto p-auto" hidden={!this.state.editAva}>
                      <input hidden type='file' onChange={this.editAva} ref={input => this.imginput = input}/>
                      edit
                    </label>
                  <button type="submit" className="buttonAccountCancel btn-dark ml-3 p-auto" onClick={() => {this.deleteAva()}}>
                      delete
                  </button>
                </div>
              <form>
                
                  {/* Input */}
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
            </form>
                </div>
              </div>
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
  }

const mps = state => {
    return {user: state.auth, cred: state.auth.users}
}

export default connect(mps, {getUser, editCred, uploadAvatar, deleteAvatar})(ManageAccount);
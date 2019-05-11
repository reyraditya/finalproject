import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import { onLogoutUser } from '../action';
import { onLoginClick } from '../action';

import '../css/cart.css';
import closeIcon from './icons/cross.png';
import Footer from './Footer';

class Cart extends Component{
    onSubmitClick = () => {
        const email = this.email.value
        const password = this.password.value
        this.props.onLoginClick(email, password)
      }

    render(){
        const {user} = this.props

        if (user.username === "") {
          return (
            <div>
              <div className="container cart">
                <div className="row">
                  {/* Cart List */}
                  <div className="col-6">
                    <div className="cartTitle p-2 text-center">
                      Shopping Bag
                    </div>
                    <div className="cartBodyTitle border-bottom border-dark mt-3 row">
                      <div className="col-3 my-2" />
                      <div className="col-5 my-2">Item</div>
                      <div className="col-2 my-2 text-right">Price</div>
                      <div className="col-2 my-2">Remove</div>
                    </div>
                    <div className="cartBody border-bottom border-dark mt-3 row">
                      <div className="col-3">
                        <img
                          src="https://img.ssensemedia.com/image/upload/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/191168M192010_1.jpg"
                          alt="img"
                          className="m-2"
                        />
                      </div>
                      <div className="col-5 my-2">
                        <div>Maison Margiela</div>
                        <div>Black Telephone Shirt</div>
                        <div>Size: L</div>
                        <div>320212302019</div>
                        <div className="mt-5">
                          <a href="/wishlist">Move to Wishlist</a>
                        </div>
                      </div>
                      <div className="col-2 my-2 text-right">380€</div>
                      <div className="col-2 my-2 closeIcon">
                        <a href="/">
                          <img
                            className="ml-4"
                            src={closeIcon}
                            alt="close"
                          />
                        </a>
                      </div>
                    </div>
                    {/* Total and Grandtotal */}
                    <div className="cartBodyTitle mt-3 row">
                      <div className="col-3 my-2" />
                      <div className="col-5 my-2">
                        <div>total</div>
                        <div>shipping estimation</div>
                        <div>duties and taxes</div>
                        <div className="mt-4 orderTotal">
                          order total
                        </div>
                      </div>
                      <div className="col-2 my-2 text-right">
                        <div>380€</div>
                        <div>0€</div>
                        <div>Incl.</div>
                        <div className="mt-4 orderTotal">380€</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-10">
                        <div className="cartTitle p-2 text-center">
                          log in
                        </div>
                        <div className="borderCheckoutLogin mt-4 border-bottom border-dark">
                          <div className="checkoutLogin mt-2 pt-2 px-5 mx-5">
                            <div>email</div>
                            <input 
                                ref={input => {this.email = input}} 
                                className="p-2 mt-1" 
                                type="text" 
                            />
                          </div>
                          <div className="checkoutLogin mt-3 px-5 mx-5">
                            <div>password</div>
                            <input
                                ref={input => {this.password = input}}
                                className="p-2 mt-1"
                                type="password"
                            />
                          </div>
                          <div className="mt-4 px-5 mx-5 mb-4 text-center">
                            <button className="buttonCheckoutLogin btn buttonCheckout btn-block btn-dark" onClick={this.onSubmitClick}>
                              login
                            </button>
                          </div>
                        </div>
                        {/* Create account  */}
                        <div className="cartTitle p-2 text-center">
                          create an account
                        </div>
                        <div className="mt-4">
                          <div className="checkoutLogin mt-2 pt-2 px-5 mx-5">
                            <div>username</div>
                            <input className="p-2 mt-1" type="text" />
                          </div>
                          <div className="checkoutLogin mt-2 pt-2 px-5 mx-5">
                            <div>email</div>
                            <input className="p-2 mt-1" type="email" />
                          </div>
                          <div className="checkoutLogin mt-3 px-5 mx-5">
                            <div>password</div>
                            <input
                              className="p-2 mt-1"
                              type="password"
                            />
                          </div>
                          <div className="mt-4 px-5 mx-5 mb-4 text-center">
                            <button className="btn buttonCheckout btn-block btn-dark">
                              create
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer">
                <Footer />
              </div>
            </div>
          );
        } 
        return (
            <div>
              <div className="container cart">
                <div className="row">
                  {/* Cart List */}
                  <div className="col-6">
                    <div className="cartTitle p-2 text-center">
                      Shopping Bag
                    </div>
                    <div className="cartBodyTitle border-bottom border-dark mt-3 row">
                      <div className="col-3 my-2" />
                      <div className="col-5 my-2">Item</div>
                      <div className="col-2 my-2 text-right">Price</div>
                      <div className="col-2 my-2">Remove</div>
                    </div>
                    <div className="cartBody border-bottom border-dark mt-3 row">
                      <div className="col-3">
                        <img
                          src="https://img.ssensemedia.com/image/upload/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/191168M192010_1.jpg"
                          alt="img"
                          className="m-2"
                        />
                      </div>
                      <div className="col-5 my-2">
                        <div>Maison Margiela</div>
                        <div>Black Telephone Shirt</div>
                        <div>Size: L</div>
                        <div>320212302019</div>
                        <div className="mt-5">
                          <a href="/wishlist">Move to Wishlist</a>
                        </div>
                      </div>
                      <div className="col-2 my-2 text-right">380€</div>
                      <div className="col-2 my-2 closeIcon">
                        <a href="/">
                          <img
                            className="ml-4"
                            src={closeIcon}
                            alt="close"
                          />
                        </a>
                      </div>
                    </div>
                    {/* Total and Grandtotal */}
                    <div className="cartBodyTitle mt-3 row">
                      <div className="col-3 my-2" />
                      <div className="col-5 my-2">
                        <div>total</div>
                        <div>shipping estimation</div>
                        <div>duties and taxes</div>
                        <div className="mt-4 orderTotal">
                          order total
                        </div>
                      </div>
                      <div className="col-2 my-2 text-right">
                        <div>380€</div>
                        <div>0€</div>
                        <div>Incl.</div>
                        <div className="mt-4 orderTotal">380€</div>
                      </div>
                    </div>
                  </div>
                  {/* Checkout */}
                  <div className="col-6">
                    <div className="row">
                      <div className="col-12">
                        <div className="cartTitle p-2 text-center">
                          logged in as
                        </div>
                        <div className="borderCheckoutLogin mt-4 border-dark">
                          <div className="checkoutLogin2 text-center mt-2 pt-2 px-5 mx-5">
                            <div className="pb-2">{user.email}</div>
                            <button className="checkoutLogin2" onClick= {this.props.onLogoutUser}>
                                <Link to='/login'>Not your account? Sign is as another user</Link>
                            </button>
                          </div>
                          <div className="mt-4 px-5 mx-5 mb-4 text-center">
                            <button className="buttonCheckoutLogin btn buttonCheckout btn-block btn-dark">
                              checkout
                            </button>
                          </div>
                        </div>                        
                      </div>
                    </div>
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
    return {user: state.auth}
}

export default connect(mps, {onLogoutUser, onLoginClick})(Cart);
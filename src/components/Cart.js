import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';

import { onLogoutUser, onLoginClick, getCart, removeWishlist, moveToWishlist } from '../action';

import '../css/cart.css';
import closeIcon from './icons/cross.png';
import Footer from './Footer';

const cookie = new Cookies()

class Cart extends Component{
    componentDidMount(){
      this.props.getCart(cookie.get('idLogin'))
    }

    onSubmitClick = () => {
      const email = this.email.value
      const password = this.password.value
      this.props.onLoginClick(email, password)
    }

    onRemoveCart = async (id, userid) => {
      await this.props.removeWishlist(id)
      this.props.getCart(userid)
    }

    onMoveWishlist = async (id, userid) => {
      await this.props.moveToWishlist(id)
      this.props.getCart(userid)
    }


    renderList = () => {
      if(this.props.cart.length){
        return this.props.cart.map(cart => {
            return (
              <div className="cartBody border-bottom border-dark mt-3 row">
                <div className="col-3">
                  <img src={`http://localhost:1995/addproduct/addimages/${cart.image}`} alt="img" className="m-2"/>
                </div>
                <div className="col-5 my-2">
                  <div>{cart.designer}</div>
                  <div className="mt-2">{cart.product_name}</div>
                  <div className="mt-5 mb-2">
                      <button className="buttonWishlistCart cartBody" onClick={() => {this.onMoveWishlist(cart.id, cart.user_id)}}>
                        Move to Wishlist
                      </button>
                  </div>
                </div>
                <div className="col-2 my-2 text-right">${cart.price}</div>
                <div className="col-2 my-2 closeIcon">
                  <button className="buttonRemoveCart" onClick={() => {this.onRemoveCart(cart.id, cart.user_id)}}>
                    <img
                      className="ml-4"
                      src={closeIcon}
                      alt="close"
                    />
                  </button>
                </div>
              </div>
            );
        })
      }
    }

    total = () => {
      if(this.props.cart.length){
        var sumprice = 0
        this.props.cart.forEach(obj => {
            sumprice += obj.price
      }); return sumprice
    } else {
      return 0
    }
  }

    render(){
      console.log(this.props.cart);
      console.log(this.props.cart.length);
      console.log(cookie.get('idLogin'));
           
      // const {user} = this.props

        if (cookie.get('idLogin') !== undefined) {
          return (
            <div>
              <div >
                <div className="container cart" >
                  {/* Cart List & checkout */}
                  {this.props.cart.length ? 
                    <div className="row">
                    <div className="col-12">
                    <div className="cartTitle p-2 text-center">
                      Shopping Bag
                    </div>
                    <div className="cartBodyTitle border-bottom border-dark mt-3 row">
                      <div className="col-3 my-2" />
                      <div className="col-5 my-2">Item</div>
                      <div className="col-2 my-2 text-right">Price</div>
                      <div className="col-2 my-2">Remove</div>
                    </div>
                    {this.renderList()}
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
                        <div>${this.total()}</div>
                        <div>$0</div>
                        <div>Incl.</div>
                        <div className="mt-4 orderTotal">${this.total()}</div>
                      </div>
                    </div>
                    <div>
                      <Link to="/checkout">
                          <button className="buttonCheckoutLogin btn buttonCheckout btn-block btn-dark mt-5">
                            checkout
                          </button>
                        </Link>
                    </div>
                  </div>
                  {/* checkout */}
                  {/* <div className="col-6">
                    <div className="row">
                      <div className="col-12"> */}
                        {/* <div className="cartTitle p-2 text-center">
                          logged in as
                        </div> */}
                        {/* <div className="borderCheckoutLogin mt-4 border-dark"> */}
                          {/* <div className="checkoutLogin2 text-center mt-2 pt-2 px-5 mx-5">
                            <div className="pb-2">{user.email}</div>
                            <button className="checkoutLogin2" onClick= {this.props.onLogoutUser}>
                                <Link to='/login'>Not your account? Sign is as another user</Link>
                            </button>
                          </div> */}
                          {/* <div className="mt-4 px-5 mx-5 mb-4 text-center">
                            <Link to="/checkout">
                              <button className="buttonCheckoutLogin btn buttonCheckout btn-block btn-dark">
                                checkout
                              </button>
                            </Link>
                          </div> */}
                        {/* </div>                         */}
                      {/* </div> */}
                    {/* </div> */}
                  {/* </div> */}
                  </div>: 
                  <div className="col-12">
                  <div className=" cartTitle text-center">
                      Your shopping bag is empty 
                  </div>
                  <div className="d-flex mt-3 text-center">
                  <div className="mx-auto">
                      <Link to="/shop/men/allproducts">
                          <button className="d-inline mx-2 buttonWishlist buttonAccount">
                              shop men
                          </button>
                      </Link>
                      <Link to="/shop/women/allproducts">
                          <button className="d-inline buttonWishlist buttonAccount">
                              shop woman
                          </button>
                      </Link>
                  </div>
              </div>
              </div>
              }  
              </div>
                </div>
                  <div className="footer">
                    <Footer />
                </div>
            </div>
        )   
        } else {
          return (
            <div>
                <Redirect to='/login' />
            </div>
          );
      }  
    }
}

const mps = state => {
    return {user: state.auth, cart: state.prod.cartwish}
}

export default connect(mps, {onLogoutUser, onLoginClick, getCart, removeWishlist, moveToWishlist})(Cart);
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Footer from './Footer'

class OrderHistory extends Component {
  render() {
    return (
      <div>
          <div>
            <div className="container-fluid d-flex mx-2">
              <div className="title col-2 mx-2">
                <Link to="/account" className="d-block">
                  Account details
                </Link>
                <Link to="/addresses" className="d-block mt-2">
                  Addresses
                </Link>
                <Link to="/orderhistory" className="d-block mt-2">
                  Order history
                </Link>
                <Link to="/wishlist" className="d-block mt-2">
                  Wishlist
                </Link>
              </div>
              <div className="col-7">
                <div className="container containerAccount">
                  <h1 className="text-center title">Order History</h1>
                  <div className="mt-1">
                    <p className="body text-center text-capitalize">all your orders</p>
                    {/* <span>{this.renderlistAddress()}</span> */}
                  </div>
                  {/* <button type="submit" className="buttonAccount btn-dark btn-block mt-4 mx-auto p-auto" onClick={() => {this.setState({ add: !this.state.add })}}>
                        Add new address
                  </button>    */}
                </div>
              </div>
            </div>
            <div className="footer">
              <Footer />
            </div>
          </div>
      </div>
    )
  }
}

export default OrderHistory
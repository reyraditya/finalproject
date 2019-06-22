import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
import {connect} from 'react-redux';

import {getOrder} from '../action/index'

import Footer from './Footer'
import '../css/orderhistory.css'

const cookie = new Cookies()

class OrderHistory extends Component {

    async componentDidMount(){
        await this.props.getOrder(cookie.get('idLogin'))
    }

    renderOrder = () => {
        return this.props.orders.map((order,i) => {
            return (
                <div className="mt-4 p-3 renderOrder">
                    <div className="titleGrand">
                        order id: {order.id}
                    </div>
                    <div className="titleGrand">
                        shipper: {order.shipper_name}, {order.time_estimation}
                    </div>
                    <div className="titleGrand mt-3">
                        grand total: ${order.price_total}
                    </div>
                    <div className="d-flex mt-3 text-center">
                  <div className="mx-auto">
                      <Link to={`/detailorder/${i}`}>
                          <button className="d-inline mx-2 buttonWishlist buttonAccount">
                              detail order
                          </button>
                      </Link>
                        <button className="d-inline buttonWishlist buttonAccount">
                            upload receipt
                        </button>
                  </div>
              </div>
                </div>
            )
        })
    }


  render() {
    console.log(this.props.orders);
    
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
                  <h1 className="text-center titleOrderHistory">Order History</h1>
                </div>
                  <div className="titleOrder pb-2">
                      Waiting for payment
                  </div>
                  <div>
                      {this.renderOrder()}
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

const mps = state => {
    return {orders: state.order.orderhistory}
}

export default connect (mps, {getOrder})(OrderHistory)
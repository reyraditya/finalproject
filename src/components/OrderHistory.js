import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
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
          if(order.status === 'waiting payment'){
            return (
              <div key={i}>
                <div className="mt-4 p-3 renderOrder">
                    <div>
                      {/* order id */}
                      <div className="titleGrand">
                          order id: {order.id}
                      </div>
                      <div className="titleGrand">
                          time: {order.createdAt}
                      </div>
                      {/* shipper */}
                      <div className="titleGrand mt-3">
                          shipper:
                      </div>
                      <div className="titleGrand">
                        {order.shipper_name}, {order.time_estimation}
                      </div>
                      {/* wire information */}
                      <div className="titleGrand mt-3">
                          <div>{order.payment_method}:</div>
                          <div className="mt-1">{order.bank_name}</div>
                          <div className="mt-1">iban:{order.iban}</div>
                      </div>
                      {/* total order */}
                      <div className="titleGrand mt-3">
                          grand total: ${order.price_total}
                      </div>
                      <div>
                        <div className="buttonDetailOrder d-flex">
                          <div className="mx-auto">
                            <Link to={`/detailorder/${i}/${order.id}`}>
                                <button className="d-inline mx-2 buttonWishlist buttonAccount">
                                    detail order
                                </button>
                            </Link>   
                            <Link to={`/confirmpayment/${order.id}`}>
                              <button className="d-inline buttonWishlist buttonAccount">
                                    confirm payment
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            )
          }   
        })
    }

    renderPaid = () => {
      if(this.props.orders.length){
        return this.props.orders.map((order, i) => {
          if(order.status === 'paid'){
            return(
              <div key={i}>
                    <div className="mt-4 p-3 renderOrder">
                        <div>
                          {/* order id */}
                          <div className="titleGrand">
                              order id: {order.id}
                          </div>
                          <div className="titleGrand">
                              time: {order.createdAt}
                          </div>
                          {/* shipper */}
                          <div className="titleGrand mt-3">
                              shipper:
                          </div>
                          <div className="titleGrand">
                            {order.shipper_name}, {order.time_estimation}
                          </div>
                          {/* wire information */}
                          <div className="titleGrand mt-3">
                              <div>{order.payment_method}:</div>
                              <div className="mt-1">{order.bank_name}</div>
                              <div className="mt-1">iban:{order.iban}</div>
                          </div>
                          {/* total order */}
                          <div className="titleGrand mt-3">
                              grand total: ${order.price_total}
                          </div>
                          <div>
                            <div className="buttonDetailOrder d-flex">
                              <div className="mx-auto">
                                <Link to={`/detailorder/${i}/${order.id}`}>
                                    <button className="d-inline mx-2 buttonWishlist buttonAccount">
                                        detail order
                                    </button>
                                </Link>   
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                )
              }
           })
        }
    }

    renderRejected = () => {
      if(this.props.orders.length){
        return this.props.orders.map((order,i) => {
          if(order.status === 'rejected'){
            return (
              <div key={i}>
              <div className="mt-4 p-3 renderOrder">
                  <div>
                    {/* order id */}
                    <div className="titleGrand">
                        order id: {order.id}
                    </div>
                    <div className="titleGrand">
                        time: {order.createdAt}
                    </div>
                    {/* shipper */}
                    <div className="titleGrand mt-3">
                        shipper:
                    </div>
                    <div className="titleGrand">
                      {order.shipper_name}, {order.time_estimation}
                    </div>
                    {/* wire information */}
                    <div className="titleGrand mt-3">
                        <div>{order.payment_method}:</div>
                        <div className="mt-1">{order.bank_name}</div>
                        <div className="mt-1">iban:{order.iban}</div>
                    </div>
                    {/* total order */}
                    <div className="titleGrand mt-3">
                        grand total: ${order.price_total}
                    </div>
                    <div>
                      <div className="buttonDetailOrder d-flex">
                        <div className="mx-auto">
                          <Link to={`/detailorder/${i}/${order.id}`}>
                              <button className="d-inline mx-2 buttonWishlist buttonAccount">
                                  detail order
                              </button>
                          </Link>   
                          <Link to={`/confirmpayment/${order.id}`}>
                            <button className="d-inline buttonWishlist buttonAccount">
                                  reconfirm payment
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            )
          }  
        })
      }
    }

    renderShipped = () => {
      if(this.props.orders.length){
        return this.props.orders.map((order, i) => {
          if(order.status === 'shipped'){
            return(
              <div key={i}>
                    <div className="mt-4 p-3 renderOrder">
                        <div>
                          {/* order id */}
                          <div className="titleGrand">
                              order id: {order.id}
                          </div>
                          <div className="titleGrand">
                              time: {order.createdAt}
                          </div>
                          {/* shipper */}
                          <div className="titleGrand mt-3">
                              shipper:
                          </div>
                          <div className="titleGrand">
                            {order.shipper_name}, {order.time_estimation}
                          </div>
                          {/* wire information */}
                          <div className="titleGrand mt-3">
                              <div>{order.payment_method}:</div>
                              <div className="mt-1">{order.bank_name}</div>
                              <div className="mt-1">iban:{order.iban}</div>
                          </div>
                          {/* total order */}
                          <div className="titleGrand mt-3">
                              grand total: ${order.price_total}
                          </div>
                          <div>
                            <div className="buttonDetailOrder d-flex">
                              <div className="mx-auto">
                                <Link to={`/detailorder/${i}/${order.id}`}>
                                    <button className="d-inline mx-2 buttonWishlist buttonAccount">
                                        detail order
                                    </button>
                                </Link>   
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
            )
          }
        })
      }
    }

  render() {
    console.log(this.props.orders);
    if(cookie.get('status') === 'user'){
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
                    {/* Status paid */}
                    <div className="titleOrder pb-2">
                        paid - your products will be shipped immediately
                    </div>
                    <div>
                      {this.renderPaid()}
                    </div>
                    {/* Status rejected */}
                    <div className="titleOrder pb-2">
                        rejected - reconfirm your payment
                    </div>
                    <div>
                      {this.renderRejected()}
                    </div>
                    {/* Status shipped */}
                    <div className="titleOrder pb-2">
                        shipped - enjoy your products
                    </div>
                    <div>
                      {this.renderShipped()}
                    </div>
                </div>
              </div>
              <div className="footer">
                <Footer />
              </div>
            </div>
        </div>
      )
    } return <Redirect to='/'></Redirect>
  }
}

const mps = state => {
    return {
      orders: state.order.orderhistory, 
    }
}

export default connect (mps, {getOrder})(OrderHistory)
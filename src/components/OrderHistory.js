import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
import {connect} from 'react-redux';

import {getOrder} from '../action/index'

import Footer from './Footer'
import '../css/orderhistory.css'

const cookie = new Cookies()

class OrderHistory extends Component {
  state = {
    addImg: false, 
    preview: '',
    img: null
  }

  
  async componentDidMount(){
    await this.props.getOrder(cookie.get('idLogin'))
  }
  
  addImg = () => {
    this.imginput.click()
    if(this.imginput.files){
      this.setState({addImg: !this.state.addImg})
    }
  }

  changeImg = () => {
    this.setState(prevState => ({
      addImg: !prevState.addImg
    }))
  }

  pickImg = () => {
    
  }
  

    renderOrder = () => {
        return this.props.orders.map((order,i) => {
            return (
                <div key={i}>
                  <div className="mt-4 p-3 renderOrder">
                    <div className="d-flex">
                      <div className="col-6">
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
                        <div className="buttonDetailOrder">
                            <Link to={`/detailorder/${i}/${order.id}`}>
                                <button className="d-inline mx-2 buttonWishlist buttonAccount">
                                    detail order
                                </button>
                            </Link>   
                        </div>
                      </div>
                      {/* Image proof */}
                      <div className="col-6">
                        <img className="uploadProof" src={order.image ? `http://localhost:1995/proof/${order.image}` : this.state.preview ? this.state.preview : require('../components/icons/upload.png')} alt="img proof"></img>
                      <div>
                        <div className="buttonUploadProof">
                          <label className="buttonUploadReceipt buttonAccount" hidden={this.state.addImg}>
                              <input hidden type='file' onChange={this.addImg} ref={input => this.imginput = input}/>
                                choose receipt
                          </label>
                          <button hidden={!this.state.addImg} className="buttonUploadReceipt buttonAccount">
                                save
                          </button>
                        </div>
                      </div>
                      </div>
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
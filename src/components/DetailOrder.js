import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie';
import axios from '../config/axios';
import '../css/detailorder.css'


const cookie = new Cookies()

class DetailOrder extends Component {
  state = {
    orderstatus: [],
    user: [],
    payment: [],
    shipper: [],
    address: [],
    product: [],
    grandprice:[]
  }

   async componentDidMount(){
     await this.getOrderStatus()
     await this.getClient()
     await this.getOrderPayment()
     await this.getOrderShipper()
     await this.getOrderAddress()
     await this.getOrderProduct()
     await this.getOrderPrice()
   }

  // Retrieve order details
  getOrderStatus = async () => {
    try {
      const { orderid } = this.props.match.params  
      const res = await axios.get(`/orderdetail/${orderid}`)
      console.log(res.data);
    
      this.setState({
        orderstatus: res.data
    })
      
    } catch (e) {
      console.log(e);
      
    }
  }

  // Retrieve user's credentials
  getClient = async () => {
    try {
      const { orderid } = this.props.match.params
      const res = await axios.get(`/userdetail/${orderid}`)
      console.log(res.data);

      this.setState({
        user: res.data
      })
      
    } catch (e) {
      console.log(e);
      
    }
  }

  // Retrieve payment detail
  getOrderPayment = async () => {
    try {
      // const { userid } = cookie.get('idLogin')
      const { orderid } = this.props.match.params

      const res = await axios.get(`/bankdetail/${orderid}`)
      console.log(res.data);
      
      this.setState({
        payment: res.data
      })
    } catch (e) {
      console.log(e);
      
    }
  }

  // Retrieve shipper detail
  getOrderShipper = async () => {
    try {
      // const { userid } = cookie.get('idLogin')
      const { orderid } = this.props.match.params

      const res = await axios.get(`/shipperdetail/${orderid}`)
      console.log(res.data);

      this.setState({
        shipper: res.data
      })
      
    } catch (e) {
      console.log(e);
    }
  }

  // Retrieve address detail
  getOrderAddress = async () => {
    try {
      // const { userid } = cookie.get('idLogin')
      const { orderid } = this.props.match.params

      const res = await axios.get(`/addressdetail/${orderid}`)
      console.log(res.data);

      this.setState({
        address: res.data
      })
      
    } catch (e) {
      console.log(e);
    }
  }

  // Retrieve product detail
  getOrderProduct = async () => {
    try {
      // const { userid } = cookie.get('idLogin')
      const { orderid } = this.props.match.params

      const res = await axios.get(`/product/${orderid}`)
      console.log(res.data);

      this.setState({
        product: res.data
      })
      
    } catch (e) {
      console.log(e);
    }
  }

  // Retrieve grand total
  getOrderPrice = async () => {
    try {
      // const { userid } = cookie.get('idLogin')
      const { orderid } = this.props.match.params

      const res = await axios.get(`/price/${orderid}`)
      console.log(res.data);

      this.setState({
        grandprice: res.data
      })
      
    } catch (e) {
      console.log(e);
    }
  }

  renderProduct = () => {
    return this.state.product.map((product,i) => {
      return (
        <div key={i}>
                <div className="cartBody border-bottom border-dark mt-3 row">
                <div className="col-3">
                  <img src={`http://localhost:1995/addproduct/addimages/${product.image}`} alt="img" className="m-2"/>
                </div>
                <div className="col-5 my-2">
                  <div>{product.designer}</div>
                  <div className="mt-2">{product.product_name}</div>
                  <div className="mt-2">{product.category}</div>
                  <div className="mt-5 mb-2">
                  </div>
                </div>
                <div className="col-2 my-2 text-right">${product.price}</div>
                </div>
            </div>
      )
    })
  }


  render() {
    // console.log(this.props.orders[this.props.match.params.path]);
    console.log(this.state);
    console.log(cookie.get('idLogin'));
    console.log(this.props.match.params.orderid);

    const {orderstatus, user, payment, shipper, address, grandprice} = this.state
    
    if(this.state.orderstatus.length){
      var {id, status, createdAt} = orderstatus[0]
    }

    if(this.state.user.length){
      var{userid, username, email} = user[0]
    }
    
    if(this.state.payment.length){
      var{bank_name, iban, payment_method} = payment[0]
    }

    if(this.state.shipper.length){
      var{category, price, shipper_name, time_estimation} = shipper[0]
    }

    if(this.state.address.length){
      var{first_name, last_name, street, city, province, country, postal_code, phone} = address[0]
    }

    if(this.state.grandprice.length){
      var{grandtotal} = grandprice[0]
    }

    if(cookie.get('status') === 'user'){
      return (
        <div className="container mt-5 mb-5 pb-5">
          <div className="text-center titleOrderHistory">
              Order Details
          </div>
          {/* Order status */}
          <div className="mt-5">
            <div className="titleOrder mb-2">Order status</div>
            <div className="bodyOrderDetail">
              <div className="mt-3">
                order id: {id}
              </div>
              <div className="mt-1">
                status: {status}
              </div>
              <div className="mt-1">
                order placed at: {createdAt}
              </div>
            </div>
          </div>
          {/* Payment method */}
          <div className="mt-3">
            <div className="titleOrder mb-2">Payment method</div>
            <div className="bodyOrderDetail">
              <div className="mt-3">{payment_method}</div>
              <div className="mt-1 text-uppercase">{bank_name}</div>
              <div className="mt-1">IBAN: {iban}</div>
            </div>
          </div>
          {/* Shipping info */}
          <div className="mt-3">
            <div className="titleOrder mb-2">Shipment info</div>
            <div className="bodyOrderDetail">
              <div className="mt-3">{shipper_name} - {category}</div>
              <div className="mt-1">${price}</div>
              <div className="mt-1">shipping duration: {time_estimation}</div>
            </div>
          </div>
          {/* Shipping address */}
          <div className="mt-3">
            <div className="titleOrder mb-2">Shipment address</div>
            <div className="bodyOrderDetail">
              <div className="mt-3">{first_name} {last_name}</div>
              <div className="mt-1">{street}, {city}</div>
              <div className="mt-1">{province}, {country}</div>
              <div className="mt-1">{postal_code}</div>
              <div className="mt-1">{phone}</div>
            </div>
          </div>
          {/* Product */}
          <div className="titleOrder mb-2">Product(s)</div>
          <div className="mt-5">{this.renderProduct()}</div>
          {/* Grand Total */}
          <div className="title mt-5 text-center">Grand total: ${grandtotal}</div>
          <div className="text-center">
            <Link to="/orderhistory">
              <button className="mt-5 buttonOrderHistory">
                  return to order history
              </button>
            </Link>
          </div>
        </div>
      )
    } else if(cookie.get('status') === 'admin'){
       return (
        <div className="container mt-5 mb-5 pb-5">
        <div className="text-center titleOrderHistory">
            Order Details
        </div>
        {/* Order status */}
        <div className="mt-5">
          <div className="titleOrder mb-2">Order status</div>
          <div className="bodyOrderDetail">
            <div className="mt-3">
              order id: {id}
            </div>
            <div className="mt-1">
              status: {status}
            </div>
            <div className="mt-1">
              order placed at: {createdAt}
            </div>
          </div>
        </div>
        {/* Client id */}
        <div className="mt-3">
            <div className="titleOrder mb-2">client information</div>
            <div className="bodyOrderDetail">
              <div className="mt-3">client id: {userid}</div>
              <div className="mt-1">username: {username}</div>
              <div className="mt-1">email: {email}</div>
            </div>
          </div>
        {/* Payment method */}
        <div className="mt-3">
          <div className="titleOrder mb-2">Payment method</div>
          <div className="bodyOrderDetail">
            <div className="mt-3">{payment_method}</div>
            <div className="mt-1 text-uppercase">{bank_name}</div>
            <div className="mt-1">IBAN: {iban}</div>
          </div>
        </div>
        {/* Shipping info */}
        <div className="mt-3">
          <div className="titleOrder mb-2">Shipment info</div>
          <div className="bodyOrderDetail">
            <div className="mt-3">{shipper_name} - {category}</div>
            <div className="mt-1">${price}</div>
            <div className="mt-1">shipping duration: {time_estimation}</div>
          </div>
        </div>
        {/* Shipping address */}
        <div className="mt-3">
          <div className="titleOrder mb-2">Shipment address</div>
          <div className="bodyOrderDetail">
            <div className="mt-3">{first_name} {last_name}</div>
            <div className="mt-1">{street}, {city}</div>
            <div className="mt-1">{province}, {country}</div>
            <div className="mt-1">{postal_code}</div>
            <div className="mt-1">{phone}</div>
          </div>
        </div>
        {/* Product */}
        <div className="titleOrder mb-2">Product(s)</div>
        <div className="mt-5">{this.renderProduct()}</div>
        {/* Grand Total */}
        <div className="title mt-5 text-center">Grand total: ${grandtotal}</div>
        <div className="text-center">
          <Link to="/manageorder">
            <button className="mt-5 buttonOrderHistory">
                return to manage order
            </button>
          </Link>
        </div>
      </div>
       )
    }
  }
}

const mps = state => {
  return {orders: state.order.orderhistory}
}

export default connect (mps) (DetailOrder)

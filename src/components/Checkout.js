import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cookies from 'universal-cookie';
import {Link, Redirect} from 'react-router-dom';


import {getAddress, getShippers, getBank, getCart, placeOrder} from '../action/index'

import '../css/checkout.css'

const cookie = new Cookies()

class Checkout extends Component {
    state = {
        address: [],
        shippers: [],
        shipprice: [],
        bank:[],
        orderTotal: 0,
        grandTotal: 0
    }

    async componentDidMount(){ 
        await this.props.getAddress(cookie.get('idLogin'))
        await this.props.getShippers()
        await this.props.getBank()
        await this.props.getCart(cookie.get('idLogin'))
        console.log(this.props.cart);
        var lo = 0
        this.props.cart.forEach(obj => {
            
            lo += obj.price 
            console.log(lo);
        })
        this.setState({orderTotal: lo})
        console.log(this.state.orderTotal);
        
    }

    onPlaceOrder = async () => {
        const user_id = cookie.get('idLogin')
        const address_id = this.state.address
        const bank_id = this.state.bank
        const shipper_id = this.state.shippers
        const price_total = this.state.grandTotal
        const wishcart = this.props.cart

        await this.props.placeOrder(user_id, address_id, bank_id, shipper_id, price_total, wishcart)
        await this.props.getCart(cookie.get('idLogin'))
    }

  renderAddress = () => {
    return this.props.addresses.map((address, i) => {
        return(
            <div key={i}>
                <div className="radio mt-4 radioAddress">
                    <label>
                        <input onClick={() => {this.setState({address: address.id}, () => {console.log(this.state.address)}) ;
                        }} type='radio' name='address' className="inlinebutton"/>
                            <div className="ml-4 optionAdd">
                                <div className="cartBody">
                                    {address.first_name} {address.last_name}
                                </div>
                                <div className="cartBody mt-1 d-inline">
                                    {address.street},
                                </div>
                                <div className="cartBody mt-1 ml-1 d-inline">
                                    {address.city}
                                </div>
                                <div className="cartBody mt-1">
                                    {address.province}
                                </div>
                                <div className="cartBody mt-1">
                                    {address.country}
                                </div>
                                <div className="cartBody mt-1">
                                    {address.postal_code}
                                </div>
                            </div>
                    </label>
                </div>
            </div>
        )
    })
}

  renderShipper = () => {
    return this.props.shippers.map((shipper, i) => {
        return(
            <div key={i}>
                <div className="radio mt-4 radioAddress">
                    <label>
                        <input 
                            onClick={() => {this.setState({shippers: shipper.id, shipprice: shipper.price, grandTotal: this.state.orderTotal + shipper.price}, () => {console.log(this.state.shippers)})}} 
                            type='radio' 
                            name='shippers' 
                            className="inlinebutton"/>
                            <div className="ml-4 optionShipper">
                                <div className="cartBody">
                                    {shipper.shipper_name} - {shipper.category}
                                </div>
                                <div className="cartBody mt-1 d-inline">
                                    {shipper.time_estimation}
                                </div>
                                <div className="cartBody mt-1">
                                    ${shipper.price}
                                </div>
                            </div>
                    </label>
                </div>
            </div>
        )
    })
}

renderBank = () => {
    return this.props.bank.map((bank, i) => {
        return(
            <div key={i}>
                <div className="radio mt-4 radioAddress">
                    <label>
                        <input onClick={() => {this.setState({bank: bank.id}, () => {console.log(this.state.bank)}) ;
                        }} type='radio' name='bank' className="inlinebutton"/>
                            <div className="ml-4 optionBank">
                                <div className="cartBody text-uppercase">
                                    {bank.owner}
                                </div>
                                <div className="cartBody mt-1">
                                    {bank.bank_name}
                                </div>
                                <div className="cartBody mt-1 d-inline">
                                    IBAN: {bank.iban}
                                </div>
                                
                            </div>
                    </label>
                </div>
            </div>
        )
    })
}

renderCart = () => {
    return this.props.cart.map((cart, i) => {
        return(
            <div key={i}>
                <div className="cartBody border-bottom border-dark mt-3 row">
                <div className="col-3">
                  <img src={`http://localhost:1995/addproduct/addimages/${cart.image}`} alt="img" className="m-2"/>
                </div>
                <div className="col-5 my-2">
                  <div>{cart.designer}</div>
                  <div className="mt-2">{cart.product_name}</div>
                  <div className="mt-5 mb-2">
                  </div>
                </div>
                <div className="col-2 my-2 text-right">${cart.price}</div>
                </div>
            </div>

        )
    })
}

// orderTotal = () => {
//     if(this.props.cart.length){
//         var total = 0
//         this.props.cart.forEach(obj => {
//             total += obj.price
//         }); return total
//     }
// }


  render() {
    console.log(this.props.addresses);
    console.log(this.props.shippers);
    console.log(this.state.shipprice);
    console.log(this.state.grandTotal);
    console.log(this.props.bank);
    console.log(this.props.cart);
    console.log(typeof cookie.get('cart'));
    
    if(parseInt(cookie.get('cart'))){
        return (
          <div>
            <div className="container cart">
                <div className="cartTitle p-2 text-center">
                    Checkout
                </div>
                {/* address */}
                <div className="cartBodyTitle checkoutBorder mt-3 text-uppercase">
                    <div>shipping address</div>
                </div>
                <div>
                    {this.props.addresses.length ? 
                        <div>
                            {this.renderAddress()}
                        </div> :
                        <Link to="/addresses">
                            <button className="buttonCheckoutLogin btn buttonCheckout btn-block btn-dark mt-5">
                                Manage addresses
                            </button>
                        </Link> }
                 {/* shipping method */}
                 <div className="cartBodyTitle checkoutBorder mt-3 text-uppercase">
                    <div>shipping method</div>
                </div>
                <div>
                    {this.renderShipper()}
                </div>
                {/* billing */}
                <div className="cartBodyTitle checkoutBorder mt-3 text-uppercase">
                    <div>payment method: international wire</div>
                </div>
                <div>
                    {this.renderBank()}
                </div>
                {/* order summary */}
                <div className="cartBodyTitle checkoutBorder mt-3 text-uppercase">
                    <div>order summary</div>
                </div>
                <div>
                    {this.renderCart()}
                </div>
                {/* Total and Grandtotal */}
                <div className="cartBodyTitle mt-3 mb-5 row">
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
                            <div>${this.state.orderTotal}</div>
                            <div>${this.state.shipprice}</div>
                            <div>Incl.</div>
                            <div className="mt-4 orderTotal">${this.state.grandTotal}</div>
                          </div>
                    </div>
                {/* Button proceed order */}
                {/* <Link to="/orderhistory"> */}
                    <button className="buttonCheckoutLogin btn buttonCheckout btn-block btn-dark mt-5"
                    onClick={() => {this.onPlaceOrder()}}>
                        proceed order
                    </button>
                {/* </Link> */}
                    
                </div>
            </div>
          </div>
        )
    } return <Redirect to='/orderhistory'></Redirect>
  }
}

const mps = state => {
    return {addresses: state.auth.addresses, shippers: state.order.shippers, bank: state.order.bank, cart: state.prod.cartwish}
}

export default connect (mps, {getAddress, getShippers, getBank, getCart, placeOrder})(Checkout)

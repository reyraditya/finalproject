import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from '../config/axios';

import '../css/manageAccount.css';

import Footer from './Footer';


const cookie = new Cookies()

class ManageAddress extends Component {
 state= {
     addresses: [],
     add: false
 }

 componentDidMount () {
     this.getAddress();
 }

 //  Retrieve addresses
 getAddress = async () => {
     try {
         const res = await axios.get(`/address/${cookie.get('idLogin')}`)
         this.setState({addresses: res.data})
     } catch (e) {
         console.log(e);
         
     }
 }

 //  Post new address
 addAddress = async (userid) => {
    const first_name = this.firstName.value
    const last_name = this.lastName.value
    const street = this.street.value
    const country = this.country.value
    const province = this.province.value
    const city = this.city.value
    const postal_code = this.postalCode.value
    const phone = this.phone.value

     try {
         await axios.post(`/addresses/${userid}`, {
             first_name, 
             last_name, 
             street, 
             country, 
             province,
             city,
             postal_code,
             phone 
         })
         this.getAddress()
     } catch (e) {
         console.log(e);
         
     }
 }

//  Delete address
 deleteAddress = async (addressid, owner) => {
    await axios.delete('/addresses',{data: {addressid, owner}})
    this.getAddress()
}

 // Show list of address in renderlistAdd 
 renderlistAddress = () => {
     return this.state.addresses.map(add => {
         return (
           <div>  
                 <div className="bodyInput text-center mt-4">
                   <span className="d-inline text-capitalize">{add.first_name} </span>
                   <span className="d-inline text-capitalize">{add.last_name}</span>
                   <span className="d-block">{add.street}</span>
                   <span className="d-inline">{add.city}, </span>
                   <span className="d-inline">{add.province}</span>
                   <span className="d-block">{add.postal_code} </span>
                   <span className="d-inline">{add.country}</span>
                   <span className="d-block">{add.phone}</span>
                 </div>
                 <div className="container-fluid d-flex mx-2">
                    <div className="col-7">
                        <div className="container containerAddButton">
                            <button className="bodyInput addressButton d-inline">
                                Edit
                            </button>
                            <button className="bodyInput addressButton d-inline"
                            onClick={() => {this.deleteAddress(add._id, this.props.id)}}>
                                Delete
                            </button>
                       </div>
                    </div>
                 </div>
               </div>
         );
     })
 } 


  render() {
    if(!this.state.add){
        return (
          <div>
            <div className="container-fluid d-flex mx-2">
              <div className="title col-2 mx-2">
                <Link to="/account" className="d-block">
                  Account details
                </Link>
                <Link to="/addresses" className="d-block mt-2">
                  Addresses
                </Link>
                <Link to="/addresses" className="d-block mt-2">
                  Order history
                </Link>
                <Link to="/addresses" className="d-block mt-2">
                  Wishlist
                </Link>
              </div>
              <div className="col-7">
                <div className="container containerAccount">
                  <h1 className="text-center title">Manage Account</h1>
                  <div className="mt-1">
                    <p className="body text-center">Saved addresses</p>
                    <span>{this.renderlistAddress()}</span>
                  </div>
                  <button
                    type="submit"
                    className="buttonAccount btn-dark btn-block mt-4 mx-auto p-auto text-center"
                    onClick={() => {
                      this.setState({ add: !this.state.add });
                    }}
                  >
                    Add new address
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
    return (
      <div>
        <div className="container-fluid d-flex mx-2">
          <div className="title col-2 mx-2">
            <Link to="/account" className="d-block">
              Account details
            </Link>
            <Link to="/addresses" className="d-block mt-2">
              Addresses
            </Link>
            <Link to="/addresses" className="d-block mt-2">
              Order history
            </Link>
            <Link to="/addresses" className="d-block mt-2">
              Wishlist
            </Link>
          </div>
          <div className="col-7">
            <form>
              <div className="container containerAccount">
                <h1 className="text-center title">Manage Account</h1>
                <div className="mt-3">
                  <p className="body text-center">Add an address</p>
                  <label className="bodyInput" for="firstname">
                    First Name
                  </label>
                  <input className="accountInputForm p-2 text-capitalize form-control" type="text" id="firstname" ref={input => this.firstName = input}/>
                  <label className="bodyInput mt-3" for="lastname">
                    Last Name
                  </label>
                  <input
                    className="accountInputForm p-2 text-capitalize form-control"
                    type="text"
                    id="lastname"
                    ref={input => this.lastName = input}
                  />
                  <label className="bodyInput mt-3" for="street">
                    Street address
                  </label>
                  <input
                    className="accountInputForm p-2 form-control"
                    type="text"
                    id="street"
                    ref={input => this.street = input}
                  />
                  <label className="bodyInput mt-3" for="country">
                    Country
                  </label>
                  <input
                    className="accountInputForm p-2 form-control"
                    type="text"
                    id="country"
                    ref={input => this.country = input}
                  />
                  <label className="bodyInput mt-3" for="province">
                    State or Province
                  </label>
                  <input
                    className="accountInputForm p-2 form-control"
                    type="text"
                    id="province"
                    ref={input => this.province = input}
                  />
                  <label className="bodyInput mt-3" for="city">
                    City
                  </label>
                  <input
                    className="accountInputForm p-2 form-control"
                    type="text"
                    id="city"
                    ref={input => this.city = input}
                  />
                  <div className="row">
                    <div className="col-6">
                      <label className="bodyInput mt-3" for="postalcode">
                        ZIP or postal code
                      </label>
                      <input
                        className="accountInputForm p-2 form-control"
                        type="text"
                        id="postalcode"
                        ref={input => this.postalCode = input}
                      />
                    </div>
                    <div className="col-6">
                      <label className="bodyInput mt-3" for="phone">
                        Phone
                      </label>
                      <input
                        className="accountInputForm p-2 form-control"
                        type="text"
                        id="phone"
                        ref={input => this.phone = input}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="container containerAccount">
            <Link to="/addresses"><button
                type="submit"
                className="buttonAccount btn-dark btn-block mt-5 mx-auto p-auto d-inline"
                onClick={() => this.addAddress(this.props.id)}
              >
                save
              </button></Link>
              <button
                type="submit"
                className="buttonAccountCancel btn-dark btn-block mt-5 ml-3 p-auto d-inline"
                onClick={() => {this.setState({add: !this.state.add})}}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
              <Footer />
        </div>
      </div>
    );
  }
}

const mps = state => {
    return{id: state.auth.id}
}

export default connect(mps)(ManageAddress);

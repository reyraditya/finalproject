import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from '../config/axios';

import {getAddress} from '../action/index'

import '../css/manageAccount.css';

import Footer from './Footer';


const cookie = new Cookies()

class ManageAddress extends Component {
 state= {
     add: false,
 }

 componentDidMount () {
     this.props.getAddress(cookie.get('idLogin'));
 }


 //  Post new address
 addAddress = async () => {
    const user_id = this.props.id
    const first_name = this.firstName.value
    const last_name = this.lastName.value
    const street = this.street.value
    const country = this.country.value
    const province = this.province.value
    const city = this.city.value
    const postal_code = this.postalCode.value
    const phone = this.phone.value

     try {
         await axios.post(`/addresses`, {
             user_id,
             first_name, 
             last_name, 
             street, 
             country, 
             province,
             city,
             postal_code,
             phone 
         })
         this.props.getAddress(user_id)
         this.setState({add: !this.state.add}) //Redirect to list of address after this button is clicked
     } catch (e) {
         console.log(e);
         
     }
 }


//  Delete address
 deleteAddress = async (addressid, id) => {
    await axios.delete(`/addresses/${addressid}`)
    this.props.getAddress(id)
}

 // Show list of address in renderlistAdd 
 renderlistAddress = () => {
        return this.props.addresses.map((add, i) => {
            return (
               <div>  
                     <div className="bodyInputAddress text-center mt-4">
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
                                <Link to={`/editaddress/${i}`}><button className="bodyInput addressButton d-inline"
                                >
                                    Edit
                                </button></Link>
                                <button className="bodyInput addressButton d-inline" data-toggle="modal" data-target="#exampleModalCenter"
                                // onClick={() => {this.deleteAddress(add.id, add.user_id)}}
                                >
                                    Delete
                                </button>
                           </div>
                        </div>
                    </div>

                    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modalHeader">
                                    <h5 className="modal-title d-inline" id="exampleModalLongTitle">
                                      Delete address
                                    </h5>
                                    <button type="button" className="close modalHeader" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modalBody">
                                    <div className="d-block">Are you sure you want to delete this address?</div>
                                    <div className="d-block">This action cannot be reverted.</div>
                                </div>
                                <div className="modalFooter">
                                  {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
                                  <button type="button" className="btn btn-block buttonAddress" data-dismiss="modal"
                                   onClick={() => {this.deleteAddress(add.id, add.user_id)}}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                          </div>
                      </div>
                </div>
          )
        }
      )
    }


  render() {
    console.log(this.props.addresses);
    
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
                  <button type="submit" className="buttonAccount btn-dark btn-block mt-4 mx-auto p-auto" onClick={() => {this.setState({ add: !this.state.add })}}>
                        Add new address
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
           <button
                type="submit"
                className="buttonAccount btn-dark btn-block mt-5 mx-auto p-auto d-inline"
                onClick={() => this.addAddress(this.props.id)}
              >
                save
              </button>
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
    return{id: state.auth.id, addresses: state.auth.addresses}
}

export default connect(mps, {getAddress})(ManageAddress);

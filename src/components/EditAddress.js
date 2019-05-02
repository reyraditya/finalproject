import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
import {connect} from 'react-redux';
import axios from '../config/axios';

import {getAddress} from '../action/index'

import Footer from './Footer'

const cookie = new Cookies()

class EditAddress extends Component {
    
    componentDidMount(){
        this.props.getAddress(cookie.get('idLogin'))
    }

    // Edit address
    editAddress = async (addressid) => {
        const id = this.props.id;
        const first_name = this.first_name.value;
        const last_name = this.last_name.value;
        const street = this.street.value;
        const country = this.country.value;
        const province = this.province.value;
        const city = this.city.value;
        const postal_code = this.postal_code.value;
        const phone = this.phone.value;

        try {
            await axios.patch(`/addresses/${addressid}`,{
                first_name,
                last_name,
                street,
                country,
                province,
                city,
                postal_code,
                phone
            })
            this.props.getAddress(id)
        } catch (e) {
            console.log(e);
            
        }
    }


  render() {
      console.log(this.props);
      console.log(this.props.addresses[this.props.match.params.path]);
      

      if(this.props.addresses.length !== 0) {
        var {
            id,
            first_name,
            last_name,
            street,
            country,
            province,
            city,
            postal_code,
            phone
        } = this.props.addresses[this.props.match.params.path]
      }
      
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
                        <p className="body text-center">Edit an address</p>
                        <label className="bodyInput" for="firstname">
                          First Name
                        </label>
                        <input className="accountInputForm p-2 text-capitalize form-control" 
                        type="text" 
                        id="firstname" 
                        ref={input => this.first_name = input}
                        defaultValue={first_name}
                        />
                        <label className="bodyInput mt-3" for="lastname">
                          Last Name
                        </label>
                        <input
                          className="accountInputForm p-2 text-capitalize form-control"
                          type="text"
                          id="lastname"
                          ref={input => this.last_name = input}
                          defaultValue={last_name}
                        />
                        <label className="bodyInput mt-3" for="street">
                          Street address
                        </label>
                        <input
                          className="accountInputForm p-2 form-control"
                          type="text"
                          id="street"
                          ref={input => this.street = input}
                          defaultValue={street}
                        />
                        <label className="bodyInput mt-3" for="country">
                          Country
                        </label>
                        <input
                          className="accountInputForm p-2 form-control"
                          type="text"
                          id="country"
                          ref={input => this.country = input}
                          defaultValue={country}
                        />
                        <label className="bodyInput mt-3" for="province">
                          State or Province
                        </label>
                        <input
                          className="accountInputForm p-2 form-control"
                          type="text"
                          id="province"
                          ref={input => this.province = input}
                          defaultValue={province}
                        />
                        <label className="bodyInput mt-3" for="city">
                          City
                        </label>
                        <input
                          className="accountInputForm p-2 form-control"
                          type="text"
                          id="city"
                          ref={input => this.city = input}
                          defaultValue={city}
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
                              ref={input => this.postal_code = input}
                              defaultValue={postal_code}
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
                              defaultValue={phone}
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
                      onClick={() => this.editAddress(`${id}`)}
                    >
                      edit
                    </button></Link>
                    <Link to="/addresses"><button
                      type="submit"
                      className="buttonAccountCancel btn-dark btn-block mt-5 ml-3 p-auto d-inline"
                    >
                      cancel
                    </button></Link>
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
    return {id: state.auth.id, addresses: state.auth.addresses}
}

export default connect(mps, {getAddress})(EditAddress)

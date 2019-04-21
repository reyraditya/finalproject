import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../css/manageAccount.css';

import Footer from './Footer';

class ManageAddress extends Component {
  render() {
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
                  <input
                    className="accountInputForm p-2 text-capitalize form-control"
                    type="text"
                    id="firstname"
                  />
                  <label className="bodyInput mt-3" for="lastname">
                    Last Name
                  </label>
                  <input
                    className="accountInputForm p-2 text-capitalize form-control"
                    type="text"
                    id="lastname"
                  />
                  <label className="bodyInput mt-3" for="street">
                    Street address
                  </label>
                  <input
                    className="accountInputForm p-2 form-control"
                    type="text"
                    id="street"
                  />
                  <label className="bodyInput mt-3" for="country">
                    Country
                  </label>
                  <input
                    className="accountInputForm p-2 form-control"
                    type="text"
                    id="country"
                  />
                  <label className="bodyInput mt-3" for="province">
                    State or Province
                  </label>
                  <input
                    className="accountInputForm p-2 form-control"
                    type="text"
                    id="province"
                  />
                  <label className="bodyInput mt-3" for="city">
                    City
                  </label>
                  <input
                    className="accountInputForm p-2 form-control"
                    type="text"
                    id="city"
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
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="container containerAccount">
              <button
                type="submit"
                className="buttonAccount btn-dark btn-block mt-5 mx-auto p-auto"
              >
                save changes
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

export default ManageAddress;

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
            <div className="container">

            {/* Navbar Brand */}
              <Link className="navbar-brand" to="/">ESSENCE</Link>
              <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav2">
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Icon Search, Register, Login */}
              <div className="collapse navbar-collapse row p-2" id="navbarNav2">
                <form className="input-group col-12 col-md-7 ml-auto">
                    
                </form>
                <ul className="navbar-nav ml-auto col-12 col-md-1">
                  <li className="nav-item m-2">
                    <Link className="nav-a" to="/register">
                      <FontAwesomeIcon icon="user-alt" />
                    </Link>
                  </li>
                  <li className="nav-item m-2">
                    <Link className="nav-a" to="/login">
                      <FontAwesomeIcon icon="sign-in-alt" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

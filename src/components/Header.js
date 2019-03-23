import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';
import "../css/header.css"

import { onLogoutUser } from '../action';

import shoppingBag from './shopping-bag.png';
import mainLogo from './Logo-regular.png';



class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState(({
      isOpen: !this.state.isOpen
    }));
  }

  render() {
    const {user} = this.props

    if(user.username === ""){
      return (
        <div>
          <Navbar light expand="md" className="mb-2 fixed-top navbar2">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img src={mainLogo} alt="ESSENCE"></img>
              </Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                {/* Menu navbar left */}
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <Link to="/alldesigners" className="iconzz">
                      ALL DESIGNERS
                    </Link>
                  </NavItem>
                </Nav>
                {/* Menu navbar right */}
                <Nav className="ml-auto" navbar>
                  <NavItem className="m-2 mx-2 my-auto">
                    <Link to="/register" className="iconzz">
                      {/* <FontAwesomeIcon icon="user-alt" /> */}
                      REGISTER
                    </Link>
                  </NavItem>
                  <NavItem className="m-2 mx-2 my-auto">
                    <Link to="/login" className="iconzz">
                      {/* <FontAwesomeIcon icon="sign-in-alt" /> */}
                      LOGIN
                    </Link>
                  </NavItem>
                  <NavItem className="m-2 mx-2 my-auto">
                    <Link to="#" className="iconzz">
                      {/* <FontAwesomeIcon icon="sign-in-alt" /> */}
                      SEARCH
                    </Link>
                  </NavItem>
                  <NavItem className="m-2 mx-2 my-auto">
                    <Link className="nav-link" to="/cart"><img src={shoppingBag} alt="shoppingbag" />
                    <span className="shoppingCount">(0)</span>
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
        </div>
      )
    } else {
      return (
        <div>
          <Navbar light expand="md" className="mb-2 fixed-top navbar2">
            <div className="container">
              <NavbarBrand href="/">
                <img src={mainLogo} alt="ESSENCE"></img>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
              {/* Menu navbar left */}
              <Nav className="mr-auto" navbar>
                  <NavItem>
                    <Link to="/alldesigners" className="iconzz mt-1">
                      ALL DESIGNERS
                    </Link>
                  </NavItem>
                </Nav>
                {/* Menu navbar right */}
                <Nav className="ml-auto" navbar>
                  <UncontrolledDropdown className="mt-1 mx-3" nav inNavbar>
                    <DropdownToggle className="iconzz text-uppercase" nav>
                      WELCOME, {user.username}
                    </DropdownToggle>
                    <DropdownMenu right className="dropdownMenu dropdownz">
                      <Link className="dropdown-item" to="/manageproduct">
                        <DropdownItem>MANAGE PRODUCT</DropdownItem>
                      </Link>
                      <Button className="dropdown-item text-center" href="/" onClick={this.props.onLogoutUser}>
                        LOGOUT
                      </Button>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <Link className="nav-link" to="/cart"><img src={shoppingBag} alt="shoppingbag" />
                    <span className="shoppingCount">(0)</span>
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
        </div>
        );
      }
    }
  }

const mapsStateToProps = state => {
  return {user: state.auth}
}

export default connect(mapsStateToProps,{onLogoutUser})(Header)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
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

import shoppingBag from './icons/shopping-bag.png';
import mainLogo from '../components/img/Logo-regular.png';

const cookie = new Cookies()

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
    console.log(cookie.get('status'));
    
    const {user} = this.props

    if(user.username === ""){
      return (
        <div>
          <Navbar light expand="md" className="mb-2 fixed-top navbar2">
            <div className="container-fluid mx-3">
              <Link className="navbar-brand" to="/">
                <img src={mainLogo} alt="ESSENCE"></img>
              </Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>

                {/* Menu navbar left */}
                <Nav className="mr-auto" navbar>
                  <NavItem className="navItemDesigner my-auto">
                    <Link to="/alldesigners" className="iconzz">
                      ALL COLLECTION
                    </Link>
                  </NavItem>
                  <UncontrolledDropdown className="dropdownSearch m-2 mx-2 my-auto" nav inNavbar>
                    <DropdownToggle className="iconzz navItemSearch" nav>
                      SEARCH
                    </DropdownToggle>
                    <DropdownMenu right className="dropdownMenu dropdownzSearch">
                        <input className="dropdown-item inputSearch" type="text" placeholder="SEARCH COLLECTION"></input>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>

                {/* Menu navbar right */}
                <Nav className="ml-auto" navbar>
                  <NavItem className="m-2 mx-2 my-auto">
                    <Link to="/register" className="iconzz">
                      REGISTER
                    </Link>
                  </NavItem>
                  <NavItem className="m-2 mx-2 my-auto">
                    <Link to="/login" className="iconzz">
                      LOGIN
                    </Link>
                  </NavItem>
                  <NavItem className="m-2 mx-2 my-auto">
                    <Link className="nav-link" to="/cart"><img src={shoppingBag} alt="shoppingbag" />
                    <span className="shoppingCount">(1)</span>
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
        </div>
      )
    } else if(cookie.get('idLogin') !== undefined && cookie.get('status') === 'user') {
      return (
        <div>
          <Navbar light expand="md" className="mb-2 fixed-top navbar2">
            <div className="container-fluid mx-3">
              <NavbarBrand href="/">
                <img src={mainLogo} alt="ESSENCE"></img>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>

              {/* Menu navbar left */}
              <Nav className="mr-auto" navbar>
                  <NavItem className="navItemDesigner my-auto">
                    <Link to="/alldesigners" className="iconzz">
                      ALL COLLECTION
                    </Link>
                  </NavItem>
                  <UncontrolledDropdown className="dropdownSearch m-2 mx-2 my-auto" nav inNavbar>
                    <DropdownToggle className="iconzz navItemSearch" nav>
                      SEARCH
                    </DropdownToggle>
                    <DropdownMenu right className="dropdownMenu dropdownzSearch">
                        <input className="dropdown-item inputSearch" type="text" placeholder="SEARCH COLLECTION"></input>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>

                {/* Menu navbar right */}
                <Nav className="ml-auto" navbar>
                  <NavItem className="navItemDesigner mr-2 my-auto">
                    <Link to="/wishlist" className="iconzz">
                      WISHLIST
                    </Link>
                  </NavItem>
                  <UncontrolledDropdown className="mt-1" nav inNavbar>
                    <DropdownToggle className="iconzz mr-2 text-uppercase" nav>
                      ACCOUNT
                    </DropdownToggle>
                    <DropdownMenu right className="dropdownMenu dropdownz">
                      <Link className="dropdown-item text-center mb-1" to="/account">
                        <DropdownItem>MANAGE ACCOUNT</DropdownItem>
                      </Link>
                      <Button className="dropdown-item text-center" href="/" onClick={this.props.onLogoutUser}>
                        LOGOUT
                      </Button>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <Link className="nav-link" to="/cart"><img src={shoppingBag} alt="shoppingbag" />
                    <span className="shoppingCount">(1)</span>
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
        </div>
        );
      } else if (cookie.get('status') === 'admin'){
        return (
          <div>
          <Navbar light expand="md" className="mb-2 fixed-top navbar2">
            <div className="container-fluid mx-3">
              <NavbarBrand href="/">
                <img src={mainLogo} alt="ESSENCE"></img>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>

              {/* Menu navbar left */}
              <Nav className="mr-auto" navbar>
                  <NavItem className="navItemDesigner my-auto">
                    <Link to="/alldesigners" className="iconzz">
                      ALL COLLECTION
                    </Link>
                  </NavItem>
                  <UncontrolledDropdown className="dropdownSearch m-2 mx-2 my-auto" nav inNavbar>
                    <DropdownToggle className="iconzz navItemSearch" nav>
                      SEARCH
                    </DropdownToggle>
                    <DropdownMenu right className="dropdownMenu dropdownzSearch">
                        <input className="dropdown-item inputSearch" type="text" placeholder="SEARCH COLLECTION"></input>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>

                {/* Menu navbar right */}
                <Nav className="ml-auto" navbar>
                  <UncontrolledDropdown className="mt-1" nav inNavbar>
                    <DropdownToggle className="iconzz text-uppercase" nav>
                      {user.username}
                    </DropdownToggle>
                    <DropdownMenu right className="dropdownMenuAdmin dropdownAdmin">
                      <Link className="dropdown-item" to="/manageproduct">
                        <DropdownItem>MANAGE PRODUCT</DropdownItem>
                      </Link>
                      <Link className="dropdown-item text-center mb-1" to="/account">
                        <DropdownItem>ACCOUNT</DropdownItem>
                      </Link>
                      <Button className="dropdown-item text-center" href="/" onClick={this.props.onLogoutUser}>
                        LOGOUT
                      </Button>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <Link className="nav-link" to="/cart"><img src={shoppingBag} alt="shoppingbag" />
                    <span className="shoppingCount">(1)</span>
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
        </div>
        )
      }
    }
  }

const mapsStateToProps = state => {
  return {user: state.auth}
}

export default connect(mapsStateToProps,{onLogoutUser})(Header)

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

import { onLogoutUser } from '../action';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mainLogo from './mainLogo.png';



class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const {user} = this.props

    if(user.username === ""){
      return (
        <div>
          <Navbar light expand="md" className="mt-2 mb-2">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img src={mainLogo} alt="ESSENCE"></img>
              </Link>
              <NavbarToggler onClick={this.toggle} data-target="#navBarz" />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem className="m-2 mx-2">
                    <Link to="/register" className="iconzz">
                      {/* <FontAwesomeIcon icon="user-alt" /> */}
                      REGISTER
                    </Link>
                  </NavItem>
                  <NavItem className="m-2 mx-2">
                    <Link to="/login" className="iconzz">
                      {/* <FontAwesomeIcon icon="sign-in-alt" /> */}
                      SIGN IN
                    </Link>
                  </NavItem>
                  <NavItem className="m-2 mx-2">
                    <Link to="/login" className="iconzz">
                      {/* <FontAwesomeIcon icon="sign-in-alt" /> */}
                      SEARCH
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
          <Navbar light expand="md" className="mt-2 mb-2">
            <div className="container">
              <NavbarBrand href="/">
                <img src={mainLogo} alt="ESSENCE"></img>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <UncontrolledDropdown className="dropdownz" nav inNavbar>
                    <DropdownToggle nav caret>
                      WELCOME, {user.username}
                    </DropdownToggle>
                    <DropdownMenu right>
                      <Link className="dropdown-item" to="/manageproduct">
                        <DropdownItem>Manage Product</DropdownItem>
                      </Link>
                      <DropdownItem divider />
                      <Button className="dropdown-item" href="/" onClick={this.props.onLogoutUser}>
                        LOGOUT
                      </Button>

                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <Link className="nav-link" to="/cart"><FontAwesomeIcon icon="shopping-cart" />(0)</Link>
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

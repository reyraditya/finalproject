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
              <Link className="navbar-brand" to="/home">
                <img src={mainLogo} alt="ESSENCE"></img>
              </Link>
              <NavbarToggler onClick={this.toggle} data-target="#navBarz" />
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
                    <Link className="nav-link" to="/cart"><FontAwesomeIcon icon="shopping-cart" />(0)</Link>
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
              <NavbarBrand href="/home">
                <img src={mainLogo} alt="ESSENCE"></img>
              </NavbarBrand>
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
                  <UncontrolledDropdown className="dropdownz mx-3" nav inNavbar>
                    <DropdownToggle className="text-uppercase" nav caret>
                      WELCOME, {user.username}
                    </DropdownToggle>
                    <DropdownMenu right className="dropdownMenu">
                      <Link className="dropdown-item" to="/manageproduct">
                        <DropdownItem>MANAGE PRODUCT</DropdownItem>
                      </Link>
                      <Button className="dropdown-item text-center" href="/home" onClick={this.props.onLogoutUser}>
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

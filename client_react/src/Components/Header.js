import React from 'react';
import Login from './Login';
import '../App.css';
import {
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import NotificationSystem from 'react-notification-system';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      googleUserInfo: JSON.parse(localStorage.getItem('USER_INFO')),
      isOpen: false
    };
      this._notificationSystem= null;
  }
    updateLoginInfo(user, id_token, access_token){
        localStorage.setItem("ID_TOKEN", id_token);
        localStorage.setItem("ACCESS_TOKEN", access_token);
        localStorage.setItem("USER_INFO", JSON.stringify(user));
        this.setState({googleUserInfo: user});
    }

    isLogin(){
        return localStorage.getItem("ACCESS_TOKEN")!==null && this.state.googleUserInfo!==null;
    }

    logout(){
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("ID_TOKEN");
        localStorage.removeItem("USER_INFO");
        this.setState({googleUserInfo: null, access_token: null});
    }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

      const main_content= !this.isLogin() ? <Login updateInfo={this.updateLoginInfo.bind(this)}/> :
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                  <img id="profilImg" src={this.state.googleUserInfo.Paa} alt="avatar"/>
              </DropdownToggle>
              <DropdownMenu right>
                  <DropdownItem>
                      <span>{this.state.googleUserInfo.ig}</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                      <a onClick={this.logout.bind(this)} >Déconnection</a>
                  </DropdownItem>
              </DropdownMenu>
          </UncontrolledDropdown>
    return (

      <div>
          <NotificationSystem ref="notificationSystem" />
        <Navbar  light expand="md">
          <NavbarBrand>Egamos</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/">Home</Link></NavLink>
              </NavItem>
              <NavItem>
                   <NavLink><Link to="/Cars">Shop</Link></NavLink>
              </NavItem>
                <NavItem>
                    <NavLink><Link to="/">Home</Link></NavLink>
              </NavItem>

                {main_content}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
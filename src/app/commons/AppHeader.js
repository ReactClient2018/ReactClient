import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './AppHeader.css';
import logo from '../assets/img/bank_img/logo.png';
import bankLogo from "../assets/img/bank_img/bfi-logo.png";
import { Layout, Menu, Dropdown, Icon } from 'antd';
const Header = Layout.Header;
//import Header from '../components/user/login/Login';

class AppHeader extends Component {
  

  handleMenuClick=({ key })=> {
    if (key === "logout") {
      this.props.onLogout();
    }
  }

  render() {
    
    return (
      <Header>
        <div>
          
          <Link to="/"><img src={logo} className=""></img></Link>
        
          <span style={{ height: '50px', fontSize: '2em', verticalAlign: 'middle' }}>
            | Login Panel</span>
          
            <div style={{ float: 'right', padding: '0px 10px' }} >
              Licensed to: <span id="bfi-logo"></span><img
                src={bankLogo} style={{ height: '50px', width: '60px' }}
              ></img>
            </div>
          
          <div className="clearfix"></div>
          <div className="x_title">
            <h2>
              <i className="fa fa-sign-in"></i> Login <small style={{ fontSize: '12px' }}>Please
						provide your login details.</small>
            
            </h2>
            
            <div className="clearfix"></div>
            
          </div>

            
        </div>

      </Header>
    );
  }
}



export default withRouter(AppHeader);


class Footer extends Component {
  render() {
    return (
      
      <footer className="login_col" style={{position:'relative'}}>
        <div className="pull-right">&copy; 2016-2017 TrustAML</div>
        <div className="clearfix"></div>
      </footer>
      
    );
  }

}
export { Footer };
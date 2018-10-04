import React from 'react';
import PropTypes from 'prop-types';
import {
    Menu
} from 'material-ui-icons';
import {
    withStyles, AppBar, Toolbar, IconButton, Hidden, Button,
} from 'material-ui';

import logo from '../../assets/img/logo.png';
import bankLogo from "../../assets/img/bfi-logo.png";

import { headerStyle } from 'variables';

import HeaderLinks from './HeaderLinks.jsx';

class Header extends React.Component{
    
    render(){
        const { classes, color } = this.props;
        return (
            <div>
                <img src={logo} className=""></img>
                <span style={{ height: '50px', fontSize: '2em', verticalAlign: 'middle' }}>
                    | Login Panel</span>
                <div style={{ float: 'right', padding: '0px 10px' }} >
                    Licensed to: <span id="bfi-logo"></span><img
                        src={bankLogo} style={{ height: '50px', width: '60px' }} ></img>
                </div>
                </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    color: PropTypes.oneOf(["primary","info","success","warning","danger"])
};

export default withStyles(headerStyle, { withTheme: true })(Header);

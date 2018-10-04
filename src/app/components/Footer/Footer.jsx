import React from 'react';
import PropTypes from 'prop-types';
import {
    List, ListItem, withStyles
} from 'material-ui';

import { footerStyle } from 'variables';

class Footer extends React.Component{
    render(){
        var tenant = localStorage.getItem("tenant");
        const { classes } = this.props;
        return (
            <footer className={classes.footer}>
                <div className={classes.container}>
                    <p className={classes.right}>
                        <span>
                            &copy;2016-2017 TrustAML, logged with: <a href="#" className={classes.a}>{tenant}</a>
                        </span>
                    </p>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);

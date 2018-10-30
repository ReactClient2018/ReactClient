import React from 'react';
import PropTypes from 'prop-types';
import {Auth,History} from "utils"
import {PrivateRoute} from "utils"
import {
    withStyles,
} from 'material-ui';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import "perfect-scrollbar/css/perfect-scrollbar.css";
import {
    Header,MainNavBar, Footer
} from 'components';

import appRoutes from '../../routes/app.jsx';

import { appStyle } from 'variables';


const switchRoutes = (<Switch>
{
    appRoutes.map((prop,key) => {
        if(prop.redirect)
            return (
                <Redirect from={prop.path} to={prop.to} key={key}/>
            );
        return (

            <PrivateRoute path={prop.path} component={prop.component} key={key}/>
        );
    })
}
</Switch>);

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            mobileOpen: false,
        };
    }

    handleDrawerToggle() {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    componentDidMount(){
        if(!Auth.isAuthenticated())
        {
            History.push("/login");
        }
        if(window.innerWidth > 991){
            // eslint-disable-next-line
            const ps = new PerfectScrollbar(this.refs.mainPanel);
        }
    }
    componentDidUpdate(){
        this.refs.mainPanel.scrollTop = 0;
    }

    render(){
        const { classes, ...rest } = this.props;
        return (
                <div className={classes.mainPanel} ref="mainPanel">
                    {/* <Header
                        routes={appRoutes}
                        handleDrawerToggle={this.handleDrawerToggle.bind(this)}
                        {...rest}
                    /> */}
                    {/* <MainNavBar/> */}
                    <div className={classes.content}>
                        <div className={classes.container}>
                            {switchRoutes}
                        </div>
                    </div>

                   <Footer />
                </div>
          
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(appStyle, { withTheme: true })(App);

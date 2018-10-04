import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import store from "./store/multStore";

import {Provider} from "react-redux";

import './assets/css/material-dashboard-react.css';
import  {History}  from "utils";
import indexRoutes from './routes/index.jsx';

ReactDOM.render(

        <Provider store={store}>
    <Router history={History}>
        <Switch>
            {
                indexRoutes.map((prop,key) => {
                    return (
                        <Route path={prop.path} component={prop.component}  key={key}/>
                    );
                })
            }
        </Switch>
    </Router></Provider>
    , document.getElementById('root'));
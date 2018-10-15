import React from "react";
import { Router, Route } from 'react-router-dom';
import Profile from "./components/Profile"
import Login from "./components/Login/Login"
import history  from "./utils/History";
import MakerDashboard  from "./views/Dashboard/MakerDashboard.jsx";
import {PrivateRoute,Authorization} from "utils"

class App extends React.Component {

    render() {

        const Admin = Authorization(['ADMIN']);
        return (
            <Router history={history}>
                <div>
                    {/* <Route exact path="/" component={MakerDashboard}/> */}
                    <Route exact path="/" component={Login} />
                    <PrivateRoute exact path='/profile' component={Admin(Profile)} />
                    {/* <Route exact path="/login" component={Login} /> */}
                </div>
            </Router>
        );
    }
}

export default App;


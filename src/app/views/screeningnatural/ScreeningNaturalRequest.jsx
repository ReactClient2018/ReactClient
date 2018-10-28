import React from "react";
import ScreeningPrimaryRequest from "./ScreeningTabTitle.jsx"
import ScreeningTabTitle from "./ScreeningTabTitle.jsx";

import NavBar from "../../components/Screening/MainNavBar.jsx";
class ScreeningNaturalRequest extends React.Component {

    render() {
        return (
            <div>
                <NavBar/>
                <ScreeningTabTitle/>
            </div>
        );
    }
}
export default ScreeningNaturalRequest;

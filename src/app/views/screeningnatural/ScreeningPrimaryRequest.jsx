import React from "react";
import ScreeningNaturalForm from "../forms/ScreeningNaturalForm.jsx";
import ScreeningTabTitle from "./ScreeningTabTitle.jsx";
import NavBar from "../../components/Screening/MainNavBar.jsx";

class ScreeningPrimaryRequest extends React.Component{

    render() {
        const divStyle = {
            backgroundColor: 'white',
            overflowY: 'auto',
            width: '100%',
            height: '510px',
            position: 'relative'
        };
        return (
            <div>
                <NavBar/>
            <div style={divStyle}>
                <ScreeningTabTitle />
                <ScreeningNaturalForm />
            </div>
            </div>
        );
    }

}
export default ScreeningPrimaryRequest;
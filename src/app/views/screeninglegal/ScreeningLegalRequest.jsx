import React from "react";
import ScreeningTabTitle from "./ScreeningTabTitle.jsx";
import ScreeningLegalForm from "../forms/ScreeningLegalForm.jsx";
import NavBar from "../../components/Screening/MainNavBar.jsx";
class ScreeningLegalRequest extends React.Component {

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
                    <ScreeningTabTitle/>
                    <ScreeningLegalForm/>
                </div>
            </div>
        );
    }
}
export default ScreeningLegalRequest;

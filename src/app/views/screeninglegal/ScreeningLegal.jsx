import React from "react";
import ScreeningTabTitle from "../screeningnatural/ScreeningTabTitle.jsx";
import ScreeningLegalForm from "../forms/ScreeningLegalForm.jsx";
import NavBar from "../../components/Screening/MainNavBar.jsx";
class ScreeningLegal extends React.Component {

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
                </div>
            </div>
        );
    }
}
export default ScreeningLegal;

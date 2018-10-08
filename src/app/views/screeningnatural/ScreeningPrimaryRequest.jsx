import React from "react";
import ScreeningNaturalForm from "../forms/ScreeningNaturalForm.jsx";
import ScreeningTabTitle from "./ScreeningTabTitle.jsx"

class ScreeningPrimaryRequest extends React.Component{

    render() {
        const divStyle = {
            backgroundColor: 'white',
            overflowY: 'auto',
            width: '100%',
            height: '480px',
            position: 'relative'
        };
        return (
            <div style={divStyle}>
                <ScreeningTabTitle />
                <ScreeningNaturalForm />
            </div>
        );
    }

}
export default ScreeningPrimaryRequest;
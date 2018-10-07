import React from "react";
import ScreeningNaturalForm from "../forms/ScreeningNaturalForm";
import ScreeningTabTitle from "./ScreeningTabTitle"



class ScreeningNaturalRequest extends React.Component {
    render() {
        const divStyle = {
            backgroundColor: 'white',
            overflowY: 'auto',
            // border: '1px solid red',
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
export default ScreeningNaturalRequest;


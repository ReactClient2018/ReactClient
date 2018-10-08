import React from "react";
import ScreeningNaturalForm from "../forms/ScreeningNaturalForm";
import ScreeningTabTitle from "./ScreeningTabTitle"



class ScreeningNaturalRequest extends React.Component {

    render() {
        const divStyle = {
            backgroundColor: 'white',
            overflow: 'scroll',
            
            // border: '1px solid red',
            width: '100%',
            float: 'left',
            height: '600px',
            position: 'relative'
        };
        return (
            <div style={divStyle}>
            
                {/* <ScreeningPrimaryForm /> */}
                <ScreeningTabTitle />
                <ScreeningNaturalForm />
            </div>
        );
    }
}
export default ScreeningNaturalRequest;


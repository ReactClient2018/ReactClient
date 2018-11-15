import { Navbar, Nav, NavItem, Button, Glyphicon } from 'react-bootstrap';
import ScreeningTabTitle from '../screeningnatural/ScreeningTabTitle.jsx';
import NavBar from "../../components/Screening/MainNavBar.jsx";
import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix } from "react-bootstrap";
import PersonalInfoForm from './kycForms/personalInfoForm.jsx';
import { History } from 'utils';
//import Sidebar from 'react-bootstrap-sidebar';
class SideNavPage extends React.Component {
  constructor(props) {
    super(props);

    //   this.state = {
    //     isVisible: false,
    //   };
    // 
  }
  // updateModal(isVisible) {
  //   this.state.isVisible = isVisible;
  //   this.forceUpdate();
  // }
  // componentWillMount(){
  //   History.push("/personalInfoForm");
  // }
  handleClickInfo = (e) => {
     alert(e.target.name);
    History.push("/"+e.target.name);

  }
  render() {
    const divStyle = {
      backgroundColor: 'white',
      overflowY: 'auto',
      width: '100%',
      height: '600px',
      position: 'relative',
      marginLeft: '0px',
      marginRight: '0px',
    };
    return (
      <div>
        <NavBar />
        <div className="col-md-2 sidebar">

          <div className="row">

            <div className="absolute-wrapper"> </div>

            <div className="side-menu">
              <nav className="navbar navbar-default" role="navigation">

                <div className="side-menu-container">

                  <ul className="nav" >
                    <li className="nav-item"   onClick={this.handleClickInfo}  onClick={this.handleClickInfo}><button  name="personalInfoForm">Personal Info</button></li>
                    <hr />
                    <li className="nav-item"   onClick={this.handleClickInfo} onClick={this.handleClickInfo}><button  name="identificationInfoForm">Identification Info</button></li>
                    <hr/>
                    <li className="nav-item"   onClick={this.handleClickInfo} onClick={this.handleClickInfo}><button  name="addressInfoForm">Address Info</button></li>
                    <hr />
                    <li className="nav-item"   onClick={this.handleClickInfo} ><button name="relationInfoForm" name="relationInfoForm">Relation Info</button></li>
                    <hr />
                    <li className="nav-item"   onClick={this.handleClickInfo} ><button name="relatedPersonInfoForm">Related Person Info</button></li>
                    <hr />
                    <li className="nav-item"   onClick={this.handleClickInfo} ><button name="relatedEntityInfoForm">Related Entity Info</button></li>
                    <hr />
                    <li className="nav-item"   onClick={this.handleClickInfo} ><button name="educationInfoForm">Education Info</button></li>
                    <hr />
                    <li className="nav-item"   onClick={this.handleClickInfo} ><button name="involvementInfoForm">Involvement Info</button></li>
                    <hr />
                    <li className="nav-item"   onClick={this.handleClickInfo} ><button name="accountsInfoForm">Accounts Info</button></li>
                    <hr />
                    <li className="nav-item"   onClick={this.handleClickInfo} ><button name="internalObservationInfoForm">Internal Observation Info</button></li>
                    <hr />
                    <li className="nav-item"   onClick={this.handleClickInfo} ><button name="commentsForm">Comments</button></li>
                    <hr />
                    <li className="nav-item"   onClick={this.handleClickInfo} ><button name="amlInfoForm">AML info</button></li>
                    <hr />
                    <li className="nav-item"   onClick={this.handleClickInfo} ><button name="documentStatusInfoForm">Documents Status Info</button></li>
                    <hr />
                    <li className="nav-item"   onClick={this.handleClickInfo} ><button name="customerReviewInfoForm">Customer Review Info</button></li>
                  </ul>
                </div>
              </nav>

            </div>
          </div>

        </div>
      </div >
    );
  }
}

export default SideNavPage;
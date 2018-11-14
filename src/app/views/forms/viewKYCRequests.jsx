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
  handlePersonalInfo = () => {

    History.push("/personalInfoForm");

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
        <div class="col-md-2 sidebar">

          <div class="row">

            <div class="absolute-wrapper"> </div>

            <div class="side-menu">
              <nav class="navbar navbar-default" role="navigation">

                <div class="side-menu-container">

                  <ul class="nav" >
                    <li class="nav-item" onClick={this.handlePersonalInfo}><button>Personal Info</button></li>
                    <hr />
                    <li class="nav-item"><button>Address Info</button></li>
                    <hr />
                    <li class="nav-item" ><button>Relation Info</button></li>
                    <hr />
                    <li class="nav-item" ><button>Related Person Info</button></li>
                    <hr />
                    <li class="nav-item" ><button>Related Entity Info</button></li>
                    <hr />
                    <li class="nav-item" ><button>Education Info</button></li>
                    <hr />
                    <li class="nav-item" ><button>Involvement Info</button></li>
                    <hr />
                    <li class="nav-item" ><button>Accounts Info</button></li>
                    <hr />
                    <li class="nav-item" ><button>Internal Observation Info</button></li>
                    <hr />
                    <li class="nav-item" ><button>Comments</button></li>
                    <hr />
                    <li class="nav-item" ><button>AML info</button></li>
                    <hr />
                    <li class="nav-item" ><button>Documents Status Info</button></li>
                    <hr />
                    <li class="nav-item" ><button>Customer Review Info</button></li>
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
import React from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import {History} from 'utils';
import Navbar from "../../components/Screening/MainNavBar.jsx";

class ScreeningLegalResponse extends React.Component {

    submitClick = (event) => {
        History.push("./screeningLegalReply");
    };
  
    fetchScreeningLegalData = () => {

        var data = [];
        var json = localStorage.getItem("screeningLRequestList");
        if (json) {
            json = JSON.parse(json);
            for (var i = 0; i < json.length; i++) {
                var screening_data = json[i].screening_l_request_data;
                if (screening_data) {
                    var details = {
                        id: json[i].id,
                        purpose_of_screening: screening_data.purpose_of_screening,
                        name_of_institution: screening_data.name_of_institution,
                        date_of_establishment: screening_data.date_of_establishment,
                        date: ''
                    }
                    data.push(details);
                }
            }
        }
        return data;
    }
    
    render() {

        const dataLegal = this.fetchScreeningLegalData();

        const columnsLegal = [
            {
                Header: 'ID',
                accessor: 'id'
            }, {
                Header: 'Purpose of screening',
                accessor: 'purpose_of_screening'
            }, {
                Header: 'Name of institution',
                accessor: 'name_of_institution'
            }, {
                Header: 'Date of establishment',
                accessor: 'date_of_establishment'
            }, {
                Header: 'Date of request',
                accessor: 'date'
            }, {
                Header: 'Time of request',
                accessor: 'time'
            }, {
                Header: 'Action',
                width: 125,
                accessor: 'tender_list',
                style: {
                    cursor: 'pointer'
                },
                Cell: props => <button onClick={() => this.submitClick(props.value)}>Review
                    </button>
            }
        ]
        const divStyle = {
            backgroundColor: 'white',
            overflowY: 'auto',
            width: '100%',
            height: '510px',
            position: 'relative'
        };

        return (
            <div>
                <Navbar/>
                <div style={divStyle}>
                    <h3
                        style={{
                        color: 'lightBlue',
                        textAlign: 'center'
                    }}>
                        <span>Screening Legal Response!!!</span>
                    </h3>
                    <ReactTable
                        data={dataLegal}
                        columns={columnsLegal}
                        defaultPageSize={9}
                        pageSizeOptions={[6, 10, 18]}
                        getTdProps={(state, row, rowInfo, column, instance) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                console.log(row.index);
                                localStorage.removeItem("screening_l_notification_index");
                                localStorage.setItem("screening_l_notification_index", row.index);
                                if (handleOriginal) {
                                    handleOriginal();
                                }
                            }
                        }
                    }}/>
                 
                </div>
            </div>
        );
    }

}

export default ScreeningLegalResponse;

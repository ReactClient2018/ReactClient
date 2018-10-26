import React from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import {History} from 'utils';
import Navbar from "../../components/Screening/CheckerNavBar.jsx";

class ScreeningNotification extends React.Component {

    submitClick = (event) => {
        History.push("./screeningAction");
    };
    fetchScreeningData = () => {

        var data = [];
        var json = JSON.parse(localStorage.getItem("screeningNRequestList"));
        for (var i = 0; i < json.length; i++) {
            var screening_data = json[i].screening_n_request_data;
            if (screening_data) {
                var details = {
                    id: json[i].id,
                    purpose_of_screening: screening_data.purpose_of_screening_n,
                    first_name: screening_data.first_name,
                    middle_name: screening_data.middle_name,
                    last_name: screening_data.last_name,
                    date: ''
                }
                data.push(details);
            }
        }
        return data;

    }
    render() {

        const data = this.fetchScreeningData();
        const columns = [
            {
                Header: 'ID',
                accessor: 'id'
            }, {
                Header: 'Purpose of screening',
                accessor: 'purpose_of_screening'
            }, {
                Header: 'First Name',
                accessor: 'first_name'
            }, {
                Header: 'Middle Name',
                accessor: 'middle_name'
            }, {
                Header: 'Last Name',
                accessor: 'last_name'
            }, {
                Header: 'नाम',
                accessor: 'lsf'
            }, {
                Header: 'बीचको नाम',
                accessor: 'lsm'
            }, {
                Header: 'थर',
                accessor: 'lsl'
            }, {
                Header: 'Screening request date',
                accessor: 'date'
            }, {
                Header: 'Screening request time',
                accessor: 'time'
            }, {
                Header: 'Details',
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
                    <h2
                        style={{
                        color: 'lightBlue',
                        textAlign: 'center'
                    }}>
                        <span>Review Screening Checker!!!</span>
                    </h2>
                    <ReactTable
                        data={data}
                        columns={columns}
                        defaultPageSize={9}
                        pageSizeOptions={[6, 10, 18]}
                        getTdProps={(state, row, rowInfo, column, instance) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                console.log(row.index);
                                localStorage.removeItem("screening_n_notification_index");
                                localStorage.setItem("screening_n_notification_index", row.index);
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

export default ScreeningNotification;

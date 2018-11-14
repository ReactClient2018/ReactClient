import React from "react";
import Nav from "../Screening/AdminNavBar.jsx";
import ReactTable from "react-table";
import 'react-table/react-table.css';
class Users extends React.Component {
    fetchUserData = () => {
        var data = [];
        var json = localStorage.getItem("tenantUsers");
        if (json) {
            json = JSON.parse(json);
            for (var i = 0; i < json.length; i++) {

                var details = {
                    id: json[i].id,
                    first_name: json[i].firstName,
                    middle_name: json[i].middleName,
                    last_name: json[i].lastName,
                    username: json[i].username,
                    employee_id: json[i].employee_id,
                    designation: json[i].designation,
                    user_role: json[i].userRole
                }
                data.push(details);

            }
        }
        return data;

    }
    render() {
        const userData = this.fetchUserData();
        const columns = [
            {
                Header: 'ID',
                accessor: 'id'
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
                Header: 'User Name',
                accessor: 'username'
            }, {
                Header: 'Employee Id',
                accessor: 'employee_id'
            }, {
                Header: 'Designation',
                accessor: 'designation'
            }, {
                Header: 'User Role',
                accessor: 'user_role'
            }
        ]
        const divStyle = {
            backgroundColor: 'white',
            overflowY: 'auto',
            width: '100%',
            height: '600px',
            position: 'relative'
        };
        return (
            <div style={divStyle}>
                <Nav/>
                <div>
                    <h3
                        style={{
                        color: 'lightBlue',
                        textAlign: 'center'
                    }}>
                        <span>User Lists!!!</span>
                    </h3>
                    <ReactTable
                        data={userData}
                        columns={columns}
                        defaultPageSize={9}
                        pageSizeOptions={[6, 10, 18]}/>
                   
                    
                </div>
            </div>
        );
    }
}
export default Users;
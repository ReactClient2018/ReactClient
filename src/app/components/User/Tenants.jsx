import React from "react";
import Nav from "../Screening/MainAdminNavBar.jsx";
import ReactTable from "react-table";
import 'react-table/react-table.css';
class Tenants extends React.Component {
    fetchTenantData = () => {
        var data = [];
        var json = localStorage.getItem("tenants");
        if (json) {
            json = JSON.parse(json);
            for (var i = 0; i < json.length; i++) {

                var details = {
                    username: json[i].username,
                    password: json[i].password,
                    tenantId: json[i].tenantId,
                }
                data.push(details);

            }
        }
        return data;

    }
    render() {
        const tenantData = this.fetchTenantData();
        const columns = [
            {
                Header: 'User Name',
                accessor: 'username'
            }, {
                Header: 'Password',
                accessor: 'password'
            }, {
                Header: 'Tenant Id',
                accessor: 'tenantId'
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
                        <span>Tenant Lists!!!</span>
                    </h3>
                    <ReactTable
                        data={tenantData}
                        columns={columns}
                        defaultPageSize={9}
                        pageSizeOptions={[6, 10, 18]}/>
                   
                    
                </div>
            </div>
        );
    }
}
export default Tenants;
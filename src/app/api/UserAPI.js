import "whatwg-fetch"
import {Auth} from "utils"
let UserAPI = {

    login(username, password) {
        console.log("the username and password is"+ username, password);
       
        const requestOptions = {
            // credentials: 'include',
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa('api-client:secret'),
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: `username=${username}&password=${password}&grant_type=password`
        };

        return fetch('http://192.168.110.12:8080/multi-ds/oauth/token', requestOptions).then(response => {
            if (!response.ok) {
                console.log("Gotcha Error")
                return Promise.reject(response.statusText);
            }
            console.log("success");
            return response.json();
        }).then(user => {
            // console.log("The user is "+user);
            return user;
        }).catch((error) =>{
             alert("Wrong Credentials");
       
       }
       );
    },

    addScreeningNatural(values) {  
        var url = 'http://192.168.110.12:8080/multi-ds/api/screening_n/create?access_token='+ localStorage.getItem('access_token');
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json' ,
            'X-TENANT-ID': localStorage.getItem('tenant')},
            body: values
        }
        return fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        }).then(response => {
            return response;
        }).catch((error) =>{
             console.log(error); 
        }
        );
    },

    addScreeningLegal(values) {  
        var url = 'http://192.168.110.12:8080/multi-ds/api/screening_l/create?access_token='+ localStorage.getItem('access_token');
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json' ,
            'X-TENANT-ID': localStorage.getItem('tenant')},
            body: values
        }
        return fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        }).then(response => {
            return response;
        }).catch((error) =>{
             console.log(error); 
        }
        );
    },
    addUser(values) {  
        var url = 'http://192.168.110.12:8080/multi-ds/api/create?access_token='+ localStorage.getItem('access_token');
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json' },
            body: values
        }
        return fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        }).then(response => {
            return response;
        }).catch((error) =>{
            console.log(error);

        
        }
        );
    },

    createTenant(values) {  
        var url = 'http://192.168.110.12:8080/multi-ds/api/create_tenant?access_token='+ localStorage.getItem('access_token');
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json' },
            body: values
        }
        return fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        }).then(response => {
            return response;
        }).catch((error) =>{
            // alert(error);

        
        }
        );
    },
    updateScreeningNatural(values,id) {  
        var url = 'http://192.168.110.12:8080/multi-ds/api/screening_n/action/?id='+id+ '&access_token='+ localStorage.getItem('access_token');
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type':'application/json' ,
            'X-TENANT-ID': localStorage.getItem('tenant')},
            body: values
        }
        return fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        }).then(response => {
            return response;
        }).catch((error) =>{
            // alert("big error");
            // alert(error);
        
        }
        );
    },

    fetchScreenings(){
        const requestOptions = {
            method: 'GET',
            headers: Auth.fetchToken()
        }
        return fetch('http://192.168.110.12:8080/multi-ds/api/screening_n/fetch_by_action?access_token='+ localStorage.getItem('access_token'), requestOptions)
            .then(response => {
                 if (!response.ok) {
                    return Promise.reject(response.statusText);
                }
                return response.json();
            })
            .then(response => {
                return response;
            });
    },

    fetchScreeningsLegal(){
        const requestOptions = {
            method: 'GET',
            headers: Auth.fetchToken()
        }
        return fetch('http://192.168.110.12:8080/multi-ds/api/screening_l/fetch_by_action?access_token='+ localStorage.getItem('access_token'), requestOptions)
            .then(response => {
                 if (!response.ok) {
                    return Promise.reject(response.statusText);
                }
                return response.json();
            })
            .then(response => {
                return response;
            });
    }
}

export default UserAPI;
import "whatwg-fetch"
import {Auth} from "utils"
let ScreeningAPI = {
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
        })
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
    

    updateScreeningNReply(values,id) {  
        var url = 'http://192.168.110.12:8080/multi-ds/api/screening_n/reply/?id='+id+ '&access_token='+ localStorage.getItem('access_token');
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type':'application/json' ,
            'X-TENANT-ID': localStorage.getItem('tenant')},
            body: values
        }
        return fetch(url, requestOptions).then(response=> {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        }).then(response => {
            return response;
        });
    },


    updateScreeningLReply(values,id) {  
        var url = 'http://192.168.110.12:8080/multi-ds/api/screening_l/reply/?id='+id+ '&access_token='+ localStorage.getItem('access_token');
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type':'application/json' ,
            'X-TENANT-ID': localStorage.getItem('tenant')},
            body: values
        }
        return fetch(url, requestOptions).then(response=> {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        }).then(response => {
            return response;
        });
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
         console.log(error);
        
        }
        );
    },
    updateScreeningLegal(values,id) {  
        var url = 'http://192.168.110.12:8080/multi-ds/api/screening_l/action/?id='+id+ '&access_token='+ localStorage.getItem('access_token');
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
         console.log(error);
        
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

    fetchScreeningReplies(){
        const requestOptions = {
            method: 'GET',
            headers: Auth.fetchToken()
        }
        return fetch('http://192.168.110.12:8080/multi-ds/api/screening_n/replies?access_token='+ localStorage.getItem('access_token'), requestOptions)
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
    fetchScreeningLegalReplies(){
        const requestOptions = {
            method: 'GET',
            headers: Auth.fetchToken()
        }
        return fetch('http://192.168.110.12:8080/multi-ds/api/screening_l/replies?access_token='+ localStorage.getItem('access_token'), requestOptions)
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
    },

    fetchAllcreeningsLegal(){
        const requestOptions = {
            method: 'GET',
            headers: Auth.fetchToken()
        }
        return fetch('http://192.168.110.12:8080/multi-ds/api/screening_l/all?access_token='+ localStorage.getItem('access_token'), requestOptions)
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

export default ScreeningAPI;
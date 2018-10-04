import "whatwg-fetch"
let UserAPI = {

    login(username, password){
        var user
        const requestOptions = {
            // credentials: 'include',
            method: 'POST',
            headers: {'Authorization': 'Basic ' + btoa('api-client:secret'), 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' },
            body: `username=${username}&password=${password}&grant_type=password`
        };
        return fetch('http://localhost:8080/multi-ds/oauth/token', requestOptions)
            .then(response => {
                if (!response.ok) {
                    console.log("Gotcha Error")
                    return Promise.reject(response.statusText);
                }
                console.log("success");
                return response.json();
            })
            .then(user => {
                return user;
            });
            
        }
}

export default UserAPI;
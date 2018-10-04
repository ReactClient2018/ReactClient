let Auth = {
    isAuthenticated(){
        // Check whether the current time is past the
        // access token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    },

    logout(){
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('username');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('roles');
    },
    setSession(authResult) {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify((authResult["expires_in"] * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult["access_token"]);
        localStorage.setItem('username', authResult["username"]);
        localStorage.setItem('roles', authResult["roles"]);
        localStorage.setItem('expires_at', expiresAt);
    },
    fetchToken(){
        let token = localStorage.getItem('access_token');
        if (token) {
            return { 'Authorization': 'Bearer ' + token,'Content-Type':'application/json' };
        } else {
            return {};
        }
    }
}

export default Auth;
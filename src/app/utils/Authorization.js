import React from "react";
const Authorization = (allowedRoles) =>
     (WrappedComponent) => {
    return class WithAuthorization extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            const roles  = localStorage.getItem("roles");
            if (allowedRoles.includes(roles)) {
                return <WrappedComponent {...this.props} />
            } else {
                return <h1>Access Denied</h1>
            }
        }
    }
}
export default Authorization;
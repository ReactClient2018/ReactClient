import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {PropTypes} from 'prop-types';


const UserForm = ({ onSubmit }) =>
   

  <form onSubmit={onSubmit}>
    <label><Field name="id" component="input" type="text"  /> ID</label>
    <label><Field name="name" component="input" type="text" />Name</label>
    <button type="submit">Submit</button>
  </form>;

const validate = (values) => {
    const result = {};

    if (!values.id) {
        result.id = 'Please enter a user id';
    }

    if (!values.name) {
        result.name = 'Please enter a name';
    }

    return result;
};
// export const CreateUserForm = reduxForm({form: 'createUser', validate})(UserForm);
// export const EditUserForm = reduxForm({form: 'editUser', validate});
UserForm.propTypes = {
    mode: PropTypes.oneOf(['create', 'edit']),
    onSubmit: PropTypes.func
};
const CreateUserForm = props => <UserForm { ...props }/>;
const EditUserForm = props => <UserForm { ...props}/>;
export const ConnectedCreateUserForm = reduxForm({form: 'createUser', validate})(CreateUserForm);
export const ConnectedEditUserForm = reduxForm({form: 'editUser', validate})(EditUserForm);
export default UserForm;

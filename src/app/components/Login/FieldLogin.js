import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Field extends Component {
    state = {
        value: this.props.value,
        error: false,
    }


    static propTypes = {
        placeholder: PropTypes.string,
        value: PropTypes.string,
        name: PropTypes.string.isRequired,
        validate: PropTypes.func,
        onChange: PropTypes.func.isRequired
    }
    static getDerivedStateFromProps(nextProps) {
        return { value: nextProps.value }
    }

    onChange = (e) => {
        const name = this.props.name;
        const value = e.target.value;
        const error = this.props.validate ? this.props.validate(value) : false;
        this.setState({ value, error });
        this.props.onChange(name, value, error);
    }
    render() {
        return (
            <div>
                <div>
                    <label>{this.props.name}</label>
                </div>
                <input
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.onChange}></input>
                <span style={{ color: 'red' }}>{this.state.error}</span>
            </div>
        );
    }
}
export default Field;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../Login/Login';

class LoginComponent extends Component {
    render() {
        return (
            <Login click={this.props.loginUser}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        form: state.loginForm,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (email, password) => dispatch({ type: 'LOGIN', value:{email:email, password:password} })
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);
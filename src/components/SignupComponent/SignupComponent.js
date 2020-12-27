import React, { Component } from 'react';
import { connect } from 'react-redux';
import Signup from '../Signup/Signup';

class SignupComponent extends Component {
    render() {
        return (
            <Signup click={this.props.registerUser}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        form: state.signupForm,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: (name, email, password) => dispatch({ type: 'SIGNUP', value:{name:name, email:email, password:password} })
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(SignupComponent);
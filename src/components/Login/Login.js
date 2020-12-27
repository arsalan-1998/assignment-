
import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './Login.module.css';
import axios from 'axios';

let user = null;
class Login extends Component {

    state = {
        loginForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'your email'
                },
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: '*****'
                },
                value: ''
            } 
        }
    };

    loginUser = ( event ) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.loginForm) {
            formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
        }
        user = {
            userData: formData
        }
    }

    componentDidMount() {
        axios.post( '/login', user )
            .then( response => {
                console.log(response);
            } )
            .catch( error => {
                 console.log(error);
            } );
        console.log(user);
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedLoginForm = {
            ...this.state.loginForm
        };
        const updatedFormElement = { 
            ...updatedLoginForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedLoginForm[inputIdentifier] = updatedFormElement;
        this.setState({loginForm: updatedLoginForm});
    }
    
    render() {
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }
        return (
            <div className={styles.Login}>
                <form onSubmit={this.loginUser}>
                    {formElementsArray.map(formElement => (
                        <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                    ))}
                    <Button btnType="Success" onClick={this.props.click(this.state.email, this.state.password)}>Login</Button>
                </form>
            </div>
        );
    }
}


export default Login;

import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './Signup.module.css';

class Signup extends Component { 

    state = {
        signupForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'your name'
                },
                value: ''
            },
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

    // registerUser = ( event ) => {
    //     event.preventDefault();
    //     const formData = {};
    //     for (let formElementIdentifier in this.state.signupForm) {
    //         formData[formElementIdentifier] = this.state.signupForm[formElementIdentifier].value;
    //     }
    //     const user = {
    //         userData: formData
    //     }

    //     // axios.post( '/signup', user )
    //     //     .then( response => {
    //     //         console.log(response)
    //     //     } )
    //     //     .catch( error => {
    //     //          console.log(error);
    //     //     } );
    //     // console.log(user);
    // }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedSignupForm = {
            ...this.state.signupForm
        };
        const updatedFormElement = { 
            ...updatedSignupForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedSignupForm[inputIdentifier] = updatedFormElement;
        this.setState({signupForm: updatedSignupForm});
    }
    
    render() {
        const formElementsArray = [];
        for (let key in this.state.signupForm) {
            formElementsArray.push({
                id: key,
                config: this.state.signupForm[key]
            });
        }
        return (
            <div className={styles.Signup}>
                <form>
                    {formElementsArray.map(formElement => (
                        <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}
                            value={formElement.config.value} />
                    ))}
                    <Button btnType="Success" onClick={this.props.click(this.state.name, this.state.email, this.state.password)}>Signup</Button>
                </form>
            </div>
        );
    }
}

export default Signup;
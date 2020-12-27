import * as actionTypes from './actions';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const initialState = {
    form: []
  }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP:
            const newUser = {
                time: Math.random(), // not really unique but good enough here!
                name: action.value.name,
                email: action.value.email,
                password: action.value.password
            }
            axios.post('/signup', newUser)
            .then( response => {
                console.log(response);
                <Redirect from="/signup" to="/dashboard" />
            });
            return {
                ...state,
                form: state.form.concat( newUser )
            };
        case actionTypes.LOGIN:
            const loginUser = {
                time: Math.random(), 
                email: action.value.email,
                password: action.value.password
            }
            axios.post('/login', loginUser)
            .then( response => {
                console.log(response);
                <Redirect from="/signup" to="/dashboard" />
            });
            return {
                ...state,
                form: state.form.concat( loginUser )
            };
        default:
            return state
    }
}

export default reducer;

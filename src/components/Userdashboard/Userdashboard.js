import React from 'react';
import classes from './Userdashboard.module.css';

const dashboard = ( props ) => {
    return (
        <div className={classes.Dashboard}>
            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.time}</p>
        </div>
    );
}

export default dashboard;
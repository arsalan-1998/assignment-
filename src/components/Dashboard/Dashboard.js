import React, { Component } from 'react';
import Userdashboard from '../Userdashboard/Userdashboard';

class Dashboard extends Component {

    state = {
        name: "ASD",
        email: "asd@asd.com",
        time: new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()+' '+(new Date().getHours() >= 12 ? 'PM' : 'AM')
    };

    render() {
        return <Userdashboard name={this.state.name} email={this.state.email} time={this.state.time} />;
    }
}

export default Dashboard;
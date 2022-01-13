import React, { Component } from 'react'

export class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameOfEmployee: "Sharvan Kumar",
            email: "S@gmail.com",
            dob: 1997
        }
    }

    changeTheName = () => {
        //console.log(this.state.nameOfEmployee)

        this.setState({nameOfEmployee: "Rahul"});
    }

    render() {
        return (
            <div>
                <p>Name: {this.state.nameOfEmployee}</p>
                <p>Email: {this.state.email}</p>
                <p>DOb: {this.state.dob}</p>


                <button
                    type='button'
                    onClick={this.changeTheName}
                >Change Name</button>
            </div>
        )
    }
}

export default Employee

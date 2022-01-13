import React, { Component } from 'react'

export class Getderivedstatefromprops extends Component {

    constructor(props) {
        super(props);
        this.state = {username: 'admin123'};
    }

    static getDerivedStateFromProps(props, state) {
        return {username: props.username}
    }

    changeUserName = () => {
        this.setState({username: 'admin45544'});
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.username}</h1>

                <button type='button' onClick={this.changeUserName}>Change Username</button>
            </div>
        )
    }
}

export default Getderivedstatefromprops

import React, { Component } from 'react'

export class ComponentDidMount extends Component {

    constructor(props) {
        super(props);
        this.state = {username: 'Admin5632'}
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({username: "Sharvan623"});
        }, 3000)

    }

    render() {
        return (
            <div>
                <h1>Component Did Mount {this.state.username}</h1>
            </div>
        )
    }
}

export default ComponentDidMount

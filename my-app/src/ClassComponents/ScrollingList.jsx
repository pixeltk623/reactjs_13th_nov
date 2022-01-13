import React, { Component } from 'react'

export class ScrollingList extends Component {

    constructor(props) {
        super(props);
        this.state = { name: "Kumar" };
    }
    componentDidMount() {

        // Changing the state after 1 sec
        setTimeout(() => {
            this.setState({ name: 'Ravi' });
        }, 5000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        // Displaying the previous value of the state
        document.getElementById('prev').innerHTML =
            'Previous Name: ' + prevState.name;
    }

    componentDidUpdate() {

        // Displaying the current value of the state
        document.getElementById('new').innerHTML =
            'Current Name: ' + this.state.name;
    }

    render() {
        return (
            <div>
                <h1 id='prev'></h1>
                <h2 id='new'></h2>
                <div>Hello This is {this.state.name}</div>
            </div>
        )
    }
}

export default ScrollingList

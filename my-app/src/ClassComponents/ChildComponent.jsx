import React, { Component } from 'react'

export class ChildComponent extends Component {

    componentWillUnmount() {
        alert("This component Must be deleted");
      }

    render() {
        return (
            <div>
                <h1>Child Component</h1>
            </div>
        )
    }
}

export default ChildComponent

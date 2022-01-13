import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ComponentWillUnmount extends Component {

    constructor(props) {
        super(props);
        this.state = {show: true};
    }

    deleteDom = () => {
        
        this.setState({show: false});
    }
    render() {

        let childT;

        if(this.state.show) {
            console.log('Show')
            childT = <ChildComponent />
        }

        return (
            <div>
                <h1>Hi This is kumar</h1>
                
                {childT}

                <button type='button' onClick={this.deleteDom}>Test</button>
            </div>
        )
    }
}

export default ComponentWillUnmount

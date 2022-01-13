import React, { Component } from 'react'

export class ShouldComponentUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {username: 'admin123'};
    }


    shouldComponentUpdate() {
        return false;
    }

    changeUserName = () => {
        this.setState({username: 'sharvan623'});
    }


    render() {
        return (
            <div>
                <h1>Username:  {this.state.username}</h1>

                <button 
                    type='button'
                    onClick={this.changeUserName}
                >Change UserName</button>
            </div>
        )
    }
}

export default ShouldComponentUpdate

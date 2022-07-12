import React, { Component } from 'react';

class Question4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Welcome to React world'
        }
    }
    changeState(str) {
        this.setState({
            message: str
        });
        //Check message has changed to www
        if (this.state.message === 'www') {
            alert('This is done correctly');
        }
    }

    render() {
        return <div>Hello {this.state.message}
            <button onClick={() => this.changeState('www')}>WWW</button>
        </div>;
    }
}

export default Question4;
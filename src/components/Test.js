import React, { Component } from 'react';

class Test extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <p>{this.props.text}</p>
        )
    }
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
         console.log('Component DID MOUNT!')
    }
}

export default Test;
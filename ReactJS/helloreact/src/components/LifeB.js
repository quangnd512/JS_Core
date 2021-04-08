import React, { Component } from 'react';


class LifeB extends Component {
    constructor(props){
        super(props);

        this.state = {
            name:'Quang'
        }
        console.log('LifeB contructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeB getDerived');
        return null;
    }

    componentDidMount(){
        console.log('LifeB DidMount')
    }

  render(){
        console.log('LifeB render')
        return <div>Life B</div>
    }
}

export default LifeB;

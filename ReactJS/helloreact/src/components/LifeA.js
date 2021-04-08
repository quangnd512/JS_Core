import React, { Component } from 'react';
import LifeB from './LifeB';


class LifeA extends Component {
    constructor(props){
        super(props);

        this.state = {
            name:'Quang'
        }
        console.log('LifeA contructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeA getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('LifeA DidMount')
    }

  render(){
        console.log('LifeA render')
        return (
            <div>
                <div>Life A</div>,
                <LifeB/>
            </div>
        )
    }
}

export default LifeA;

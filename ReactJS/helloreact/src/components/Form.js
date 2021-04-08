import React, { Component } from 'react';


class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            topic : 'A',
            username: ''
        }
    }

    onChangeValue = (event) => {
        this.setState({
            topic : event.target.value
        })
    }

    onChangeText = (event) =>{
        this.setState({
            username: event.target.value
        })
    }
    onSubmitFrm = (event) =>{
        alert(`${this.state.username}`+","+` ${this.state.topic}`)
        event.preventDefault()
    }
  render(){
    return (
    <React.Fragment>
        <form onSubmit={this.onSubmitFrm}>
            <div>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.onChangeText}/>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.onChangeValue}>
                    <option value='A'>A</option>
                    <option value='B'>B</option>
                    <option value='C'>C</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    </React.Fragment>
  );
}
}

export default Form;

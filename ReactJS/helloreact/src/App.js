import React, { Component } from 'react';
import Product from './components/Product';

class App extends Component {
    onValueProduct= () => {
        console.log(this.refs);
    }

  render(){
    return (
    <div className="App">
        <div className='wapper'>
            <Product price ="5000000">
                Ten san pham
            </Product>
            <input ref="name"/>
            <button onClick={ this.onValueProduct }>Click Me</button>
        </div>
    </div>
  );
}
}

export default App;

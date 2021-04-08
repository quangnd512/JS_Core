import React, { Component } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Product from './components/Product';
import LifeA from './components/LifeA';


class App extends Component {
  render(){
    return (
    <div className="App">
          {/* <Product name="Item 1" price="2000$"/> */}
          {/* <Header/> */}
          <Form />
          {/* <LifeA/> */}
    </div>
  );
}
}

export default App;

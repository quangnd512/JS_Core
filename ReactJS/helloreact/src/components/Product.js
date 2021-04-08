import React, { Component } from 'react';

class Product extends Component {
    render(){
        const {name, price} = this.props
    return (
      <div>
        <h1>Info: {name}, price: {price}</h1>
      </div>
    );
  }
}
  export default Product;
  
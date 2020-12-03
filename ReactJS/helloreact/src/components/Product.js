import React, { Component } from 'react';

class Product extends Component {
    // constructor(props){
    //     super(props);
    //     this.onClick = this.onClick.bind(this);
    // }

    onClick = () =>{
        alert(this.props.children);
    }

    render(){
    return (
      <div className='wapper'>
            <h3>{ this.props.children }</h3>
            <p>{ this.props.price }</p>
            <p>
              <a className='btn btn-primary' onClick={ this.onClick }>Mua ngay</a>
            </p>
      </div>
    );
  }
}
  export default Product;
  
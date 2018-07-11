import React, { Component } from 'react';
import ProductList from './ProductList'

class ProductsContainer extends Component {
  render() {
    return (
      <div className="ProductsContainer">
        <ProductList />
      </div>
    );
  }
}

export default ProductsContainer;

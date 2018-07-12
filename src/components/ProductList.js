import React, { Component } from 'react';
import ProductCard from './ProductCard';

class ProductList extends Component {
  render() {
    const productCards = this.props.selectedProducts.map(product => {
      return <ProductCard
                key={product.id}
                product={product}
                handleItem={this.props.handleItem}
                cartView={this.props.cartView}
              />
    })
    return (
      <div>
        <h4 style={{"color":"blue"}}>{this.props.deptName}</h4>
      <div className="row">
        {productCards}
      </div>
      </div>
    );
  }
}

export default ProductList;

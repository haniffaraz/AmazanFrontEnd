import React, { Component } from 'react';
import ProductList from './ProductList';
import { Collection, CollectionItem } from 'react-materialize';

class ProductsContainer extends Component {

  handleClick = (e) => {
    let dept = e.target.innerText
    this.props.handleDepmtClick(dept)
  }

  render() {

    const { selectedProducts, deptName, handleCard, cartView } = this.props
    return (
      <div>
        <div onClick={this.handleClick}>
        <Collection >
          <CollectionItem>Apparel</CollectionItem>
          <CollectionItem>Automotive</CollectionItem>
          <CollectionItem>Cosmetics</CollectionItem>
          <CollectionItem>Decorations</CollectionItem>
          <CollectionItem>Electronics</CollectionItem>
          <CollectionItem>Home Appliance</CollectionItem>
          <CollectionItem>Sports</CollectionItem>
          <CollectionItem>Outdoors</CollectionItem>
        </Collection>
      </div>
      <ProductList
        handleItem={handleCard}
        deptName={deptName}
        selectedProducts={selectedProducts}
        cartView={cartView}
      />
      </div>
    );
  }
}

export default ProductsContainer;

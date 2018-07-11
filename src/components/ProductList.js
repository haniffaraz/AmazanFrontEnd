import React, { Component } from 'react';
import ProductCard from './ProductCard'

class ProductList extends Component {
  render() {
    return (
      <div>
      <div class="rightcolumn">
        <div class="card">
      <h3>Departments</h3>
      <div class="deptlist"><p>Apparel</p></div>
      <div class="deptlist"><p>Automotive</p></div>
      <div class="deptlist"><p>Cosmetics</p></div>
      <div class="deptlist"><p>Decorations</p></div>
      <div class="deptlist"><p>Electronics</p></div>
      <div class="deptlist"><p>HomeAppliance</p></div>
      <div class="deptlist"><p>Sports</p></div>
      <div class="deptlist"><p>Outdoors</p></div>
    </div>
        <ProductCard />
  </div>
</div>
    );
  }
}

export default ProductList;

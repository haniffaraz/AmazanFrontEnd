import React from 'react';
import ProductsContainer from './ProductsContainer';

const Url = 'http://localhost:3000/products'

class Page extends React.Component {

  state = {
    products: [],
    selectedProducts:[],
    departmentName: "All Products"
  }

  componentDidMount () {
    fetch(Url)
      .then(r => r.json())
      .then(products =>
        this.setState({
          products,
          selectedProducts: products.slice(0,20)
        }))
  }

  handleDeptClick = (dept) => {
    console.log(dept.split(' ').join(''));
    let selectedDeptProducts = this.state.products.filter(product => {
      return (product.department === dept.split(' ').join(''))

    })
    this.setState({
      selectedProducts: selectedDeptProducts,
      departmentName: dept
    })
  }

  render() {
    return (
      <div className="Page">
        <ProductsContainer
          deptName={this.state.departmentName}
          products={this.state.products}
          selectedProducts={this.state.selectedProducts}
          handleDepmtClick={this.handleDeptClick}
        />
      </div>
    );
  }
}

export default Page;

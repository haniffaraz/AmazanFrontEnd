import React from 'react';
import ProductsContainer from './ProductsContainer';
import Cart from './Cart';

const Url = 'http://localhost:3000/products'

class Page extends React.Component {

  state = {
    products: [],
    selectedProducts:[],
    departmentName: "Cart"
  }

  componentDidMount () {

  }

  handleDeptClick = (dept) => {
    let selectedDeptProducts = this.state.products.filter(product => {
      return (product.department === dept.split(' ').join(''))
    })
    this.setState({
      selectedProducts: selectedDeptProducts,
      departmentName: dept
    })
  }

  handleCardClick = (card) => {
    this.setState({
      cart: [...this.state.cart, card]
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
          handleCard={this.handleCardClick}
        />
      </div>
    );
  }
}

export default Page;

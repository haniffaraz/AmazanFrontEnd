import React from 'react';
import ProductsContainer from './ProductsContainer';
import { data } from '../data';

class Page extends React.Component {

 state = {
   products: [],
   selectedProducts:[],
   departmentName: "All Products",
   cart: [],
   cartView: false,
   cartItems: []
 }

 componentDidMount () {
  //  if(this.props.cartView) {
  //    localStorage.cartItems = localStorage.cartItems || JSON.stringify([]);
  //    let cartItems = JSON.parse(localStorage.cartItems);

  //    this.setState({
  //      cart: cartItems,
  //      products: cartItems,
  //      selectedProducts: cartItems.slice(0,20),
  //      departmentName: "Cart",
  //      cartView: this.props.cartView
  //    });
  //  } else {
  //  fetch(Url)
  //    .then(r => r.json())
  //    .then(products =>
       this.setState({
         products: data,
         selectedProducts: data.slice(0,20)
       })
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

//  handleCardClick = (card) => {
//    if (this.props.cartView) {
//      var filteredCards = this.state.cart.filter(cartCard => cartCard.id !== card.id);
//      this.setState({
//        cart: filteredCards,
//        products: filteredCards,
//        selectedProducts:filteredCards,
//      });
//      localStorage.cartItems = JSON.stringify(filteredCards);
//    } else {
//    this.setState({
//      cart: [...this.state.cart, card]
//    });
//    localStorage.cartItems = JSON.stringify(this.state.cart);
//  }
//  }

 render() {
   return (
     <div className="Page">
       <ProductsContainer
         deptName={this.state.departmentName}
         products={this.state.products}
         selectedProducts={this.state.selectedProducts}
         handleDepmtClick={this.handleDeptClick}
        //  handleCard={this.handleCardClick}
         cartView={this.state.cartView}
       />
     </div>
   );
 }
}

export default Page;

import React, { Component } from 'react';
import { CardTitle, Card } from 'react-materialize';

class ProductCard extends Component {

  handleItemClick = () => {
    this.props.handleItem(this.props.product)
  }

  render() {

      const { name, price, department, imgUrl } = this.props.product
    return (
      <div onClick={this.handleItemClick} className='col m2'>
      <Card className='small'
<<<<<<< HEAD
          header={<CardTitle image={imgUrl !== undefined ? imgUrl : "http://via.placeholder.com/150x180"}></CardTitle>}
          actions={[<a href='#'>Buy it Now!</a>]}>
          <span>{name}</span>
        <span className="price">${price}</span>
          <span>{department}</span>
=======
  header={<CardTitle image={imgUrl !== undefined ? imgUrl : "http://via.placeholder.com/150x180"}></CardTitle>}
  actions={this.props.cartView == true ? [<a href='#'>Remove!</a>] : [<a href='#'>Buy it Now!</a>]}>
  <span>{name}</span>
<span className="price">${price}</span>
  <span>{department}</span>
>>>>>>> refs/remotes/origin/master
      </Card>
      </div>

)
  }
}

export default ProductCard;

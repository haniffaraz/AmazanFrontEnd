import React, { Component } from 'react';
import { CardTitle, Card } from 'react-materialize';

class ProductCard extends Component {

  render() {

      const { name, price, department, imgUrl } = this.props.product
    return (
      <div className='col m2'>
      <Card className='small'
  header={<CardTitle image={imgUrl !== undefined ? imgUrl : "http://via.placeholder.com/150x180"}></CardTitle>}
  actions={[<a href='#'>Buy it Now!</a>]}>
  <span>{name}</span>
<span className="price">${price}</span>
  <span>{department}</span>
      </Card>
      </div>
    );
  }
}

export default ProductCard;

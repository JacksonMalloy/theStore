import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../Context';
import ParticleBG from './Particles';

export default class Productlist extends Component {
  render() {
    return (
      <>
        <div className='py-5'>
          <ParticleBG />
          <div className='container'>
            <Title />
            <div className='row'>
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

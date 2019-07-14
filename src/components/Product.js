import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className='col-11 mx-auto col-md-6 col-lg-3 my-3'>
        <div className='card'>
          <ProductConsumer>
            {value => (
              <div
                className='img-container p-5'
                onClick={() => value.handleDetail(id)}
              >
                <Link to='/details'>
                  <img src={img} alt='product' className='card-img-top' />
                </Link>

                {/* Button Logic for when we add to cart */}
                <button
                  className='cart-btn'
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className='text-capitalize mb-0' disabled>
                      {' '}
                      in Cart
                    </p>
                  ) : (
                    <i className='fas fa-cart-plus' />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>

          {/* Card Footer */}
          <div className='card-footer d-flex justify-content-between'>
            <p className='align-self-center mb-0'> {title} </p>
            <h5 className='text-blue font-italic mb-0'>
              <span className='mr-1'>$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

//Proptypes ensure that the data in data.js is correct, if incorrect we will see an error in console specifying where the error is.
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    transition: all 0.2s linear;
    box-shadow: 0px 0px 5px 1px var(--mainDark);
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.2s linear;
  }

  &:hover {
    .card {
      box-shadow: 0px 0px 15px 2px var(--mainYellow);
    }
    .card-footer {
      background: #f5f5f5;
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 0.2s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainDark);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.2s linear;
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }

  .cart-btn:hover {
    color: var(--mainWhite);
    background: var(--mainDark);
    cursor: pointer;
  }
`;

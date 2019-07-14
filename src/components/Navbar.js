import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              the store
            </Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <span className='mr-2'>
              <i className='fas fa-cart-plus' />
              my cart
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

//CSS Wrapper for the Navigation
const NavWrapper = styled.nav`
  background: var(--mainWhite);
  box-shadow: 0px 0px 5px 2px var(--mainDark);
  .nav-link {
    color: var(--mainDark) !important;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 900;
  }
`;

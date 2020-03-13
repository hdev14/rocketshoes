import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FiShoppingCart } from 'react-icons/fi';

import { Navbar, Cart } from './styles';

import logo from '../../assets/imgs/logo.svg';

function Header({ quantityOfProducts }) {
  return (
    <Navbar>
      <Link to="/">
        <img src={logo} alt="ShopShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <h5>Meu carrinho</h5>
          <span>
            {quantityOfProducts}
            {' '}
            itens
          </span>
        </div>
        <FiShoppingCart color="#FFF" size={36} />
      </Cart>
    </Navbar>
  );
}

Header.propTypes = {
  quantityOfProducts: PropTypes.number.isRequired,
};

export default connect((state) => ({
  quantityOfProducts: state.cart.length,
}))(Header);

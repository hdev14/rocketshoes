import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

import { Navbar, Cart } from './styles';

import logo from '../../assets/imgs/logo.svg';

export default function Header() {
  return (
    <Navbar>
      <Link to="/">
        <img src={logo} alt="ShopShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <h5>Meu carrinho</h5>
          <span>3 itens</span>
        </div>
        <FiShoppingCart color="#FFF" size={36} />
      </Cart>
    </Navbar>
  );
}

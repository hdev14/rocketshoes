import React, { Component } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import { ProductList } from './styles';

export default class Home extends Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map((product) => (
          <li>
            <img src={product.image} alt={product.title} />
            <div>
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
            </div>
            <button type="button">
              <div>
                <FiShoppingCart color="#fff" size={20} />
                {' '}
                3
              </div>
              <span>ADICIONAR NO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

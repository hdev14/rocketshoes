import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FiShoppingCart } from 'react-icons/fi';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import { ProductList } from './styles';

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

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

  handleAddProduct = (product) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'ADD_TO_CART',
      product,
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
            <button type="button" onClick={() => this.handleAddProduct(product)}>
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

export default connect()(Home);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { FiShoppingCart } from 'react-icons/fi';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList, Loading } from './styles';

class Home extends Component {
  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.number.isRequired,
  }

  state = {
    products: [],
    loading: true,
  }

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
      loading: false,
    });
  }

  handleAddProduct = (id) => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  }

  render() {
    const { products, loading } = this.state;
    const { amount } = this.props;

    return (
      <>
        {loading ? (
          <Loading id="laoding" color="#666" size={90} />
        ) : (
          <ProductList>
            {products.map((product) => (
              <li>
                <img src={product.image} alt={product.title} />
                <div>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </div>
                <button type="button" onClick={() => this.handleAddProduct(product.id)}>
                  <div>
                    <FiShoppingCart color="#fff" size={20} />
                    {' '}
                    {amount[product.id] || 0}
                  </div>
                  <span>ADICIONAR NO CARRINHO</span>
                </button>
              </li>
            ))}
          </ProductList>
        )}
      </>
    );
  }
}

const mapStateProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchProps = (dispatch) => bindActionCreators(CartActions, dispatch);

export default connect(mapStateProps, mapDispatchProps)(Home);

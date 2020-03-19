import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { FiShoppingCart } from 'react-icons/fi';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList, Loading } from './styles';

function Home({ addToCartRequest, amount }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
      setLoading(false);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    addToCartRequest(id);
  }

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
              <button type="button" onClick={() => handleAddProduct(product.id)}>
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

Home.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
};

const mapStateProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchProps = (dispatch) => bindActionCreators(CartActions, dispatch);

export default connect(mapStateProps, mapDispatchProps)(Home);

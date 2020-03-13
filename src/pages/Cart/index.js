import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  FiPlusSquare, FiMinusSquare, FiTrash2, FiChevronRight,
} from 'react-icons/fi';

import * as CartActions from '../../store/modules/cart/actions';

import { Product, ProductTable, Total } from './styles';

function Cart({ cart, removeFromCart, updateAmount }) {
  function incrementAmount(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrementAmount(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Product>
      <ProductTable>
        <thead>
          <th label="img-product" />
          <th>produto</th>
          <th>qtd</th>
          <th>subtotal</th>
          <th label="#" />
        </thead>
        <tbody>

          {cart.map((product) => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrementAmount(product)}>
                    <FiMinusSquare size={20} />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => incrementAmount(product)}>
                    <FiPlusSquare size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$ 120,00</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <FiTrash2 color="#fff" size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <Total>
          <strong>total</strong>
          <span>R$ 120,00 </span>
        </Total>
        <button type="button">
          Finalizar compra
          {' '}
          <FiChevronRight color="#fff" size={20} />
        </button>
      </footer>
    </Product>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmount: PropTypes.func.isRequired,
};

const mapStateProps = (state) => ({
  cart: state.cart,
});

const mapDispatchProps = (dispatch) => bindActionCreators(CartActions, dispatch);

export default connect(mapStateProps, mapDispatchProps)(Cart);

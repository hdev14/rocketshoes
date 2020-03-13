import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  FiPlusSquare, FiMinusSquare, FiTrash2, FiChevronRight,
} from 'react-icons/fi';

import { Product, ProductTable, Total } from './styles';

function Cart({ cart }) {
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
                  <button type="button">
                    <FiMinusSquare size={20} />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <FiPlusSquare size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$ 120,00</strong>
              </td>
              <td>
                <button type="button">
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
};

const mapStateProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateProps)(Cart);

import React from 'react';
import {
  FiPlusSquare, FiMinusSquare, FiTrash2, FiChevronRight,
} from 'react-icons/fi';

import { Product, ProductTable, Total } from './styles';

export default function Cart() {
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
          <td>
            <img src="data:image/jpeg;base64,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" alt="Tênis" />
          </td>
          <td>
            <strong>Tênis</strong>
            <span>R$ 120,00</span>
          </td>
          <td>
            <div>
              <button type="button">
                <FiMinusSquare size={20} />
              </button>
              <input type="number" readOnly value={1} />
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

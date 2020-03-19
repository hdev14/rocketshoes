import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import { addToCartRequest } from '../../store/modules/cart/actions';

import { ProductList, Loading } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const amount = useSelector((state) => state.cart.reduce((amountSum, product) => {
    amountSum[product.id] = product.amount;
    return amountSum;
  }, {}));

  const dispatch = useDispatch();

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
    dispatch(addToCartRequest(id));
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

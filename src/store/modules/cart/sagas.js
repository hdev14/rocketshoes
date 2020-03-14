import {
  call, put, all, takeLatest, select,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { formatPrice } from '../../../utils/format';
import api from '../../../services/api';
import history from '../../../services/history';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select((state) => state.cart.find((p) => p.id === id));

  if (!productExists) {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
    history.push('/cart');
    return;
  }

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  const amount = productExists.amount + 1;
  if (amount > stockAmount) {
    toast.error('Quantidade indisponível no estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

function* updateAmount({ id, amount }) {
  if (amount < 1) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Quantidade indisponível no estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_PRODUCT_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);

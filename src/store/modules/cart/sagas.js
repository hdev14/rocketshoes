import {
  call, put, all, takeLatest, select,
} from 'redux-saga/effects';

import { formatPrice } from '../../../utils/format';
import api from '../../../services/api';
import { addToCartSuccess, updateAmount } from './actions';

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
    return;
  }

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  const amount = productExists.amount + 1;
  if (amount > stockAmount) {
    return;
  }

  yield put(updateAmount(id, amount));
}

export default all([
  takeLatest('@cart/ADD_PRODUCT_REQUEST', addToCart),
]);

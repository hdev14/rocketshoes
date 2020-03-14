export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_PRODUCT_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_PRODUCT_SUCCESS',
    product,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE_PRODUCT',
    id,
  };
}

export function addToCart(product) {
  return {
    type: '@cart/ADD_PRODUCT',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE_PRODUCT',
    id,
  };
}

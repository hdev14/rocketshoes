import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_PRODUCT_SUCCESS':
      return produce(state, (draftState) => {
        const { product } = action;
        draftState.push(product);
      });

    case '@cart/REMOVE_PRODUCT':
      return produce(state, (draftState) => {
        const productIndex = draftState.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draftState.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, (draftState) => {
        const productIndex = draftState.findIndex((p) => p.id === action.id);
        if (productIndex >= 0) {
          draftState[productIndex].amount = action.amount;
        }
      });
    }
    default:
      return state;
  }
}

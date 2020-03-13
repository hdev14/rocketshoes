import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_PRODUCT':
      return produce(state, (draftState) => {
        const productIndex = draftState.findIndex((p) => p.id === action.product.id);

        if (productIndex >= 0) {
          draftState[productIndex].amount += 1;
        } else {
          draftState.push({
            ...action.product,
            amount: 1,
          });
        }
      });

    case '@cart/REMOVE_PRODUCT':
      return produce(state, (draftState) => {
        const productIndex = draftState.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draftState.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) return state;

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

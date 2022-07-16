import { ActionTypes } from "../constants/actions-types";
const initialState = {
  products: [],
};
export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state , products:payload
      }

    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return {
        ...state,
        ...payload,
      };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {};

    default:
      return state;
  }
};

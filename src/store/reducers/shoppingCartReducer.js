import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
} from "../actions/shoppingCartActions";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  payment: JSON.parse(localStorage.getItem("payment")) || {},
  address: JSON.parse(localStorage.getItem("address")) || {},
};

export default function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      localStorage.setItem("cart", JSON.stringify(action.payload));
      return {
        ...state,
        cart: action.payload,
      };

    case SET_PAYMENT:
      localStorage.setItem("payment", JSON.stringify(action.payload));
      return {
        ...state,
        payment: action.payload,
      };

    case SET_ADDRESS:
      localStorage.setItem("address", JSON.stringify(action.payload));
      return {
        ...state,
        address: action.payload,
      };

    default:
      return state;
  }
}
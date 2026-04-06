export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});

export const addToCart = (product) => {
  return function (dispatch, getState) {
    const cart = getState().shoppingCart.cart;
    const existingProduct = cart.find(
      (cartItem) => String(cartItem.product.id) === String(product.id),
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map((cartItem) =>
        String(cartItem.product.id) === String(product.id)
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem,
      );
    } else {
      updatedCart = [...cart, { count: 1, checked: true, product }];
    }
    dispatch(setCart(updatedCart));
  };
};

export const updateCartItemCount = (productId, type) => {
  return (dispatch, getState) => {
    const cart = getState().shoppingCart.cart;
    const newCart = cart.map((item) => {
      if (item.product.id !== productId) return item;
      let newCount = item.count;

      if (type === "increase") newCount += 1;
      if (type === "decrease") newCount = Math.max(1, newCount - 1);

      return {
        ...item,
        count: newCount,
      };
    });
    dispatch(setCart(newCart));
  };
};

export const removeFromCart = (productId) => {
  return (dispatch, getState) => {
    const cart = getState().shoppingCart.cart;
    const newCart = cart.filter(
      (item) => String(item.product.id) !== String(productId),
    );
    dispatch(setCart(newCart));
  };
};

export const toggleCartItemChecked = (productId) => {
  return (dispatch, getState) => {
    const cart = getState().shoppingCart.cart;
    const newCart = cart.map((item) =>
      String(item.product.id) === String(productId)
        ? { ...item, checked: !item.checked }
        : item,
    );
    dispatch(setCart(newCart));
  };
};

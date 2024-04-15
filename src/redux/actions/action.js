export const ADD_TO_CART = 'ADD_TO_CART';

export const REMOVE_TO_CART = 'REMOVE_FROM_CART';
// export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const SEARCH_BOOKS_REQUEST = 'SEARCH_BOOKS_REQUEST';
export const SEARCH_BOOKS_SUCCESS = 'SEARCH_BOOKS_SUCCESS';
export const SEARCH_BOOKS_FAILURE = 'SEARCH_BOOKS_FAILURE';
export const CART_DECREMENT = 'CART_DECREMENT';
export const CART_INCREMENT = 'CART_INCREMENT';
export const CLEAR_CART = 'CLEAR_CART';
export const SET_CART = 'SET_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';

export const addToCart = (item, userId) => ({
  type: ADD_TO_CART,
  payload: item, userId
});

export const removeFromCart=(id, userId)=>{
  return{
      type :"REMOVE_TO_CART",
      payload:id, userId
  }
}

export const incrementCartItem = ( quantity) => {
  return {
    type: "CART_INCREMENT",
    payload:  quantity
  };
};


export const decrementCartItem = ( quantity) => {
  return {
    type: "CART_DECREMENT",
    payload: quantity
  };
};

export const updateCartQuantity = (item, quantity, userId) => ({
  type: "UPDATE_CART_QUANTITY",
  payload: item, userId, quantity
});

export const updateTotalItems = (total) => {
  return {
      type: 'UPDATE_TOTAL_ITEMS',
      payload: total
  };
};
export const clearCart = () => ({
  type: CLEAR_CART
});

export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart
});
export const searchBooksRequest = () => ({
  type: SEARCH_BOOKS_REQUEST,
});


export const searchBooksSuccess = (results) => ({
  type: SEARCH_BOOKS_SUCCESS,
  payload: results,
});


export const searchBooksFailure = (error) => ({
  type: SEARCH_BOOKS_FAILURE,
  payload: error,
});



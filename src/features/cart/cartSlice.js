import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload.pizzaId
      );

      if (pizza) {
        pizza.quantity++;
        pizza.totalPrice = pizza.quantity * pizza.unitPrice;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeItem(state, action) {
      // payload = pizzaId;
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload
      );
    },
    increaseItem(state, action) {
      const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItem(state, action) {
      const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.removeItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, removeItem, increaseItem, decreaseItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

export const getTotalPizzas = (state) => {
  return state.cart.cart.reduce((sum, pizza) => {
    return sum + pizza.quantity;
  }, 0);
};
export const getTotalPrice = (state) => {
  return state.cart.cart.reduce((p, c) => {
    return p + c.totalPrice;
  }, 0);
};

export const getCart = (state) => {
  return state.cart.cart;
};

export const getItemInCartById = (id) => (state) => {
  return state.cart.cart.find((pizza) => pizza.pizzaId === id)?.quantity ?? 0;
};

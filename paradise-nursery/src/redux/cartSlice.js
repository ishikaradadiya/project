import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(p => p.id === item.id);
      if (!existing) {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(p => p.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(p => p.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(p => p.id !== action.payload);
    }
  }
});

export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;

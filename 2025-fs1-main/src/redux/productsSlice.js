import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
  ],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.findIndex(
        (p) => p.id === action.payload.id
      );
      state[index] = action.payload;
    },
    removeProduct: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addProduct, updateProduct, removeProduct } =
  productsSlice.actions;

export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const loadProductsFromLocalStorage = () => {
  try {
    const serializedProducts = localStorage.getItem("products");
    if (serializedProducts === null) {
      return [];
    }
    return JSON.parse(serializedProducts);
  } catch (error) {
    console.error("Erro ao carregar produtos do localStorage:", error);
    return [];
  }
};

const saveProductsToLocalStorage = (products) => {
  try {
    const serializedProducts = JSON.stringify(products);
    localStorage.setItem("products", serializedProducts);
  } catch (error) {
    console.error("Erro ao salvar produtos no localStorage:", error);
  }
};

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: loadProductsFromLocalStorage(),
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
      saveProductsToLocalStorage(state.items);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
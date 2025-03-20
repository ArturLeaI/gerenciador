import { configureStore } from '@reduxjs/toolkit';
import clientsReducer from './clienteSlice';
import productReducer from './productSlice';
import pedidoReducer from './pedidoSlice';

export default configureStore({
  reducer: {
    clients: clientsReducer,
    products: productReducer,
    pedidos: pedidoReducer,
  }
});
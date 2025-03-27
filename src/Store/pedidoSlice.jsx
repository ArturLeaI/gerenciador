import { createSlice } from '@reduxjs/toolkit';

const loadPedidos = () => {
  const saved = localStorage.getItem('pedidos');
  return saved ? JSON.parse(saved) : [];
};

const initialState = {
  pedidos: loadPedidos(),
};

const pedidoSlice = createSlice({
  name: 'pedidos', 
  initialState, 
  reducers: {

    adicionarPedido: (state, action) => {
      state.pedidos.push(action.payload);
      
      localStorage.setItem('pedidos', JSON.stringify(state.pedidos));
    },
  },
});

export const { adicionarPedido } = pedidoSlice.actions;

export default pedidoSlice.reducer;
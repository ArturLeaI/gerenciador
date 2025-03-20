import { createSlice } from '@reduxjs/toolkit';

// Função para carregar pedidos do localStorage
const loadPedidos = () => {
  const saved = localStorage.getItem('pedidos');
  return saved ? JSON.parse(saved) : [];
};

// Estado inicial carregado do localStorage
const initialState = {
  pedidos: loadPedidos(),
};

// Cria a slice de pedidos
const pedidoSlice = createSlice({
  name: 'pedidos', // Nome da slice
  initialState, // Estado inicial
  reducers: {
    // Action para adicionar um pedido
    adicionarPedido: (state, action) => {
      state.pedidos.push(action.payload); // Adiciona o novo pedido à lista
      // Salva no localStorage
      localStorage.setItem('pedidos', JSON.stringify(state.pedidos));
    },
  },
});

// Exporta as actions
export const { adicionarPedido } = pedidoSlice.actions;

// Exporta o reducer
export default pedidoSlice.reducer;
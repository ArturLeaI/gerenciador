import { createSlice } from '@reduxjs/toolkit';

// Carrega clientes do localStorage
const loadClients = () => {
  const saved = localStorage.getItem('clients');
  return saved ? JSON.parse(saved) : [];
};

const initialState = {
  clients: loadClients()
};

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    addClient: (state, action) => {
      state.clients.push(action.payload);
      localStorage.setItem('clients', JSON.stringify(state.clients));
    }
  }
});

export const { addClient } = clientsSlice.actions;
export default clientsSlice.reducer;
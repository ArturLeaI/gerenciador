// hooks/useCep.js
import { useCallback } from 'react';

export const useCep = (setValue) => {
  return useCallback(async (cep) => {
    if (cep?.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (!data.erro) {
          setValue('estado', data.uf, { shouldValidate: true });
          setValue('cidade', data.localidade, { shouldValidate: true });
          setValue('bairro', data.bairro, { shouldValidate: true });
          setValue('endereco', data.logradouro, { shouldValidate: true });
        }
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    }
  }, [setValue]);
};
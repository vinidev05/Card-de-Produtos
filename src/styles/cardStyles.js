import styled from 'styled-components'

export const Card = styled.div`
  width: 280px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #fff;
`;

export const NomeProduto = styled.h2`
  font-size: 18px;
  margin: 0;
`;

export const Preco = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const Botao = styled.button`
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background-color: ${({ adicionado }) =>
    adicionado ? '#198754' : '#6c757d'};

  transition: 0.3s;

  &:hover {
    opacity: 0.85;
  }
`;
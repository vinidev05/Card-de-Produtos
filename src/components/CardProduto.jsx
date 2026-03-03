import { useState } from 'react'
import { Card, NomeProduto, Preco, Botao } from '../styles/cardStyles'

export default function CardProduto({ nome, preco, adicionado }) {
  const [isAdicionado, setIsAdicionado] = useState(adicionado)

  return (
    <Card>
      <NomeProduto>{nome}</NomeProduto>
      <Preco>{preco}</Preco>

      <Botao
        adicionado={isAdicionado}
        onClick={() => setIsAdicionado(!isAdicionado)}
      >
        {isAdicionado ? 'Adicionado' : 'Adicionar ao carrinho'}
      </Botao>
    </Card>
  )
}
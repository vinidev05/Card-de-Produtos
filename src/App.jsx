import CardProduto from './components/CardProduto'

export default function App() {
  return (
    <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
      <CardProduto 
        nome="Tênis Esportivo"
        preco="R$ 199,90"
        adicionado={false}
      />
    </div>
  )
}
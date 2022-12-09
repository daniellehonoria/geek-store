import Itens from '../../assets/Itens.json'
import CardProdutos from '../../components/CardProdutos/CardProdutos'
import { Main } from './Produtos_styled'
import produtos from '../../assets/produtos.png'
const Produtos = (props) => {

  const { addToCart,
    filterText,
    minPrice,
    maxPrice,
    organizerParameter,
  order } = props


  return (
    <Main>
      <section>
        <h1>PRODUTOS</h1>
        {
          Itens
            .sort((previousItem, nextItem) => {
              if(organizerParameter === 'preço'){
                return previousItem.preço - nextItem.preço
              }else{
             return previousItem.name.localeCompare(nextItem.name)
              }
           })        
           .sort(()=>{
            return order === 'cresc'?  1 :  -1
          })
            .filter((item) =>
              item.preço >= minPrice)
            .filter((item) =>
              item.preço <= maxPrice)
            .filter((item) =>
              item.name.toLowerCase().includes(filterText.toLowerCase()))
            .map((item) => (
              <CardProdutos
                item={item}
                key={item.id}
                addToCart={addToCart}
                isOnProdutos={true}
                minPrice={minPrice}
                maxPrice={maxPrice}
              />

            ))
        }
      </section>

    </Main>
  )
}

export default Produtos;
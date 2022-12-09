import { useState } from 'react';
import Produtos from './screens/Produtos/Produtos'
import Cart from './screens/Cart/Cart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
function App() {

  const [activeScreen, setActiveScreen] = useState('Produtos')
  const renderScreen = () => {
    switch (activeScreen) {
      case 'Produtos':
        return <Produtos 
        addToCart={addToCart} 
        filterText={filterText}
        minPrice={minPrice}
        onChangeMinPrice={onChangeMinPrice}
        maxPrice={maxPrice}
        onChangeMaxPrice={onChangeMaxPrice}
        order={order}
        onChangeOrder={onChangeOrder}
        organizerParameter={organizerParameter}
        onChangeOrganizerParameter={onChangeOrganizerParameter}
        />
      case 'Cart':
        return <Cart 
        cart={cart}
        adcQuantityInCart={adcQuantityInCart}
        removeQuantityInCart={removeQuantityInCart}
        deleteFromCart={deleteFromCart}
        />
      default:
        return <div>Tela inexistente</div>
    }
  }  

//==================================================================================================
//            FUNÇÃO QUE ADICIONA ITEM NO CART
  const [cart, setCart] = useState([])

  const addToCart = (productToAdd) => {
    const newCart=[...cart] 

    //productSearch recebe newCart e compara se o produto no carrinho é igual ao produto adicionado
    const productSearch= newCart.find((productInCart)=>productInCart.id===productToAdd.id)

    //se ñ encontrar productSearch, adiciona o produto com quantidade 1 no carrinho
    if (!productSearch){
      const newProduct = {...productToAdd, quantity:1}
        newCart.push(newProduct)
    }else{
      productSearch.quantity++
    }

    setCart(newCart)    //saindo do if, newCart é o novo valor do cart

  }
//==================================================================================================

//            FUNÇÃO QUE AUMENTA A QUANTIDADE EM 1 NO CLIQUE DE +
const adcQuantityInCart = (itemAdc)=>{
  const newCart = [...cart]

  const productSearch= newCart.find((productInCart)=>productInCart.id===itemAdc.id)
  if (!productSearch) {
    const newProduct = {...itemAdc, quantity: 1}
    newCart.push(newProduct)
} else {
    productSearch.quantity++
}
  setCart(newCart)
}

//            FUNÇÃO QUE DIMINUI A QUANTIDADE EM 1 NO  CLIQUE DE -

const removeQuantityInCart = (itemRemove)=>{
  const newCart = [...cart]
  const productSearch= newCart.find((productInCart)=>productInCart.id===itemRemove.id)
  productSearch.quantity--
  setCart(newCart)
}
//==================================================================================================

const deleteFromCart = (deleteItem)=>{
  const newCart = [...cart]
  const productDelete= newCart.findIndex((productInCart)=>productInCart.id===deleteItem.id)
newCart.splice(productDelete, 1)
setCart(newCart)

}
//estado que controla o input de busca
const [filterText, setFilterText]=useState('')
const onChangeFilterText =(event)=>{
  setFilterText(event.target.value)
}

//estados q controlam input de preço
const [minPrice, setMinPrice] = useState('')
const onChangeMinPrice =(event)=>{
  setMinPrice(event.target.value)
}
const [maxPrice, setMaxPrice] = useState(Infinity)
const onChangeMaxPrice =(event)=>{
  setMaxPrice(event.target.value)
}
//estados q filtros de ordenação

const [organizerParameter, setOrganizerParameter] = useState('name')
const onChangeOrganizerParameter =(event)=>{
  setOrganizerParameter(event.target.value)
}
const [order, setOrder] =useState('desc')
const onChangeOrder=(event)=>{
  setOrder(event.target.value)
}

const pagProdutos = () => {setActiveScreen('Produtos')}
  const pagCarrinho = () => {setActiveScreen('Cart')}

  return (
    <>
      <Header
      //controla botoes q direcionam pras pags de carrinho e produtos
        pagProdutos={pagProdutos}
        pagCarrinho={pagCarrinho}

      //mostra quantos itens tem no carrinho
        itensCart={cart.length}
      //filtra pelo nome digitado no input
        filterText={filterText}
        onChangeFilterText={onChangeFilterText}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        onChangeMinPrice={onChangeMinPrice}

        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        onChangeMaxPrice={onChangeMaxPrice}

        order={order}
        setOrder={setOrder}
        onChangeOrder={onChangeOrder}

        organizerParameter={organizerParameter}
        onChangeOrganizerParameter={onChangeOrganizerParameter}
        />

 
      <Footer>
        </Footer>
      {renderScreen()}


    </>

    
  );
}

export default App;

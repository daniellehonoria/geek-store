import Cart_styled from "./Cart_styled"
import CardProdutos from '../../components/CardProdutos/CardProdutos'

const Cart = (props) => {
  const { cart,
    removeQuantityInCart,
    adcQuantityInCart,
    deleteFromCart } = props

  const total = () => {
    let totalValor = 0

    for (let item of cart) {
      totalValor += item.preço * item.quantity
    }
    return totalValor
  }

  return (
    <Cart_styled>
      <section >

        <h1>Carrinho
        </h1>
        {
          cart.map((item) => (
            <CardProdutos
              item={item}
              key={item.id}
              isOnCart={true}
              adcQuantityInCart={adcQuantityInCart}
              removeQuantityInCart={removeQuantityInCart}
              deleteFromCart={deleteFromCart}
            />
          ))
        }
        <h1 className="total">Total = {total()}</h1>
      </section>

    </Cart_styled>
  )
}
export default Cart
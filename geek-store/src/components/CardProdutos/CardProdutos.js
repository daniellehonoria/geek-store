import CardProdutosContainer from "./CardProdutos_styled";
import comprar from '../../assets/comprar.png'
const CardProdutos = (props) => {

    const { 
        item,
        addToCart,
        isOnCart,
        isOnProdutos,
        removeQuantityInCart,
        adcQuantityInCart,
        deleteFromCart
    } = props

    return (
        <CardProdutosContainer>
            <div >
                <img src={item.image} alt={item.alt} />

                <div className="card-header">
                    <div>
                        <h2>{item.name}</h2>
                    </div>
                </div>
                <div className="card-preco-adc">
                    <span>R${item.preço},00</span>

                    { isOnCart && item.quantity > 1
                        && <button className='cartButton'onClick={() => removeQuantityInCart(item)}>-</button>}
                    {isOnCart &&
                        <span>Qtd:{item.quantity}</span>}
                    {isOnCart
                        && <button className='cartButton' onClick={() => adcQuantityInCart(item)}>+</button>}
                    {isOnProdutos &&
                      <button className="comprarButton" onClick={() => addToCart(item) }>COMPRAR</button>
                        /* funcionalidades do botao elevadas para app, pois componentes carrinho e header vão usar essas funcionalidade */}
                    {isOnCart
                        && <button onClick={()=>deleteFromCart(item)} className="button-delete-item">x</button>}

                </div>
            </div>
        </CardProdutosContainer>
    )}
export default CardProdutos;
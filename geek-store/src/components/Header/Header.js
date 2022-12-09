import { HeaderContainer } from './Header_styled'
import cartIcon from '../../assets/cart.png'
import searchIcon from '../../assets/search.png'
import logoIcon from '../../assets/logo.png'
import orderIcon from '../../assets/order.png'
import preco from '../../assets/preco.png'

const Header = (props) => {
    const {
        pagCarrinho,
        pagProdutos,
        itensCart,
        filterText,
        onChangeFilterText,
        minPrice,
        onChangeMinPrice,
        maxPrice,
        onChangeMaxPrice,
        organizerParameter,
        onChangeOrganizerParameter,
        order,
        onChangeOrder

    } = props
    return (
        <HeaderContainer>
            <a><button onClick={pagProdutos}>
                <img  className='logoIcon'src={logoIcon} alt="Logo icon" />
            </button></a>
            <div>

            </div>
            <div className='precoContainer'> 
            <img className='precoIcon'src={preco} alt="Preço icon" />

                <input className='price-input' type="number"
                    placeholder='Mínimo'
                    value={minPrice}
                    onChange={onChangeMinPrice} />

                <input className='price-input' type="number"
                    placeholder='Máximo'
                    value={maxPrice}
                    onChange={onChangeMaxPrice} />

            </div>
            <div className='searchContainer'>
                <img src={searchIcon} className='search-icon' alt="Search icon" />

                <input name ='name'className='searchInput'
                    placeholder='Digite para pesquisar'
                    value={filterText}
                    onChange={onChangeFilterText}
                />
            </div>
            <span className='searchContainer'>
                <img src={orderIcon} className='order-icon' alt='order icon' />

                <select className='selectInput'
                    value={organizerParameter}
                    onChange={onChangeOrganizerParameter}
                >
                    <option value="name">Nome</option>
                    <option value="preço">Preço</option>

                </select>

                <select className='selectInput'
                    value={order}
                    onChange={onChangeOrder}
                >
                    <option value="cresc">Crescente</option>
                    <option value="desc">Decrescente</option>

                </select>
            </span>

            <div>
                <button onClick={pagCarrinho} className='cart-btn'>
                    <img className='cartImg' src={cartIcon} alt="Cart icon" />
                    {
                        <span className='cart-qtd-itens'>{itensCart && itensCart}</span>
                    }
                </button>
            </div>

        </HeaderContainer>
    )
}

export default Header
import styled from 'styled-components'


export  const HeaderContainer = styled.header`
display: flex;
justify-content:space-around;
	height: fit-content;
  align-items: flex-end;
	padding: auto;
	margin: 40px 0 0 0;
  color: blue;
  

.cart-qtd-itens{
    position: absolute;
    top: 0;
    right: 2%;
    width: 20px;
    height: 20px;
    color: black;
    border-radius: 30%;
    background-color:black;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size:x-large;
    font-family:'cart' ;
    font-weight: 700;
    color: #e134eb;
    text-shadow: 0.1em 0em #21ef80;


  }
  @font-face {
  font-family:'cart' ;
  src: url('Disket-Mono-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style:normal;
    }
  .cart-btn{
    position: relative;
  }

  .searchContainer{
    display: flex;
    justify-content:space-around;
    height: 80px;
    flex-direction: column;

  }
  .precoContainer{
    display: flex;
    flex-direction: column;
  }
.precoIcon{
  height: 30px;
  :hover{
        -webkit-transform: scale(1.1);
   transform: scale(1.1);
    }
}
  .search-icon {
  height: 20px;
  :hover{
        -webkit-transform: scale(1.1);
   transform: scale(1.1);
    }
}
.order-icon{
  height: 20px;
  :hover{
        -webkit-transform: scale(1.1);
   transform: scale(1.1);
    }

}
.cartImg .logoIcon{
  height: 5rem;
}

.price-input{
  width: 100%;
  border: 0;
  border-bottom: 2px solid gray;
  background-color:transparent;
  color: gray;
  font-family:'cart' ;


}
.selectInput{
  width: 100%;
  border: 0;
  border-bottom: 2px solid gray;
  background-color:transparent;
  color: gray;
  font-family:'cart' ;

}
.searchInput{
  width: 20rem;
  border: 0;
  border-bottom: 2px solid gray;
  background-color:transparent;
  color: gray;
  font-family:'cart' ;

}
button{
  background-color:transparent;
  border: none;
  margin: 0 40px ;
  

  img{
    height: 60px;
    :hover{
        -webkit-transform: scale(1.1);
   transform: scale(1.1);
    }
  }
  

 :hover{
  border:outset;
  cursor: pointer;
  filter: brightness(1.0);


}

  :active{
    filter: brightness(0.85);

  }
 
}

`
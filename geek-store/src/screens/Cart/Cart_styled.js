import styled from "styled-components";


const Cart_styled =styled.main`


    align-items: center;
    color: white;
    font-family: cart;
    font-size: 2em;
    display: flex;
    margin:  20px;
    align-items:center;
    border-radius: 10px;
    position: relative;//posição relativa em relação ao botao
    padding:4px;
    justify-content: space-around;
    position: fixed;
    width: 95%;

    @font-face {
  font-family:'cart' ;
  src: url('Disket-Mono-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style:normal;
    }
    .total{
      color: white;
      margin: 0px 2px 2px 100px;
    }
    section{
        display: flex;
        flex-direction: row;
        margin:auto;
        flex-wrap: wrap;//quebra linha quando chega ao fim da pag
        max-width: 100rem;
        max-height: 30rem;
        justify-content: space-around;
        border:4px solid #3d34eb;
        border-radius: 10px;
        margin: 0 ;
        width: 95%;
        

        h1{
          width:100%;
          margin:26px;
          text-align: center; 
          text-shadow: 0.1em 0em #21ef80;
     
        }

    }

`

export default Cart_styled
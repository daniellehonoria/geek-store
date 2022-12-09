import styled from "styled-components";

const CardProdutosContainer = styled.article`
display: flex;
margin: 8px 10px 20px 0;
align-items:center;
border-radius: 10px;
overflow: hidden;//esconde o que passa da borda
position: relative;//posição relativa em relação ao botao
color:black;
font-family:'cart' ;
font-size: 1rem;
background-color: white;
border: #4CAF50 2px solid;


@font-face {
  font-family:'cart' ;
  src: url('Disket-Mono-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style:normal;
    }

>div{
    justify-content: space-around;
    align-items: center;
    margin: 0 0 0 0;
    align-items: center;
    

    
}
.cartButton{
    border: none;
    color: #4CAF50;
    background-color: white;
    font-size: 1.5rem;
}
.card-header{
    align-items: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
}
.card-preco-adc{
    display: flex;
    justify-content: space-around;
    align-items: center;

}
button{
    padding:4px;
    align-items: center;
    :hover{
        cursor: pointer;
    }
    

    
}
img{
    align-items: center;
      width: 16ch;
      height: auto;
      :hover{
        -webkit-transform: scale(1.1);
   transform: scale(1.1);

    }

    }
.button-delete-item{
    position: absolute;
    top:0;
    right: 0;
    border: none;
    color: #4CAF50;
    background-color: white;
    font-size: 1.5rem;
}
.comprarButton{
    color: black;
    border: 1px solid #e134eb;   
    border-radius: 10%;
    font-family:'cart' ;
    font-size: 1rem;
    width: 48%;
    height: auto;
    align-items:center;



    :hover{
        -webkit-transform: scale(1.1);
   transform: scale(1.1);
    }

}


`

export default CardProdutosContainer;
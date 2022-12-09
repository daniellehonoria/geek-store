import styled from "styled-components"

export const Main = styled.main`
margin:3% 0;
align-items: center;
border: #21ef80 solid 4px;
    border-radius: 10px;

@font-face {
  font-family:'gothic' ;
  src: url('Disket-Mono-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style:normal
}
section{
    display: flex;//coloca produtos ao lado
    margin:auto;
    flex-wrap: wrap;//quebra linha quando chega ao fim da pag
    max-width: 2200px;
    justify-content: space-around;
    flex-direction: row;
    border-radius: 10px;



    h1{
      width:100%;
      margin:26px;
      text-align: center;   
      font-family: gothic;
      color: white;
      font-size: 4em;
     text-shadow: 0.1em 0em #21ef80;


}
    hr{
      margin:10px;
      width:100%;

    }
}

  //flex-direction: column;
  //align-items: center;


`;
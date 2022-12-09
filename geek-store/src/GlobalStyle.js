import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    overflow: hidden;

}
html{
    font-family: sans-serif;
}

#root{
    padding:16px;
    margin:200 500;
}
body{
    width: 100%;
     height:auto;
   background-color:black;
   
}
footer{
    background-image:url('footerStore.png');
    width: 100%;
    height:auto;



}
`
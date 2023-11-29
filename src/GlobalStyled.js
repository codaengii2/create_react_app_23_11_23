import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
 ${reset}

 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body{
    font-family: "Pretendard", sans-serif;
    color: #222;
    
 }

 a{
    text-decoration: none;
    color: #222;
 }

 ul{
    list-style: none;
 }

 h3, p{
    color: #fff;
 }
`;

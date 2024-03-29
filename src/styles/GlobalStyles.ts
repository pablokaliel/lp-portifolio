import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: "Poppins";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
        
    }
    html,#root,body{
        background: ${(props) => props.theme.colors.background};
        width:100vw;
        height:100vh;
    }


`;

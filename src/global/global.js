// 모든 컴포넌트에게 적용되야될 스타일이 정의된 파일 

import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

// 폰트, reset...등등
const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    line-height: 1.3;
  }

  *{
    box-sizing: border-box;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
    letter-spacing: -0.4px;
    line-height: 1.3;
    text-decoration: none;
    color: #131313;
    font-family: 'SpoqaHanSansNeo-Regular' !important;
  }

  button{
    cursor: pointer;
    border: none;
  }
`;

export default GlobalStyle;
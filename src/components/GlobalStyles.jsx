import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap');
    h1 {
        font-size: 100px;
    }
    body {
    font-family: 'Noto Sans KR', 'Noto Serif KR', -apple-system;
    -webkit-font-smoothing: antialiased;
    }
`;

export default GlobalStyles;
// 'Noto Sans KR', 'Noto Serif KR', -apple-system
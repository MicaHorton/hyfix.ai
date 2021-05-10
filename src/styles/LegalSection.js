import styled, { css } from 'styled-components';

export const LegalSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 80vw;
    font-size: 18px;
    line-height: 27px;

    h1 {
        font-size: 30px;
        margin-top: 20px;
    }
    
    h2 {
        font-weight: bold;
    }

    ${props => props.bg === 'dark' && css`
        background-color: #202020;  
    `}


`;

export default LegalSection;

// #030b17
// background-color:  #0d2233
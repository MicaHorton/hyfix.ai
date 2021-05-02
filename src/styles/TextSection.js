import styled, { css } from 'styled-components';

export const TextSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 40px;
        margin-top: -5px;
        margin-bottom: 0;
        padding: 100px;
    }

    ${props => props.bg === 'dark' && css`
        background-color: #202020;  
    `}

    ${props => props.bg === 'light' && css`
        background-color: #4e5154;  
    `}

    ${props => props.bg === 'blue' && css`
        
        background-image: linear-gradient( #0d2233, #081723);
        
        
        p {
            width: 70vw;
            font-size: 30px;
            line-height: 50px;
        }

        
    `}

`;

export default TextSection;

// #030b17
// background-color:  #0d2233
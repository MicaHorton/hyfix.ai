import styled, { css } from 'styled-components';

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${props => props.bg === 'dark' && css`
        background-color: #202020;  
    `}

    ${props => props.bg === 'light' && css`
        background-color: #4e5154;  
    `}

    p {
        font-size: 40px;
        margin-top: -5px;
        margin-bottom: 0;
        padding: 100px;
    }
`;

export default TextSection;
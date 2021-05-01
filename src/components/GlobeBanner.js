import styled from 'styled-components';

export const GlobeBanner = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 0;
    height: auto;

    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: black;
    
    div {
        height: 100px;

    }

    img {
        width: 100%;

    }

    h1 {
        position: absolute;
        font-family: 'Montserrat', sans-serif;
        font-size: 100px;
        font-weight: 600;
        top: 250px;
    }

    h2 {
        position: absolute;

    }

    @media-query (min-width: 1224px) {
        h1 {
            top: 200px;

        }
    }
`;

export default GlobeBanner;
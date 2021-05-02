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
        height: 200px;

    }

    img {
        width: 100%;
        mask-image: linear-gradient(rgba(0, 0, 0, 1.0), yellow);

    }

    h1 {
        position: absolute;
        font-family: 'Montserrat', sans-serif;
        font-size: 100px;
        font-weight: 600;
        top: 350px;
    }

    h2 {
        font-size: 30px;
        font-family: 'Lora';
        font-style: italic;
        color: white;

        width: 50vw;
        position: absolute;
        margin-top: 250px;
        line-height: 40px;

    }

    @media (min-width: 1224px) {
        h1 {
            top: 270px;
        }

        h2 {
            font-size: 40px;
            width: 60vw;
            line-height: 70px;
            margin-top: 600px;
        }
        
    }
`;

export default GlobeBanner;
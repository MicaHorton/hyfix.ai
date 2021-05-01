import styled from 'styled-components';

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 0;
    height: auto;

    align-items: center;
    justify-content: center;
    text-align: center;
 

    img {
        width: 100%;
    }

    h1 {
        position: absolute;
        font-family: 'Montserrat', sans-serif;
        font-size: 100px;
        font-weight: 600;
        margin: 0px;
        color: white;
    }

    @media (min-width: 1224px) {
        text-align: justify;
    }
`;

export default Banner;

/*
.banner-text.tech {
    padding: 100px;
}

.banner-image.tech {
    min-height: 400px;
    object-fit: cover;
}
*/
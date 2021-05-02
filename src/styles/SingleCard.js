import styled from 'styled-components';

const SingleCard = styled.article`
    height: auto;
    padding-bottom: 100px;
    width: 80vw;
    margin-bottom: 75px;

    h1 {
        margin-bottom: 0px;
        color: black;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 50px;
        margin-top: 30px;
        margin-bottom: 20px;
        text-decoration: none;
        font-weight: 700;
    }

    img {
        width: 90%;
        height: 40%;
        object-fit: contain;
    }
`;

export default SingleCard;


/*
.single-page {
    padding-top: 0px;
    position: static;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100%;  
}

.single-article {
    height: auto;
    padding-bottom: 40px;
}
*/

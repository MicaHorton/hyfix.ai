import styled from 'styled-components';

export const FeatureSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #0d2233;
    padding-top: 200px;
    padding-bottom: 200px;

    p {
        font-size: 20px;
        width: 80vw;
        line-height: 30px;
    }

    ul {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100vw;
    }

    @media (min-width: 1224px) {
        p {
            font-size: 30px;
            line-height: 50px;
        }
    }

`



export const FeatureCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    width: 27vw;
    margin: 2vw;
    height: 30vw;

    box-shadow: 10px 10px 10px 5px rgb(7,19,30,0.7);
    background-color: #4e5154;
    border-radius: 20px;

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        color: white;

        width: 10vw;
        display: flex;
        justify-content: center;

        font-size: 25px;
        margin-top: 30px;
        margin-bottom: 40px;
    }

    img {
        width: 10vw;
    }
    
    @media (min-width: 1224px) {
        p {
            text-align: center;
            width: 20vw;
            font-size: 30px;
        }

        img {
            width: 15vw;
        }
        
    }

`
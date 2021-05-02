import styled from 'styled-components';

export const Button = styled.button`
    width: 200px;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    background-color: #553d88;
    color: white;
    border: none;

    font-size: 25px;
    margin-bottom: 100px;
    box-shadow: 15px 15px 20px black;

    margin-left: auto;
    margin-right: auto;

    :hover {
        background-color:#333397;
    }
`;

export default Button;
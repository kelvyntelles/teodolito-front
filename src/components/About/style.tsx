import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    width: 100%;
    height: 96vh;

    h1 {
        padding: 50px 0 0 100px;
        font-size: 70px;
        color: #373A3C;
    }

    .area-texto {
        display: flex;
        justify-content: center;
    }

    .texto {
        border-style: solid;
        border-width: 1px;
        border-color: #EEEEEE;
        margin: 30px;
        padding: 15px 20px 15px 20px;
        max-width: 610px;
        color: #000000;
        font-size: 24px;
        font-family: cursive;
    }
`;
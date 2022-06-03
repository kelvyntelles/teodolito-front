import styled from 'styled-components';

export const ContainerReact = styled.div`
    min-height: 100vh;
    display: block;
    padding-bottom: 10px;

    h1 {
        padding-left: 50px;
        padding-top: 50px;
        font-size: 60px;
        margin-bottom: 40px;
        color: #373A3C;

        @media (max-width: 500px) {
            font-size: 40px;
        }
    }

    .texto {
        padding: 30px;
        min-height: 500px;
        font-size: large;
        margin-bottom: 5px;
    }

    .text-left {
        margin-right: 50px;
    }
`;
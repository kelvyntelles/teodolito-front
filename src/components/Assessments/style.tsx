import styled from 'styled-components';

export const ContainerReact = styled.div`
    height: 100vh;
    background: #0077ae;

    h1 {
        padding-top: 50px;
        padding-left: 100px;
        font-size: 60px;
        color: #FFFFFF;
    }

    .conteudo {
        padding-left: 33%;
        padding-top: 150px;
    }

    @media (max-width: 500px) {
        h1 {
            padding-top: 40px;
            padding-left: 0px;
            font-size: 35px;
        }
        .conteudo {
            padding-left: 0px;
        }
    }
`;
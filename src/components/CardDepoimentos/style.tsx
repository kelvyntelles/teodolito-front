import styled from 'styled-components';

export const ContainerReact = styled.div`
    width: 600px;
    height: auto;

    .card-teste {
        background: #006494;
        color: #FFFFFF;
        border: #006494;
    }

    .imagem {
        margin-top: -90px;
        height: 170px;
        padding-left: 35%;
        padding-right: 35%;
        border-radius: 50%;
    }

    .nome {
        text-align: right;
        padding-right: 15px;
        padding-bottom: 20px;
    }

    @media (max-width: 500px) {
        width: 100%;
        height: auto;

        .imagem {
            margin-top: -80px;
            height: 150px;
            padding-left: 30%;
            padding-right: 30%;
        }
    }
` 
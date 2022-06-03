import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background: #A59C97;

    .area-titulo {
        padding-top: 50px;
        padding-left: 100px;

        h1 {
            font-size: 60px;
            color: #373A3C;

            @media (max-width: 500px) {
                font-size: 40px;
            }
        }
    }

    .area-form {
        margin-left: 10%;
        margin-right: 10%;
        background: #FFFFFF;
        padding: 30px 60px 30px 60px;
        margin-top: 30px;

        @media (max-width: 500px) {
            margin-left: 0;
            margin-right: 0;
        }
    }

    .botao-enviar {
        background: #007BFF;
        border: #007BFF;
        width: 150px;
    }
`;
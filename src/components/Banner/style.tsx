import styled from 'styled-components';

export const Container = styled.div`
    .image {
        display: flex;
        position: relative;
        background:url('https://www.jwservice.com.br/wp-content/uploads/2020/06/jw01.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 93.3vh;
        justify-content: center;
        align-items: center;
    }

    .text {
        color: #EEEEEE;

        .titulo {
            font-size: 90px;
            padding-left: 50px;
        }

        .sub-titulo {
            font-size: 60px;
        }
    }

`;



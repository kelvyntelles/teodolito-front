import styled from 'styled-components';

export const Container = styled.div`
    width: 550px;
    height: 550px;
    background: #006494;
    border-radius: 5px;
    color: #FFFFFF;
    margin: 0 60px 0 60px;

    .area-photo {
        margin-top: -80px;
        text-align: center;
    }

    .photo-client {
        height: 160px;
        width: 160px;
        border-radius: 50%;
    }

    .name-client {
        font-size: 28px;
        text-align: right;
        padding-right: 30px;
        margin-top: -20px;
    }

    p {
        padding: 50px 35px;
        font-size: 24px;
        text-align: center;
        font-family: cursive;
    }
`;
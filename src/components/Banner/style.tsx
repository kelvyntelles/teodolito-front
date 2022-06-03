import styled from 'styled-components';

export const ContainerReact = styled.div`
    .image {
        height: 900px;

        @media (max-width: 1100px) {
            height: 800px;
        }
        
        @media (max-width: 700px) {
            height: 600px;
        }

        @media (max-width: 500px) {
            height: 400px;
        }
    }

    .titulo {
        display: flex;
        justify-content: center;
        padding-top: 20%;
        font-size: 70px;

        @media (max-width: 1100px) {
            font-size: 50px;
        }
        
        @media (max-width: 700px) {
            font-size: 35px;
        }

        @media (max-width: 500px) {
            font-size: large;
        }
    }

    .sub-titulo {
        display: flex;
        justify-content: center;
        font-size: 50px;

        @media (max-width: 1100px) {
            font-size: 35px;
        }
        
        @media (max-width: 700px) {
            font-size: 25px;
        }

        @media (max-width: 500px) {
            font-size: large;
        }
    }
`;



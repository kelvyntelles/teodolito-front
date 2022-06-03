import styled from "styled-components";

export const ContainerReact = styled.div`
    background: #13293D;
    color: #FFFFFF;
    padding: 20px;
    text-align: center;

    .teste {
        @media (max-width: 750px) {
            flex-direction: column;
        }
    }

    .texto-footer {
        @media (max-width: 750px) {
            margin-bottom: 10px;
        }    
    }
    
`;
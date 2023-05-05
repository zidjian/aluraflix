import styled from "styled-components";

export const ContenidoCompleto = styled.div`
    width: 100%;
`;

export const ContenidoParcial = styled.div`
    width: calc(100% - 1rem);
    margin: 0 auto;
    @media screen and (min-width: 768px) {
        width: 90%;
    }
    @media screen and (min-width: 1024px) {
        width: 70%;
    }
`;

export const Logo = styled.img`
    height: 2rem;
    width: auto;  
`;
import styled from "styled-components";
import { ContenidoParcial } from "../UI/Estilos";

const Footer = styled.footer`
    background-color: ${({ theme }) => theme.oscuro};
    padding: 2rem 0;
    border-top: 1px solid ${({ theme }) => theme.primero};
`;
const LinkExterno = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.primero};
    font-weight: 700;
`;

const FooterContenido = styled(ContenidoParcial)`
    text-align: center;
    color: ${({ theme }) => theme.texto};
`;

export function PieDePagina() {
    return (
        <Footer>
            <FooterContenido>
                &copy; 2023. Desarollador por <LinkExterno href="">Waldir Maidana</LinkExterno>
            </FooterContenido>
        </Footer>
    );
}
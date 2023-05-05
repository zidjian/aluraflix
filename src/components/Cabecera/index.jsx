import styled from "styled-components";
import { ContenidoParcial, Logo } from "../UI/Estilos";
import logo from '../../assets/img/logo.svg'

const Header = styled.div`
    padding: 1rem;
    background-color: ${(theme) => theme.fondo};
`;

export function Cabecera() {
    return (
        <Header>
            <ContenidoParcial>
                <Logo src={logo} alt="" />
            </ContenidoParcial>
        </Header>
    );
}
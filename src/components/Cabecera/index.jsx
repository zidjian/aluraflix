import styled from "styled-components";
import { ContenidoParcial, BotonLink, Logo } from "../UI/Estilos";
import logo from '../../assets/img/logo.svg'
import { Link, useLocation } from "react-router-dom";

const Header = styled.div`
    padding: 1rem;
    background-color: ${({ theme }) => theme.oscuro};
    border-bottom: solid 1px ${({ theme }) => theme.primero};
    text-align: center;
`;

const HeaderContenido = styled(ContenidoParcial)`
    display: flex;
    justify-content: center;
    justify-content: space-between;
`;

const HeaderLink = styled(Link)`
    display: flex;
    align-items: center;
`;


export function Cabecera() {
    const url = useLocation()

    return (
        <Header>
            <HeaderContenido>
                <HeaderLink to='/'>
                    <Logo src={logo} alt="" />
                </HeaderLink>
                {url.pathname === '/' && <BotonLink tipo='lineas' color="#fff" to='/video' >Nuevo Video</BotonLink>}
            </HeaderContenido>
        </Header>
    );
}
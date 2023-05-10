import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContenidoCompleto = styled.div`
    width: 100%;
`;

export const ContenidoParcial = styled.div`
    width: calc(100% - 1rem);
    height: 100%;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
        width: 90%;
    }
    @media screen and (min-width: 1024px) {
        width: 70%;
        max-width: 1440px;
    }
`;

export const Logo = styled.img`
    height: 2rem;
    width: auto;
`;

export const Imagen = styled.img`
    width: 100%;
    height: auto;
`;

export const Boton = styled.a`
    text-transform: capitalize;
    text-align: center;
    padding: .5rem 2rem;
    display: inline-block;
    line-height: 1;
    box-sizing: border-box;
    border-radius: .25rem;
    font-weight: 300;
    font-size: 1rem;
    ${
        ({ tipo, color }) => {
            switch (tipo) {
                case 'lineas':
                    return `display: inline-block; border: 1px solid ${color}; color: ${color};`
                default:
                    return `display: inline-block; background-color: ${color}; color: black;`
            }
        }
    };
`;

export const FormBoton = styled.button`
    text-transform: capitalize;
    text-align: center;
    padding: .5rem 2rem;
    display: inline-block;
    line-height: 1;
    box-sizing: border-box;
    border-radius: .25rem;
    font-weight: 300;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    ${
        ({ tipo, color }) => {
            switch (tipo) {
                case 'lineas':
                    return `display: inline-block; border: 1px solid ${color}; color: ${color};`
                default:
                    return `display: inline-block; background-color: ${color}; color: black;`
            }
        }
    };
`;

export const BotonLink = styled(Link)`
    text-transform: capitalize;
    text-align: center;
    padding: calc(.5rem - 2px) calc(2rem - 2px);
    line-height: 1;
    box-sizing: border-box;
    border-radius: .25rem;
    font-weight: 300;
    font-size: 1rem;
    text-decoration: none;
    ${({ tipo, color }) => {
        switch (tipo) {
            case 'lineas':
                return `display: inline-block; border: 1px solid ${color}; color: ${color};`
            default:
                return `display: inline-block; background-color: ${color}; color: black;`
        }
    }
    };
    @media screen and (min-width: 1024px) {
        display: initial;
    }
`;

export const GrupoBotones = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
`;

export const BotonesSeparador = styled.div`
    display: flex;
    gap: 1rem;
`;

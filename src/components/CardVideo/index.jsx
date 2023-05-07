import { Imagen } from "../UI/Estilos";
import styled from "styled-components";

const CardVideoLink = styled.a`

`;

const CarrucelImagen = styled(Imagen)`
    border: 1px solid ${({color}) => color };
    box-sizing: border-box;
`;

export function CardVideo({link, src, color}) {
    return (
        <CardVideoLink href={link} target="__blank" >
            <CarrucelImagen src={src} color={color} ></CarrucelImagen>
        </CardVideoLink>
    );    
}
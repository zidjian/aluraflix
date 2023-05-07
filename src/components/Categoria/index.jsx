import styled from "styled-components";
import { Carrucel } from "../Carrucel";
import { Boton, ContenidoParcial } from "../UI/Estilos";

const CategoriaGrupo = styled.section`
`;

const Contenido = styled(ContenidoParcial)`
    padding: 2rem 0;
`;

const Cabecera = styled.div`
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.texto};
    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`;

const Descripcion = styled.p`
`;

export function Categoria({categoria_id, nombre, color}) {
    return (
        <CategoriaGrupo>
            <Contenido>
                <Cabecera>
                    <Boton color={color} >{nombre}</Boton>
                    <Descripcion>Formación Front End de Alura Latam</Descripcion>
                </Cabecera>
                <Carrucel categoria_id={categoria_id} color={color} />
            </Contenido>
        </CategoriaGrupo>
    );
}
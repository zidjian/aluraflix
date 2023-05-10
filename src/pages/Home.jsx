import styled from "styled-components";
import { Banner } from "../components/Banner";
import { useContext } from "react";
import { Contexto } from "../Contexto";
import { Categoria } from "../components/Categoria";

const Principal = styled.main`
    background: ${({ theme }) => theme.oscuro};
`;

export function Home() {
    const datos = useContext(Contexto);
    const { categorias, videos } = datos
    return (
        <Principal>
            <Banner />
            {
                videos.length > 0 &&
                categorias.map((categoria, indice) => {
                    const cantidad_videos = videos.filter((dato) => dato.categoria+'' === ''+categoria.id );
                    if(cantidad_videos.length > 0) {
                        return (
                            <Categoria categoria={categoria} key={indice} />
                        );
                    }
                    return '';
                })
            }
        </Principal>
    );
}
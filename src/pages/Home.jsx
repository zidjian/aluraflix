import styled from "styled-components";
import { Banner } from "../components/Banner";
import { Categoria } from "../components/Categoria";

const Principal = styled.main`
    background: ${({theme}) => theme.oscuro};
`;

export function Home() {
    return (
        <Principal>
            <Banner />
            <Categoria nombre='Front End' color='#6BD1FF' />
            <Categoria nombre='Back End' color='#9CD33B' />
            <Categoria nombre='Innovación y gestión' color='#6B5BE2' />
        </Principal>
    );
}
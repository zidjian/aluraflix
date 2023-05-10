import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Error404 } from "./pages/Error404";
import { Video } from "./pages/Video";
import { Categoria } from "./pages/Categoria";
import { Cabecera } from "./components/Cabecera";
import { PieDePagina } from "./components/PieDePagina";

import { ThemeProvider } from "styled-components";
import { temaClaro } from "./components/UI/Temas";
import { EstilosGlobales } from "./EstilosGlobales";
import { EditarVideo } from "./pages/EditarVideo";
import { EditarCategoria } from "./pages/EditarCategoria";

function App() {
    return (
        <ThemeProvider theme={temaClaro}>
            <EstilosGlobales />
            <Router>
                <Cabecera />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/video" element={<Video />} />
                    <Route path="/video/:id" element={<EditarVideo />} />
                    <Route path="/categoria" element={<Categoria />} />
                    <Route path="/categoria/:id" element={<EditarCategoria />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
                <PieDePagina />
            </Router>
        </ThemeProvider>
    );
}

export default App;

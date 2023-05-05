import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Video } from "./pages/Video";
import { Categoria } from "./pages/Categoria";
import { Cabecera } from "./components/Cabecera";
import { PieDePagina } from "./components/PieDePagina";

import { ThemeProvider } from "styled-components";
import { temaClaro } from "./components/UI/Temas";
import { EstilosGlobales } from "./EstilosGlobales";

function App() {
    return (
            <Router>
                <ThemeProvider theme={temaClaro}>
                    <EstilosGlobales />
                    <Cabecera />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/video" element={<Video />} />
                        <Route path="/categoria" element={<Categoria />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                    <PieDePagina />
                </ThemeProvider>
            </Router>
    );
}

export default App;

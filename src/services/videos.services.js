import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export const listarVideos = async (url, setDatos) => {
    const respuesta = await api.get(url);
    setDatos(respuesta)
} 
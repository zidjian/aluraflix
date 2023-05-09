import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export const listarVideos = async (url, setDatos) => {
    const respuesta = await api.get(url);
    setDatos(respuesta)
} 

export const eliminarVideo = async (id) => {
    const respuesta = await api.delete(`/videos/${id}`);
    return respuesta;
}

export const obtenerVideo = async (id, setDatos) => {
    const respuesta = await api.get(`/videos/${id}`);
    setDatos(respuesta.data);
}
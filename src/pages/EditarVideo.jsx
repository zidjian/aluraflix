import styled from "styled-components";
import { BotonLink, ContenidoParcial, FormBoton, GrupoBotones, BotonesSeparador } from "../components/UI/Estilos";
import * as yup from 'yup';
import { useFormik } from "formik";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { actualizarVideo, obtenerVideo } from "../services/videos.services";
import { useEffect, useState, useContext } from "react";
import { Contexto } from "../Contexto";


const Principal = styled.main`
    background: ${({ theme }) => theme.oscuro};
`;

const PrincipalContenido = styled(ContenidoParcial)`
    padding: 2rem 0;
`;

const Campo = styled(TextField)`
    input {
        background-color: ${({ theme }) => theme.semioscuro};
        color: ${({ theme }) => theme.texto};

    }
    .MuiFormLabel-root {
        color: ${({ theme }) => theme.texto};
    }
    .MuiFormLabel-root.Mui-focused {
        color: ${({ theme }) => theme.texto};
    }
    .MuiFormLabel-root.Mui-error {
        color: ${({ theme }) => theme.texto};
    }
`;

const Selector = styled(FormControl)`
    .MuiSelect-select, .MuiSelect-select, .MuiFormLabel-root, .MuiSelect-iconFilled:focus {
        background-color: ${({ theme }) => theme.semioscuro} !important;
        color: ${({ theme }) => theme.texto} !important;

    }
    .MuiSelect-nativeInput, .MuiFormLabel-root	{
        color: ${({ theme }) => theme.texto};
    }
    .MuiSelect-icon	 {
        color: ${({ theme }) => theme.texto};
    }
    .MuiFormLabel-root.Mui-error {
        color: ${({ theme }) => theme.texto};
    }
`;

const PrincipalTitulo = styled.h1`
    color: ${({ theme }) => theme.texto};
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;
`;

const esquemaDeValidacion = yup.object({
    titulo: yup
        .string()
        .required('El cambo es obligatorio'),
    enlace_video: yup
        .string()
        // .matches(
        //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        //     'Ingrese una url valida.'
        // )
        .required('El cambo es obligatorio'),
    enlace_imagen: yup
        .string()
        // .matches(
        //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        //     'Ingrese una url valida.'
        // )
        .required('El cambo es obligatorio'),
    categoria: yup
        .string()
        .required('El cambo es obligatorio'),
    descripcion: yup
        .string()
        .required('El cambo es obligatorio'),
    codigo: yup
        .number()
        .typeError('Solo caracteres numericos')
        .required('El cambo es obligatorio'),
});

export function EditarVideo() {
    const datos = useContext(Contexto)
    const { categorias, recargar, valor } = datos;
    const { id } = useParams();
    const [video, setVideo] = useState();
    const navegacion = useNavigate();

    function actualizar() {
        recargar(valor + 1);
    }

    const formik = useFormik({
        initialValues: {
            titulo: video ? video.titulo : '',
            enlace_video: video ? video.link_video : '',
            enlace_imagen: video ? video.link_imagen : '',
            categoria: video ? video.categoria : '',
            descripcion: video ? video.descripcion : '',
            codigo: video ? video.codigo : '',
        },
        enableReinitialize: true,
        validationSchema: esquemaDeValidacion,
        onSubmit: (values) => {
            const { titulo, enlace_video, enlace_imagen, categoria, descripcion, codigo } = values
            actualizarVideo(id, {
                titulo,
                link_video: enlace_video,
                link_imagen: enlace_imagen,
                categoria,
                descripcion,
                codigo
            })
                .then(() => {
                    actualizar()
                    navegacion('/video')
                });
        },
    });

    useEffect(() => {
        async function llamar() {
            const respuesta = await obtenerVideo(id);
            setVideo(respuesta)
        }
        llamar()
    }, [id])

    return (
        <Principal>
            <PrincipalContenido>
                <PrincipalTitulo>Editar Video</PrincipalTitulo>
                <form onSubmit={formik.handleSubmit} autoComplete="off">
                    <Campo
                        fullWidth
                        margin="normal"
                        id="titulo"
                        name="titulo"
                        label="Titulo"
                        variant="filled"
                        value={formik.values.titulo}
                        onChange={formik.handleChange}
                        error={formik.touched.titulo && Boolean(formik.errors.titulo)}
                        helperText={formik.touched.titulo && formik.errors.titulo}
                    />
                    <Campo
                        fullWidth
                        margin="normal"
                        id="enlace_video"
                        name="enlace_video"
                        label="Enlace de video"
                        variant="filled"
                        value={formik.values.enlace_video}
                        onChange={formik.handleChange}
                        error={formik.touched.enlace_video && Boolean(formik.errors.enlace_video)}
                        helperText={formik.touched.enlace_video && formik.errors.enlace_video}
                    />
                    <Campo
                        fullWidth
                        margin="normal"
                        id="enlace_imagen"
                        name="enlace_imagen"
                        label="Enlace de imagen"
                        variant="filled"
                        value={formik.values.enlace_imagen}
                        onChange={formik.handleChange}
                        error={formik.touched.enlace_imagen && Boolean(formik.errors.enlace_imagen)}
                        helperText={formik.touched.enlace_imagen && formik.errors.enlace_imagen}
                    />
                    <Selector
                        fullWidth
                        margin="normal"
                        variant="filled"
                        error={formik.touched.categoria && Boolean(formik.errors.categoria)}
                    >
                        <InputLabel id="categoria-rotulo">Categoria</InputLabel>
                        <Select
                            id="categoria"
                            label="Categoria"
                            name="categoria"
                            value={formik.values.categoria}
                            onBlur={formik.handleBlur}
                            onChange={(e) => formik.setFieldValue('categoria', e.target.value)}
                        >
                            {
                                categorias.map((categoria, indice) => {
                                    return (
                                        <MenuItem value={categoria.id} key={indice} >{categoria.nombre}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                        <FormHelperText>{formik.touched.categoria && formik.errors.categoria}</FormHelperText>
                    </Selector>
                    <Campo
                        fullWidth
                        margin="normal"
                        id="descripcion"
                        name="descripcion"
                        label="Descripción"
                        variant="filled"
                        value={formik.values.descripcion}
                        onChange={formik.handleChange}
                        error={formik.touched.descripcion && Boolean(formik.errors.descripcion)}
                        helperText={formik.touched.descripcion && formik.errors.descripcion}
                    />
                    <Campo
                        fullWidth
                        margin="normal"
                        id="codigo"
                        name="codigo"
                        label="Codigo"
                        variant="filled"
                        value={formik.values.codigo}
                        onChange={formik.handleChange}
                        error={formik.touched.codigo && Boolean(formik.errors.codigo)}
                        helperText={formik.touched.codigo && formik.errors.codigo}
                    />
                    <GrupoBotones >
                        <BotonesSeparador >
                            <FormBoton color="#2A7AE4" type="submit">
                                Actualizar
                            </FormBoton>
                            <FormBoton color="#cfcfcf" type="reset" onClick={formik.resetForm}>
                                Limpiar
                            </FormBoton>
                        </BotonesSeparador>
                        <BotonLink tipo='lineas' color="#cfcfcf" to='../video' >
                            Regresar
                        </BotonLink>
                    </GrupoBotones>
                </form>
            </PrincipalContenido>
        </Principal>
    );
}
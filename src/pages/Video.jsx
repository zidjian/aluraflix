import styled from "styled-components";
import { BotonLink, ContenidoParcial, FormBoton, GrupoBotones, BotonesSeparador } from "../components/UI/Estilos";
import * as yup from 'yup';
import { useFormik } from "formik";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Tabla } from "../components/Tabla";
import { useContext } from "react";
import { Contexto } from "../Contexto";
import { crearVideo, eliminarVideo } from "../services/videos.services";

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
        .url('Ingrese un enlace valido')
        .required('El cambo es obligatorio'),
    enlace_imagen: yup
        .string()
        .url('Ingrese un enlace valido')
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

export function Video() {
    const datos = useContext(Contexto)
    const { videos, categorias, valor, recargar } = datos;

    const colmnas = [
        { field: 'titulo', headerName: 'Titulo', flex: 1 },
        { field: 'categoria', headerName: 'Categoria' },
    ]

    function actualizar() {
        recargar(valor + 1);
    }

    const formik = useFormik({
        initialValues: {
            titulo: '',
            enlace_video: '',
            enlace_imagen: '',
            categoria: '',
            descripcion: '',
            codigo: '',
        },
        enableReinitialize: true,
        validationSchema: esquemaDeValidacion,
        onSubmit: (values) => {
            const { titulo, enlace_video, enlace_imagen, categoria, descripcion, codigo } = values
            formik.resetForm();
            crearVideo({
                titulo,
                link_video: enlace_video,
                link_imagen: enlace_imagen,
                categoria,
                descripcion,
                codigo
            })
                .then(() => {
                    actualizar();
                })
        },
    });

    return (
        <Principal>
            <PrincipalContenido>
                <PrincipalTitulo>Nuevo Video</PrincipalTitulo>
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
                                Guardar
                            </FormBoton>
                            <FormBoton color="#cfcfcf" type="reset" onClick={formik.resetForm}>
                                Limpiar
                            </FormBoton>
                        </BotonesSeparador>
                        <BotonLink tipo='lineas' color="#cfcfcf" to='../categoria' >
                            Nueva Categoria
                        </BotonLink>
                    </GrupoBotones>
                </form>
                <Tabla db={videos} colmnas={colmnas} actualizar={actualizar} eliminar={eliminarVideo} />
            </PrincipalContenido>
        </Principal>
    );
}
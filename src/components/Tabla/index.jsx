import { DataGrid } from '@mui/x-data-grid';
import { useContext } from 'react';
import { Contexto } from '../../Contexto';
import { Boton } from '../UI/Estilos';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from 'styled-components';
import { eliminarVideo } from '../../services/videos.services';
import { Link } from 'react-router-dom';

const TablaDataGrid = styled(DataGrid)`
    margin-top: 2rem;
    background: ${({ theme }) => theme.texto};
    /* border-color: ${({ theme }) => theme.primero};
    .MuiDataGrid-columnHeaderTitle, .MuiDataGrid-cellContent, .MuiToolbar-root {
        color: ${({ theme }) => theme.texto};
    }
    .css-6h1dhi-MuiDataGrid-root .MuiDataGrid-withBorderColor {
        border-color: ${({ theme }) => theme.primero};
    } */
`;

export function Tabla() {
    const datos = useContext(Contexto)
    const { videos, valor, recargar } = datos;

    function actualizar() {
        recargar(valor + 1);
    }

    return (
        <TablaDataGrid
            rows={videos}
            columns={[
                { field: 'titulo', headerName: 'Titulo', flex: 1 },
                { field: 'categoria', headerName: 'Categoria' },
                {
                    field: 'acciones',
                    headerName: 'Acciones',
                    maxWidth: 300,
                    sortable: false,
                    renderCell: (params) => {
                        const { id } = params.row
                        const onClick = (e) => {
                            e.stopPropagation();
                            eliminarVideo(id);
                            actualizar();
                        };

                        return (
                            <>
                                <DeleteIcon sx={{ color: 'red' }} />
                                <Link to={`${id}`} >
                                    <EditIcon sx={{ color: 'orange' }} />
                                </Link>
                            </>
                        );
                    }
                }
            ]}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                },
            }}
            pageSizeOptions={[10, 20]}
        />
    );
}
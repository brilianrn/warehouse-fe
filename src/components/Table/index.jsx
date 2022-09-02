import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function Table({ data, columns }) {
    return (
        <Box sx={{ height: 650, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
                getRowId={(row, i) => row.WarehouseID + i}
            />
        </Box>
    );
}

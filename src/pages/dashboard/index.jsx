import { Breadcrumbs, Typography } from '@mui/material';
import Table from 'components/Table/index';
import { useWarehouses } from 'hooks/useWarehouses';
import React from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { DateFormat } from '../../utils/formatData';

const Dashboard = () => {
    const warehouseReducer = useSelector((state) => state.warehouses);
    const { getDataWarehouses } = useWarehouses();
    const navigate = useNavigate();

    const columns = useMemo(() => {
        return [
            { field: 'WarehouseID', headerName: 'WarehouseID', width: 90 },
            {
                field: 'Branch',
                headerName: 'Branch',
                width: 150,
                editable: true
            },
            {
                field: 'Description',
                headerName: 'Description',
                width: 150,
                editable: true
            },
            {
                field: 'LastModifiedDateTime',
                headerName: 'Last Modified Date',
                width: 150,
                editable: true,
                renderCell: (e) => {
                    return <p>{DateFormat(e.row.LastModifiedDateTime)}</p>;
                }
            },
            {
                field: 'Active',
                headerName: 'Active',
                width: 110,
                editable: true,
                renderCell: (e) => {
                    return <p>{e.row.Active ? 'YES' : 'NO'}</p>;
                }
            },
            {
                field: 'action',
                headerName: 'Action',
                width: 110,
                editable: true,
                renderCell: (e) => {
                    return (
                        <div onClick={() => navigate(`/warehouse/${e.row.WarehouseID}`)}>
                            <Button variant="contained">Detail</Button>
                        </div>
                    );
                }
            }
        ];
    });

    useEffect(async () => {
        await getDataWarehouses();
    }, []);

    return (
        <React.Fragment>
            <Breadcrumbs aria-label="breadcrumb">
                <Typography variant="h6">Dashboard</Typography>
                <Typography variant="h6">Warehouse</Typography>
            </Breadcrumbs>
            <h2>Warehouses</h2>
            {warehouseReducer.warehouses ? <Table columns={columns} data={warehouseReducer.warehouses} /> : null}
        </React.Fragment>
    );
};

export default Dashboard;

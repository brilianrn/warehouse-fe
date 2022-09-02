import React, { useMemo } from 'react';
import { Breadcrumbs, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useWarehouseDetail } from 'hooks/useWarehouseDetail';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Table from 'components/Table/index';
import { DateFormat } from 'utils/formatData';

const WarehouseDetail = () => {
    const { id } = useParams();
    const { getDataWarehouse } = useWarehouseDetail();
    const warehouseReducer = useSelector((state) => state.warehouses);

    useEffect(async () => {
        await getDataWarehouse(id);
    }, []);

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
                field: 'ReplenishmentClass',
                headerName: 'Replenishment Class',
                width: 150,
                editable: true
            }
        ];
    });
    return (
        <React.Fragment>
            <Breadcrumbs aria-label="breadcrumb">
                <Typography variant="h6">Dashboard</Typography>
                <Typography variant="h6">Warehouse</Typography>
                <Typography variant="h6">Detail</Typography>
            </Breadcrumbs>
            <h2>Warehouse Detail - {id}</h2>
            {warehouseReducer.warehouse ? <Table columns={columns} data={[warehouseReducer.warehouse]} /> : null}
        </React.Fragment>
    );
};

export default WarehouseDetail;

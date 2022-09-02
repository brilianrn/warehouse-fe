import { getWarehouse } from 'api/GET_Warehouese';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setWarehouse } from 'store/actions/warehouse';

export const useWarehouseDetail = () => {
    const [errorWarehouse, setErrorWarehouse] = useState(false);
    const [loadingWarehouse, setLoadingWarehouse] = useState(false);
    const [messageDataWarehouse, setMessageDataWarehouse] = useState(null);
    const dispatch = useDispatch();

    const resetVariablesWarehouse = () => {
        setErrorWarehouse(false);
        setMessageDataWarehouse(null);
    };

    const getDataWarehouse = async (id) => {
        setLoadingWarehouse(true);
        try {
            const { data, status, statusText } = await getWarehouse(id);
            if (status === 200) {
                setErrorWarehouse(false);
                setMessageDataWarehouse(statusText);
                dispatch(setWarehouse(data));
            } else {
                setLoadingWarehouse(false);
                setMessageDataWarehouse(statusText);
                setErrorWarehouse(true);
            }
            return setLoadingWarehouse(false);
        } catch (err) {
            setLoadingWarehouse(false);
            return err;
        }
    };

    return { loadingWarehouse, errorWarehouse, messageDataWarehouse, resetVariablesWarehouse, getDataWarehouse };
};

import { getWarehouses } from 'api/GET_Warehoueses';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setWarehouses } from 'store/actions/warehouse';

export const useWarehouses = () => {
    const [errorWarehouses, setErrorWarehouses] = useState(false);
    const [loadingWarehouses, setLoadingWarehouses] = useState(false);
    const [messageDataWarehouses, setMessageDataWarehouses] = useState(null);
    const dispatch = useDispatch();

    const resetVariablesWarehouses = () => {
        setErrorWarehouses(false);
        setMessageDataWarehouses(null);
    };

    const getDataWarehouses = async () => {
        setLoadingWarehouses(true);
        try {
            const { data, status, statusText } = await getWarehouses();
            if (status === 200) {
                setErrorWarehouses(false);
                setMessageDataWarehouses(statusText);
                dispatch(setWarehouses(data));
            } else {
                setLoadingWarehouses(false);
                setMessageDataWarehouses(statusText);
                setErrorWarehouses(true);
            }
            return setLoadingWarehouses(false);
        } catch (err) {
            setLoadingWarehouses(false);
            return err;
        }
    };

    return { loadingWarehouses, errorWarehouses, messageDataWarehouses, resetVariablesWarehouses, getDataWarehouses };
};

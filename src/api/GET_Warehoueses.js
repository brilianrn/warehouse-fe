import { axiosInstance } from './axios.config';

export const getWarehouses = async () => {
    return axiosInstance
        .get('/api/WarehouseReps')
        .then((res) => res)
        .catch((err) => err.response.data);
};

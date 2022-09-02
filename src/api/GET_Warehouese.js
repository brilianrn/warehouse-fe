import { axiosInstance } from './axios.config';

export const getWarehouse = async (id) => {
    return axiosInstance
        .get(`/api/WarehouseReps/${id}`)
        .then((res) => res)
        .catch((err) => err.response.data);
};

import Axios from 'axios';

const defaultOptions = {
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 30000
};

export const axiosInstance = Axios.create(defaultOptions);

// axiosInstance.interceptors.request.use(async (req) => {
//   const accessToken = (await retrieveLocalStorageItem('accessToken')) || null;
//   if (accessToken) {
//     req.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return req;
// });

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        throw error;
    }
);

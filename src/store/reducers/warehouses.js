const initialState = {
    warehouses: null,
    warehouse: null
};

const warehousesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_WAREHOUSES':
            return { ...state, warehouses: payload };
        case 'SET_WAREHOUSE':
            return { ...state, warehouse: payload };
        default:
            return state;
    }
};

export default warehousesReducer;

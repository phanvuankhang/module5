import axios from "axios";

export const getListProductTypeAPI = () => {
    return axios.get(" http://localhost:8080/productType");
};
export const searchProductAPI = (type) => {
    return axios.get(` http://localhost:8080/product?typeId_like=${type}`);
};
import axios from "axios";

export const getListProductAPI = () => {
    return axios.get(" http://localhost:8080/product?_sort=id&_order=desc");
};
export const getProductAPI = (id) => {
    return axios.get(" http://localhost:8080/product/" + id);
};
export const deleteProductAPI = (id) => {
    return axios.delete(" http://localhost:8080/product/" + id);
};
export const saveProductAPI = (product) => {
    return axios.post(" http://localhost:8080/product", product);
};
export const editProductAPI = (product) => {
    return axios.put(" http://localhost:8080/product/" + product.id, product);
};
export const searchProductAPI = (name,type) => {
    return axios.get(` http://localhost:8080/product?name_like=${name}&productTypeId_like=${type}`);
};
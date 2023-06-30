import axios from "axios";

export const getListProductsAPI = () => {
  return axios.get("http://localhost:8080/products?_sort=price&_order=desc");
};

export const getProductAPI = (id) => {
  return axios.get("http://localhost:8080/products/" + id);
};

export const createProductAPI = (product) => {
  return axios.post("http://localhost:8080/products", product);
};

export const updateProductAPI = (product) => {
  return axios.put("http://localhost:8080/products/" + product.id, product);
};

export const getListProductTypesAPI = () => {
  return axios.get("http://localhost:8080/productTypes");
};

import axios from "axios";

export const getListOrdersAPI = () => {
    return axios.get("http://localhost:8080/api/orders");
};

export const getOrdersAPI = (id) => {
    return axios.get("http://localhost:8080/api/orders/" + id);
};

export const createOrdersAPI = (orders) => {
    return axios.post("http://localhost:8080/api/orders", orders);
};

export const updateOrdersAPI = (orders) => {
    return axios.put("http://localhost:8080/api/orders/" + orders.id, orders);
};
export const deleteOrdersAPI = (id) => {
    return axios.delete(" http://localhost:8080/api/orders/" + id);
};

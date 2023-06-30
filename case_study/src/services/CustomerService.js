import axios from "axios";


export const findAll = () => {
    return axios.get("http://localhost:8080/customer");
};

export const save = (customer) => {
    return axios.post("http://localhost:8080/customer", customer);
};

export const edit = (customer) => {
    return axios.put("http://localhost:8080/customer/" + customer.id, customer);
};

export const findById = (id) => {
    return axios.get("http://localhost:8080/customer/" + id);
};

export const deleteByID = (id) => {
    return axios.delete("http://localhost:8080/customer/" + id);
};

export const findAllCustomerType = () => {
    return axios.get("http://localhost:8080/customerType");
};
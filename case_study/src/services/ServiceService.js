import axios from "axios";

export const findAll = () => {
    return axios.get("http://localhost:8080/service");
}
export const save = (service) => {
    return axios.post("http://localhost:8080/service", service)
}
export const edit = (service) => {
    return axios.put("http://localhost:8080/service/" + service.id, service)
}
export const findById = (id) => {
    return axios.get("http://localhost:8080/service/" + id)
}
export const deleteByID = (id) => {
    return axios.delete("http://localhost:8080/service/" + id)
}
export const findAllServiceType = () => {
    return axios.get("http://localhost:8080/typeService");
};
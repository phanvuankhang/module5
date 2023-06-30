import axios from "axios";

export const findAll = async () => {
    return await axios.get("http://localhost:8080/service");
}
export const save = async (service) => {
    return  await axios.post('http://localhost:8080/service', service)
}
export const edit = async (service) => {
    return await axios.put("http://localhost:8080/service/" + service.id, service)
}
export const findById = async (id) => {
    return await axios.get("http://localhost:8080/service/" + id)
}
export const deleteByID = async (id) => {
    return await axios.delete("http://localhost:8080/service/" + id)
}
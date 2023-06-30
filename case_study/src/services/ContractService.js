import axios from "axios";


export const findAll = async () => {
    return await axios.get("http://localhost:8080/contract");
}
export const save = async (contract) => {
    return  await axios.post('http://localhost:8080/contract', contract)
}
export const edit = async (contract) => {
    return await axios.put("http://localhost:8080/contract/" + contract.id, contract)
}
export const findById = async (id) => {
    return await axios.get("http://localhost:8080/contract/" + id)
}
export const deleteByID = async (id) => {
    return await axios.delete("http://localhost:8080/contract/" + id)
}
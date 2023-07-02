import axios from "axios";


export const findAll =  () => {
    return  axios.get("http://localhost:8080/contract?_sort=id&_order=desc");
}
export const save =  (contract) => {
    return   axios.post('http://localhost:8080/contract', contract)
}
export const edit =  (contract) => {
    return  axios.put("http://localhost:8080/contract/" + contract.id, contract)
}
export const findById =  (id) => {
    return  axios.get("http://localhost:8080/contract/" + id)
}
export const deleteByID =  (id) => {
    return  axios.delete("http://localhost:8080/contract/" + id)
}
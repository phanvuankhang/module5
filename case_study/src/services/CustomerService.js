import axios from "axios";


const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/customer')
        return result.data
    } catch (e) {
        console.log(e)
    }
}
const save = async (value) => {
    try {
        const result = await axios.post('http://localhost:8080/customer', value)
    } catch (e) {
        console.log(e)
    }
}
const edit = async (id, value) => {
    try {
        const result = await axios.put(`http://localhost:8080/customer/${id}`, value)
    } catch (e) {
        console.log(e)
    }
}
const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/customer/${id}`)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
const deleteByID = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:8080/customer-list/${id}`)
    } catch (e) {
        console.log(e)
    }
}
const findALlType = () => {
    return axios.get('http://localhost:8080/customerType').data;
}
const CustomerService = {
    findAll,
    save,
    edit,
    findById,
    deleteByID,
    findALlType
}
export default CustomerService;
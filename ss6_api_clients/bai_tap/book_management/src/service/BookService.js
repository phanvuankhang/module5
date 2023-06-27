import axios from "axios";


export const findAll=async ()=>{
    try{
        const result=await axios.get('http://localhost:8080/book-list')
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const save=async (value)=>{
    try {
        const result=await axios.post('http://localhost:8080/book-list',value)
    }catch (e) {
        console.log(e)
    }
}
export const edit = async (id,value)=>{
    try{
        const result=await axios.put(`http://localhost:8080/book-list/${id}`,value)
    }catch (e) {
        console.log(e)
    }
}
export const findById=async (id)=>{
    try {
       const result=await axios.get(`http://localhost:8080/book-list/${id}`)
        return result.data;
    }catch (e) {
        console.log(e)
    }
}
export const deleteByID= async (id)=>{
    try {
        const result=await axios.delete(`http://localhost:8080/book-list/${id}`)
    }catch (e) {
        console.log(e)
    }
}
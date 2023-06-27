import axios from "axios";

export const findAll=async ()=> {
    try{
        const result=await axios.get('http://localhost:8080/todo')
        return result.data
    }catch (e) {
        console.log(e)
    }
}

export const save=async (value)=> {
    try{
        const result=await axios.post('http://localhost:8080/todo',value)
    }catch (e) {
        console.log(e)
    }
}
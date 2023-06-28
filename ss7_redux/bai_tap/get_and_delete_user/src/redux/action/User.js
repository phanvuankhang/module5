import UserService from "../../../src/services/UserService";
import {DELETE_USER, GET_ALL_USER} from "./Types";


export const getAllUser = () => async (dispatch) => {
    try {
        const res = await UserService.findAll();
        dispatch({
            type: GET_ALL_USER,
            payload: res.data
        })
    } catch (e) {
        console.log(e)
    }
}
export const deleteById = (id) => async (dispatch) => {
    try {
        const res = await UserService.deleteById(id);
        dispatch({
            type: DELETE_USER,
            payload: res.data
        })
    } catch (e) {
        console.log(e)
    }
}
import {DELETE_USER, GET_ALL_USER} from "../action/Types";

const initialState = []

const UserReducer = (users = initialState, action) => {
    const {type,payload}=action

    switch (type) {
        case GET_ALL_USER:
            return payload
        case DELETE_USER:
            return [...users]
        default:
            return users
    }
}

export default UserReducer
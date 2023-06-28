import request from '../component/http-common'

const findAll = () => {
    return request.get('/user-list')
}

const deleteById = (id) => {
    return request.delete(`/user-list/${id}`)
}

const UserService = {
    findAll,
    deleteById
}
export default UserService;
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteById, getAllUser} from "../redux/action/User";


export function UserList() {
    const [isTableVisible, setIsTableVisible] = useState(true);
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();


    const handleDeleteUser = (id) => {
        dispatch(deleteById(id))
        dispatch(getAllUser());
    };
    useEffect(() => {
        dispatch(getAllUser());
    }, []);

    const toggleTableVisibility = () => {
        setIsTableVisible(!isTableVisible);
    };

    return (
        <>
            <h1>User List</h1>
            <button onClick={toggleTableVisibility}>
                {isTableVisible ? 'Hide users' : 'Get users'}
            </button>
            {isTableVisible && (
                <table className="table table-striped table-inverse table-responsive">
                    <thead className="thead-inverse">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td scope="row">{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td>
                                <button
                                    style={{ marginLeft: "10px" }}
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={()=>handleDeleteUser(user.id)}
                                >
                                    Delete user
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </>
    );
}
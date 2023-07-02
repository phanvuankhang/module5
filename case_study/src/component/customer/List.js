import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {deleteByID, findAll, findAllCustomerType} from "../../services/CustomerService";
import 'bootstrap/dist/css/bootstrap.min.css'

export function CustomerList() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState([]);
    const [customerType, setCustomerType] = useState([]);
    const [idDelete, setIdDelete] = useState();
    const [nameDelete, setNameDelete] = useState();
    const propsDelete = async (id, name) => {
        setIdDelete(id)
        setNameDelete(name)
    }
    const handleDelete=async (id)=>{
        await deleteByID(id);
        const res=await findAll();
        setCustomer(res.data);

    }
    const getListCustomer = async () => {
        const res = await findAll();
        setCustomer(res.data)
    }
    const getListCustomerType = async () => {
        const result = await findAllCustomerType();
        setCustomerType(result.data)
    }
    useEffect(() => {
        getListCustomer()
        getListCustomerType()
    }, [])
    return (
        <>
            <div>
                <div className="row text-center align-items-center" style={{borderBottom: "2px black solid"}}>
                    <div className="col-1">
                        <button type="button" className="btn btn-outline-success">
                            <a style={{textDecoration: "none", color: "black"}} onClick={() => navigate("/")}>Back</a>
                        </button>
                    </div>
                    <div className="col-10">
                        <h1 className="my-1">CUSTOMERS OF LIST</h1>
                    </div>
                    <div className="col-1">
                        <button type="button" className="btn btn-outline-success">
                            <a style={{textDecoration: "none", color: "black"}}
                               onClick={() => navigate('/customer/create-form')}>Add New</a>
                        </button>
                    </div>
                </div>


                <table className="table table-striped table-hover" style={{width: "100%"}} id="tableCustomer">
                    <thead>
                    <tr className="align-middle text-center">
                        <th scope="col">No</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Customer Type</th>
                        <th scope="col">Date Of Birth</th>
                        <th scope="col">Gender</th>
                        <th scope="col">CCCD Number</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        customer.map((c) => (
                            <tr key={c.id} className="align-middle text-center">
                                <th>{c.id}</th>
                                <td>{c.name}</td>
                                <td>{customerType.find(customerType => customerType.id === c.customerTypeId)?.name}</td>
                                <td>{c.dateOfBirth}</td>
                                <td>{c.gender}</td>
                                <td>{c.cccd}</td>
                                <td>{c.phone}</td>
                                <td>{c.email}</td>
                                <td>{c.address}</td>
                                <td>
                                    <div>
                                        <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal" onClick={()=>propsDelete(c.id,c.name)}>
                                            Delete
                                        </button>
                                        <button style={{marginLeft: "5px"}}
                                                className="btn btn-warning"
                                                onClick={() => navigate(`/customer/${c.id}/edit-form`)}> Edit
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Delete notice!</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Do you want to delete this <span style={{color:"red"}}>{nameDelete}</span>?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-danger"  data-bs-dismiss="modal"
                                onClick={()=>handleDelete(idDelete)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

                <nav aria-label="Page navigation example" style={{marginLeft: "42vw"}}>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
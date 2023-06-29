import React, {useEffect, useState} from "react";
import CustomerService from "../../services/CustomerService";
import {useNavigate} from "react-router-dom";

export function CustomerList() {
    const navigate = useNavigate();
    const [customer,setCustomer]=useState([]);
    const [customerType,setCustomerType]=useState([]);
    const findAllCustomer=async ()=>{
        const result=await CustomerService.findAll()
        setCustomer(result)
    }
    const findAllCustomerType=async ()=>{
        const result=await CustomerService.findALlType()
        setCustomerType(result.data)
    }
    useEffect(()=>{
        findAllCustomer()
        findAllCustomerType()
    },[])
    return (
        <>
        <div>
            <div className="row text-center align-items-center" style={{borderBottom: "2px black solid"}}>
                <div className="col-1">
                    <button type="button" className="btn btn-outline-success">
                        <a style={{textDecoration: "none", color: "black"}} href="/">Back</a>
                    </button>
                </div>
                <div className="col-10">
                    <h1 className="my-1">CUSTOMERS OF LIST</h1>
                </div>
                <div className="col-1">
                    <button type="button" className="btn btn-outline-success">
                        <a style={{textDecoration: "none", color: "black"}} onClick={() => navigate("/create-customer")}>Add New</a>
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
                    customer.map((c)=>(
                        <tr key={c.id} className="align-middle text-center">
                            <th>{c.id}</th>
                            <td>{c.name}</td>
                            <td>{customerType.find(customerType=>customerType.id===c.customerType)?.name}</td>
                            <td>{c.dateOfBirth}</td>
                            <td>{c.gender}</td>
                            <td>{c.cccd}</td>
                            <td>{c.phone}</td>
                            <td>{c.email}</td>
                            <td>{c.address}</td>
                            <td>
                                <div>
                                    <button className="btn btn-danger">Delete</button>
                                    <button style={{marginLeft: "5px"}}
                                            className="btn btn-warning" onClick={() => navigate("/edit-customer")}> Edit
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>


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
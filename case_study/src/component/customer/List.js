import React, {useEffect, useState} from "react";
import CustomerService from "../../services/CustomerService";

export function CustomerList() {
    const [customer,setCustomer]=useState([]);
    useEffect(()=>{
        const fetchApi=async ()=>{
            const result=await CustomerService.findAll()
            setCustomer(result)
        }
        fetchApi()
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
                        <a style={{textDecoration: "none", color: "black"}} href="/customer/create ">Add New</a>
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
                    customer.map(customer=>(
                        <tr key={customer.id} className="align-middle text-center">
                            <th>{customer.id}</th>
                            <td>{customer.name}</td>
                            <td>{customer.customerType}</td>
                            <td>{customer.dateOfBirth}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.cccd}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.email}</td>
                            <td>{customer.address}</td>
                            <td>
                                <div>
                                    <button className="btn btn-danger">Delete</button>
                                    <button style={{marginLeft: "5px"}}
                                            className="btn btn-warning"> Edit
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
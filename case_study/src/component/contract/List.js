import React, {useEffect, useState} from "react";
import ContractService from "../../services/ContractService";


export function ContractList() {
    const [contract,setContract]=useState([])
    useEffect(()=>{
        const fetch=async ()=>{
            const result=await ContractService.findAll()
            setContract(result)
        }
        fetch()
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
                        <h1 className="my-1">CONTRACT OF LIST</h1>
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
                        <th scope="col">Contract Code</th>
                        <th scope="col">Start Day</th>
                        <th scope="col">End Day</th>
                        <th scope="col">Deposit</th>
                        <th scope="col">Total payment amount</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        contract.map(contract=>(
                            <tr key={contract.id} className="align-middle text-center">
                                <th>{contract.id}</th>
                                <td>{contract.code}</td>
                                <td>{contract.startDay}</td>
                                <td>{contract.endDay}</td>
                                <td>{contract.deposit}</td>
                                <td>{contract.amount}</td>
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
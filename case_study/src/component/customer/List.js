export function CustomerList() {
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


            <table className="table table-striped table-hover" style="width: 100%" id="tableCustomer">
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
                <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <a className="btn btn-outline-warning ">
                            Edit
                        </a>
                        <a className="btn btn-outline-danger ">
                            Delete
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>


            <div className="row" style={{margin: "0", padding: "0"}}>
                <div className="col-4"></div>
                <div className="col-1">
                    <a className="btn btn-outline-success">
                        Previous
                    </a>
                </div>
                <div className="col-2 text-center">
                    <p className="text-success" style={{marginTop: "5px"}}>Page / page</p>
                </div>
                <div className="col-1">
                    <a className="btn btn-outline-success">Next</a>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
</>
)
}
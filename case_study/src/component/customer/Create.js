export function CustomerCreate() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="card px-5 py-4">

                            <div style="text-align: center">
                                <h1 style="color: #653399">Create Customer</h1>
                            </div>
                            <form
                            >

                                <div className="mt-4 inputs"><span>Customer Name</span>
                                    <input type="text" className="form-control" id="name" name="name"
                                           placeholder="Enter your full name"/>
                                </div>

                                <div className="mt-2 inputs"><span>Customer Type</span>
                                    <select name="need" className="form-control" required="required"
                                            data-error="Please specify your need.">
                                        <option value="" selected disabled>--Select Customer Type--</option>
                                        <option>Diamond</option>
                                        <option>Platinum</option>
                                        <option>Gold</option>
                                        <option>Silver</option>
                                        <option>Member</option>
                                    </select>
                                </div>


                                <div className="mt-2 inputs"><span>Date Of Birth</span>
                                    <input type="date" className="form-control" id="" name="birthday"
                                           min="1920-01-01"/>
                                </div>
                                <div className="mt-2 inputs"><span>Gender</span>
                                    <select name="need" className="form-control" required="required"
                                            data-error="Please specify your need.">
                                        <option value="" selected disabled>--Select Gender--</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>


                                <div className="mt-2 inputs"><span>CCCD Number</span>
                                    <input type="text" className="form-control" name="idCard"
                                           placeholder="9 or 12 number"/>
                                </div>

                                <div className="mt-2 inputs"><span>Phone Number</span>
                                    <input type="text" className="form-control" name="phoneNumber"
                                           placeholder="09xxxxxxxx/+849xxxxxxxx"/>
                                </div>


                                <div className="mt-2 inputs"><span>Email</span>
                                    <input type="text" className="form-control" name="email" placeholder="abc@abc.abc"/>
                                </div>
                                <div className="mt-2 inputs"><span>Address</span>
                                    <input type="text" className="form-control" id="address" name="address"/>
                                </div>
                                <div className="text-center mt-4 btn-group">

                                    <button type="submit" className=" btn btn-success integration"
                                            style="background-color: #653399">
                                        <b>Save</b>
                                    </button>
                                </div>
                                <div className="text-center mt-4 btn-group">

                                    <button className=" btn btn-dark ">
                                        <b>Back</b>
                                    </button>

                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
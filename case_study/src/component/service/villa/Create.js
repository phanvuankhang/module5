export function CreateVilla() {
return(
    <>
        <div className="container mt-5 mb-5">
            <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="card px-5 py-4">

                        <div style={{textalign: "center"}}>
                            <h1 style={{color: "#653399"}}>Create Villa</h1>
                        </div>
                        <form
                        >

                            <div className="mt-4 inputs"><span>Villa</span>
                                <input type="text" className="form-control"/>
                            </div>

                            <div className="mt-2 inputs"><span>Area</span>
                                <input type="password" className="form-control" id="password" name="password"
                                />
                            </div>


                            <div className="mt-2 inputs"><span>Rental Costs</span>
                                <input type="password" className="form-control" id="confirm" name="confirm"/>
                            </div>
                            <div className="mt-2 inputs"><span>Maximum Number Of People</span>
                                <input className="form-control" type="text"/>
                            </div>


                            <div className="mt-2 inputs"><span>Type Of Rent</span>
                                <select id="form_need" name="need" className="form-control" required="required"
                                        data-error="Please specify your need.">
                                    <option value="" selected disabled>--Select Type of Rent--</option>
                                    <option>Year</option>
                                    <option>Month</option>
                                    <option>Day</option>
                                    <option>Hours</option>
                                </select>
                            </div>

                            <div className="mt-2 inputs"><span>Room Standard</span>
                                <input className="form-control" type="email"/>
                            </div>


                            <div className="mt-2 inputs"><span>Area Swimming</span>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="mt-2 inputs"><span>Floor</span>
                                <input className="form-control" type="text"/>

                            </div>
                            <div className="mt-2 inputs"><span>Description Of Other Amenities</span>
                                <textarea className="form-control"></textarea>
                            </div>
                            <div className="text-center mt-4 btn-group">

                                <button type="submit" className=" btn btn-success integration"
                                        style={{backgroundColor: "#653399"}}>
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
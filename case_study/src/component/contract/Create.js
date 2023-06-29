import {Field, Formik} from "formik";
import Form from "react-validation/src/components/form";

export function ContractCreate() {
    return (
        <>
        <Formik initialValues={} onSubmit={}>
            <div className="container mt-5 mb-5">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="card px-5 py-4">

                            <div style="text-align: center">
                                <h1 style="color: #653399">Create Contract</h1>
                            </div>
                            <Form>

                                <div className="mt-4 inputs"><label>Contract Code</label>
                                    <Field type="text" className="form-control" id="startDate" name="startDate"
                                           min="1920-01-01"/>
                                </div>
                                <div className="mt-4 inputs"><label>Start Day</label>
                                    <Field type="date" className="form-control" id="" name="startDate"
                                           min="1920-01-01"/>
                                </div>

                                <div className="mt-2 inputs"><label>End Day</label>
                                    <Field type="date" className="form-control" id="endDate" name="endDate"
                                           min="1920-01-01"/>
                                </div>


                                <div className="mt-2 inputs"><label>Deposit</label>
                                    <Field type="number" className="form-control" id="deposit" name="deposit"
                                           placeholder="Deposit not less than 0"/>
                                </div>

                                <div className="mt-2 inputs"><label>Total payment amount</label>
                                    <Field type="number" className="form-control" name="idCard"
                                           placeholder="Total payment amount not less than 0"/>
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
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
        </Formik>
    )
}
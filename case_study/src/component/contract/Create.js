import {ErrorMessage, Field, Form, Formik} from "formik";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import {save} from "../../services/ContractService";
import * as Yup from 'yup';

export function ContractCreate() {
    const navigate = useNavigate();
    return (
        <>
            <Formik initialValues={{
                code: "",
                startDay: "",
                endDay: "",
                deposit: "",
                amount: ""
            }}
                    validationSchema={Yup.object({
                        startDay: Yup.date()
                            .required('Không được để trống'),
                        endDay: Yup.date()
                            .required('Không được để trống'),
                        deposit: Yup.number()
                            .required('Không được để trống')
                            .min(100, 'Lớn hơn 100'),
                        customerId: Yup.string()
                            .required('Không được để trống')
                            .min(1),
                        serviceId: Yup.string()
                            .required('Không được để trống'),
                    })}
                    onSubmit={async (values, {setSubmitting}) => {
                setSubmitting(false);
                await save({...values});

                await Swal.fire({
                    icon: "success",
                    title: "Thêm mới thành công",
                    timer: "2000"
                });
                navigate("/contract")
            }}>
                <Form>

                    <div className="container mt-5 mb-5">
                        <div className="row height d-flex justify-content-center align-items-center">
                            <div className="col-md-6">
                                <div className="card px-5 py-4">

                                    <div style={{textAlign: "center"}}>
                                        <h1 style={{color: "#653399"}}>Create Contract</h1>
                                    </div>
                                    <div className="mt-4 inputs"><label>Contract Code</label>
                                        <Field type="text" className="form-control" id="code" name="code"
                                               min="1920-01-01"/>
                                        <ErrorMessage name="code" component="span" className="error-r"/>
                                    </div>
                                    <div className="mt-4 inputs"><label>Start Day</label>
                                        <Field type="date" className="form-control" id="startDay" name="startDay"
                                               min="1920-01-01"/>
                                        <ErrorMessage name="startDay" component="span" className="error-r"/>
                                    </div>

                                    <div className="mt-2 inputs"><label>End Day</label>
                                        <Field type="date" className="form-control" id="endDay" name="endDay"
                                               min="1920-01-01"/>
                                        <ErrorMessage name="endDay" component="span" className="error-r"/>
                                    </div>


                                    <div className="mt-2 inputs"><label>Deposit</label>
                                        <Field type="number" className="form-control" id="deposit" name="deposit"/>
                                        <ErrorMessage name="deposit" component="span" className="error-r"/>
                                    </div>

                                    <div className="mt-2 inputs"><label>Total payment amount</label>
                                        <Field type="number" className="form-control" name="amount"
                                               id="amount"/>
                                        <ErrorMessage name="amount" component="span" className="error-r"/>
                                    </div>

                                    <div className="text-center mt-4 btn-group">

                                        <button type="submit" className=" btn btn-success integration"
                                                style={{backgroundColor: "#653399"}}>
                                            <b>Save</b>
                                        </button>
                                    </div>
                                    <div className="text-center mt-4 btn-group">
                                        <button className=" btn btn-dark "
                                                onClick={() => navigate('/contract')}>
                                            <b>Back</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
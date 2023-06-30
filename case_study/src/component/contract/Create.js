import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {findAll} from "../../services/ServiceService";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

export function ContractCreate() {
    const navigate=useNavigate();
        const [customer,setCustomer]=useState();
        const [service,setService]=useState([]);
        const [serviceId,setServiceID]=useState(0);

        const getCustomer=async ()=>{
            const res=await findAll();
            setCustomer(res.data);
        }

        const getService=async ()=>{
            const res=await findAll();
            setService(res.data);
        }
        useEffect(()=>{
            getCustomer();
            getService();
        },[])
    return (
        <>

            <div className="container mt-5 mb-5">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="card px-5 py-4">

                            <div style={{textAlign: "center"}}>
                                <h1 style={{color: "#653399"}}>Create Contract</h1>
                            </div>
                            <Formik initialValues={{
                                customerId:"",
                                startDate:"",
                                endDate:"",
                                deposit:0,
                                paymentAmount:0
                            }} onSubmit={ async (values, {setSubmitting}) => {
                                setSubmitting(false)
                                // await save({...values,paymentAmount:service.find(ser)=>ser.id})

                                Swal.fire({
                                    icon: "success",
                                    title: "Thêm mới thành công",
                                    timer: "2000"
                                })
                                navigate("/")
                            }}>
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
                                        <Field type="number" className="form-control" id="deposit" name="deposit"/>
                                    </div>

                                    <div className="mt-2 inputs"><label>Total payment amount</label>
                                        <Field type="number" className="form-control" name="paymentAmount" id="paymentAmount"/>
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
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
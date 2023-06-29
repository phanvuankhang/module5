import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import CustomerService from "../../services/CustomerService";
import {useNavigate} from "react-router-dom";

export function CustomerCreate() {
    const navigate=useNavigate();
    const [customer,setCustomer]=useState([]);
    const [customerType,setCustomerType]=useState([]);

    useEffect(()=>{
        const fetch=async ()=>{
            const res= await CustomerService.save();
            setCustomer(res);
        }
        fetch();
    },[])
    useEffect(()=>{
        const fetch=async ()=>{
            const res= await CustomerService.findALlType();
            setCustomer(res);
        }
        fetch();
    },[])
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="card px-5 py-4">

                            <div style={{textAlign: "center"}}>
                                <h1 style={{color: "#653399"}}>Create Customer</h1>
                            </div>
                            <Formik initialValues={{
                                "name": "",
                                "customerType": "",
                                "dateOfBirth": "",
                                "gender": "",
                                "cccd": "",
                                "phone": "",
                                "email": "",
                                "address": "",
                                "customerId": 0
                            }}
                                    validationSchema={{
                                    }}
                            onSubmit={(values)=>{
                                navigate("/")
                                CustomerService.save(values)
                            }}>
                                <Form>

                                    <div className="mt-4 inputs"><label>Customer Name</label>
                                        <Field type="text" className="form-control" id="name" name="name"
                                               placeholder="Enter your full name"/>
                                    </div>

                                    <div className="mt-2 inputs"><label>Customer Type</label>
                                            <select name="need" className="form-control"
                                                    data-error="Please specify your need.">
                                                <option value="0" selected disabled>--Select Customer Type--</option>
                                                <option>Diamond</option>
                                                <option>Platinum</option>
                                                <option>Gold</option>
                                                <option>Silver</option>
                                                <option>Member</option>
                                            </select>
                                    </div>


                                    <div className="mt-2 inputs"><label>Date Of Birth</label>
                                        <Field type="date" className="form-control" id="" name="birthday"
                                               min="1920-01-01"/>
                                    </div>
                                    <div className="mt-2 inputs"><label>Gender</label>
                                        <select name="need" className="form-control" required="required"
                                                data-error="Please specify your need.">
                                            <option value="" selected disabled>--Select Gender--</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>


                                    <div className="mt-2 inputs"><label>CCCD Number</label>
                                        <Field type="text" className="form-control" name="idCard"
                                               placeholder="9 or 12 number"/>
                                    </div>

                                    <div className="mt-2 inputs"><label>Phone Number</label>
                                        <Field type="text" className="form-control" name="phoneNumber"
                                               placeholder="09xxxxxxxx/+849xxxxxxxx"/>
                                    </div>


                                    <div className="mt-2 inputs"><label>Email</label>
                                        <Field type="text" className="form-control" name="email" placeholder="abc@abc.abc"/>
                                    </div>
                                    <div className="mt-2 inputs"><label>Address</label>
                                        <Field type="text" className="form-control" id="address" name="address"/>
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
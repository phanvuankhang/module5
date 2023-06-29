import Form from "react-validation/src/components/form";
import React from "react";
import {Field, Formik} from "formik";

export function EditVilla() {
    return(
        <>
            <Formik initialValues={}>
                <div className="container mt-5 mb-5">
                    <div className="row height d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <div className="card px-5 py-4">

                                <div style={{textAlign: "center"}}>
                                    <h1 style={{color: "#653399"}}>Edit Villa</h1>
                                </div>
                                <Form
                                >

                                    <div className="mt-4 inputs"><span>Villa</span>
                                        <Field type="text" className="form-control"/>
                                    </div>

                                    <div className="mt-2 inputs"><span>Area</span>
                                        <Field type="password" className="form-control" id="password" name="password"
                                        />
                                    </div>


                                    <div className="mt-2 inputs"><span>Rental Costs</span>
                                        <Field type="password" className="form-control" id="confirm" name="confirm"/>
                                    </div>
                                    <div className="mt-2 inputs"><span>Maximum Number Of People</span>
                                        <Field className="form-control" type="text"/>
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
                                        <Field className="form-control" type="email"/>
                                    </div>


                                    <div className="mt-2 inputs"><span>Area Swimming</span>
                                        <Field className="form-control" type="text"/>
                                    </div>
                                    <div className="mt-2 inputs"><span>Floor</span>
                                        <Field className="form-control" type="text"/>

                                    </div>
                                    <div className="mt-2 inputs"><span>Description Of Other Amenities</span>
                                        <Field className="form-control" as="textarea" />
                                    </div>
                                    <div className="text-center mt-4 btn-group">

                                        <button type="submit" className=" btn btn-success integration"
                                                style={{backgroundColor: "#653399"}}>
                                            <b>Update</b>
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
            </Formik>
        </>
    )
}
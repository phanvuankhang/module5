import React, {useState} from "react";
import {Field, Form, Formik} from "formik";

export function CreateService() {
    const [service, setService] = useState()
return(
    <>
        <Formik initialValues={{
            id: '',
            name: "",
            useArea: '',
            rentalCost: '',
            maximumPeople: '',
            rentalType: "Hour",
            roomStandard: "1",
            description: "",
            poolArea: '',
            floorsNumber: '',
            freeService: '',
            image: "",
            service: "villa"
        }}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setSubmitting(false)
                    let actions = null;
                    let statusCreate = true;
                    switch (values.service) {
                        case 'villa':
                            actions = createVilla({
                                id: '',
                                name: values.name,
                                useArea: values.useArea,
                                rentalCost: values.rentalCost,
                                maximumPeople: values.maximumPeople,
                                rentalType: values.rentalType,
                                roomStandard: values.roomStandard,
                                description: values.description,
                                poolArea: values.poolArea,
                                floorsNumber: values.floorsNumber,
                                image: values.image,
                                service: values.service
                            })
                            break;
                        case 'house':
                            actions = createHouse({
                                id: '',
                                name: values.name,
                                useArea: values.useArea,
                                rentalCost: values.rentalCost,
                                maximumPeople: values.maximumPeople,
                                rentalType: values.rentalType,
                                roomStandard: values.roomStandard,
                                description: values.description,
                                floorsNumber: values.floorsNumber,
                                image: values.image,
                                service: values.service
                            })
                            break;
                        case 'room':
                            actions = createRoom({
                                id: '',
                                name: values.name,
                                useArea: values.useArea,
                                rentalCost: values.rentalCost,
                                maximumPeople: values.maximumPeople,
                                rentalType: values.rentalType,
                                roomStandard: values.roomStandard,
                                description: values.description,
                                poolArea: values.poolArea,
                                floorsNumber: values.floorsNumber,
                                image: values.image,
                                service: values.service
                            })
                            break;
                        default:
                            statusCreate = false
                            console.log(values)
                    }
                    if (statusCreate && actions != null) {
                        dispatch(actions)
                        Swal.fire({
                            icon: "success",
                            title: "Create Success",
                            timer: "2000"
                        })
                        resetForm();
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Create Fail",
                            timer: "2000"
                        })
                    }
                }}>
        <div className="container mt-5 mb-5">
            <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="card px-5 py-4">

                        <div style={{textalign: "center"}}>
                            <h1 style={{color: "#653399"}}>Create Villa</h1>
                        </div>
                        <Form>

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
                                <Field className="form-control" as='textarea'/>
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


                    </div>

                </div>
            </div>
        </div>
        </Formik>
    </>
)
}
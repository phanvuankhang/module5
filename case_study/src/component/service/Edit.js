import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {findAllServiceType, findById, save} from "../../services/ServiceService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';

export function EditService() {
    const navigate = useNavigate();
    const [serviceType, setServiceType] = useState([]);
    const params = useParams();
    const [service, setService] = useState();


    useEffect(() => {
        const getServiceTypes = async () => {
            const res = await findAllServiceType();
            setServiceType(res.data);
        };
        getServiceTypes();
    }, []);

    useEffect(() => {
        const getService = async () => {
            const res = await findById(params.id);
            setService(res.data);
        };
        getService();
    }, [params.id]);


    if (!service) {
        return null;
    }

    return (
        <>
            <Formik initialValues={{
                id: service?.id,
                typeId: service?.typeId,
                name: service?.name,
                area: service?.area,
                rentalCost: service?.rentalCost,
                maxPeople: service?.maxPeople,
                rentalType: service?.rentalType,
                descriptionOtherAmenities: service?.descriptionOtherAmenities,
                roomStandard: service?.roomStandard,
                floors: service?.floors,
                areaSwimming: service?.areaSwimming,
                freeServiceIncluded: service?.freeServiceIncluded,
                img: service?.img,
            }}
                    validationSchema={Yup.object({
                        typeId: Yup.number(),
                        name: Yup.string()
                            .required(),
                        area: Yup.number()
                            .required(),
                        rentalCost: Yup.number()
                            .required(),
                        maxPeople: Yup.number()
                            .required(),
                        rentalType: Yup.string()
                            .required(),
                        descriptionOtherAmenities: Yup.string()
                            .required(),
                        img: Yup.string()
                            .required(),
                    })}
                    onSubmit={async (values, {setSubmitting}) => {
                        setSubmitting(false);
                        await save({
                            ...values, typeId: +values.typeId
                        })
                        navigate("/")
                    }}>
                <Form>
                    <div className="container mt-5 mb-5 ">
                        <div className="row height d-flex justify-content-center align-items-center">
                            <div className="col-md-6">
                                <div className="card px-5 py-4">
                                    <div style={{textAlign: "center"}}>
                                        <h2 style={{color: "black"}}>Edit Service</h2>
                                    </div>


                                    <div className=" mt-4 inputs">
                                        <label>Type</label>
                                        <Field as="select" name="typeId" id="typeId" className="form-control">
                                            <option value={0}>--Select Service Type--</option>
                                            {serviceType.map((type, index) => (
                                                <option key={index} value={type.id}>
                                                    {type.name}
                                                </option>
                                            ))}
                                        </Field>
                                    </div>
                                    <div className=" mt-4 inputs">
                                        <label>Name</label>
                                        <Field type="text" className="form-control" name="name"
                                        />
                                        <ErrorMessage name="name" component="span" className="error-r"/>

                                    </div>
                                    <div className=" mt-4 inputs">
                                        <label>Area</label>
                                        <Field type="number" className="form-control" name="area"/>
                                        <ErrorMessage name="area" component="span" className="error-r"/>
                                    </div>

                                    <div className="row mt-4  ">
                                        <div className="col-md-6 form-group" style={{paddingLeft: "0"}}>
                                            <label>Rental Cost</label>
                                            <Field type="number" name="rentalCost" className="form-control"/>
                                            <ErrorMessage name="rentalCost" component="span"
                                                          className="error-r"/>

                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0"
                                             style={{paddingRight: "0"}}>
                                            <label>Maximum People</label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="maxPeople"/>
                                            <ErrorMessage name="maxPeople" component="span"
                                                          className="error-r"/>

                                        </div>
                                    </div>
                                    <div className="mt-4 inputs">
                                        <label>Rental Type</label>
                                        <Field name="rentalType" className="form-control" as="select">
                                            <option value="Year">Year</option>
                                            <option value="Month">Month</option>
                                            <option value="Day">Day</option>
                                            <option value="Hour">Hour</option>
                                        </Field>
                                        <ErrorMessage name="rentalType" component="span" className="error-r"/>

                                    </div>
                                    <div className="mt-4 ">
                                        <label>Description Of Other Amenities (*House,Villa) </label>
                                        <Field
                                            type="text" className="form-control"
                                            name="descriptionOtherAmenities"/>
                                    </div>
                                    <div className="row mt-4  ">
                                        <div className="col-md-6 form-group" style={{paddingLeft: "0"}}>
                                            <label>Floor (*Villa)</label>
                                            <Field
                                                type="text"
                                                name="floors" className="form-control"/>
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0"
                                             style={{paddingRight: "0"}}>
                                            <label> Room Standard (*House,Villa)</label>
                                            <Field type="text" className="form-control" name="roomStandard"/>
                                        </div>
                                    </div>
                                    <div className="row mt-4  ">
                                        <div className="col-md-6 form-group" style={{paddingLeft: "0"}}>
                                            <label>Area Swimming pool (*House,Villa)</label>
                                            <Field
                                                type="text" name="areaSwimming" className="form-control"/>
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0"
                                             style={{paddingRight: "0"}}>
                                            <label>Free Service Included (*Room)</label>
                                            <Field className="form-control"
                                                   name="freeServiceIncluded">
                                            </Field>

                                        </div>
                                    </div>
                                    <div className=" mt-4 inputs">
                                        <label>Img</label>
                                        <Field type="text" className="form-control" name="img"/>
                                    </div>

                                    <div className="text-center mt-4 btn-group">
                                        <button type="submit" className=" btn btn-success" style={{backgroundColor: "#653399"}}>
                                            <b className="text-center">Update</b>
                                        </button>
                                    </div>
                                    <div className="text-center mt-4 btn-group">
                                        <button type="submit"
                                                className=" btn btn-success integration"
                                                onClick={() => navigate('/')}
                                                style={{backgroundColor: "black"}}>
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
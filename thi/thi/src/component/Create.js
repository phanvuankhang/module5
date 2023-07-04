import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {getListProductTypeAPI} from "../service/ProductTypeService";
import {useNavigate} from "react-router-dom";
import {saveProductAPI} from "../service/ProductService";
import * as Swag from "sweetalert2";

export function CreateProduct() {
    const navigate = useNavigate();
    const [productType, setProductType] = useState([]);

    useEffect(() => {
        const getListTypeProduct = async () => {
            const res = await getListProductTypeAPI();
            setProductType(res.data);
        }
        getListTypeProduct()
    }, [])
    return (
        <>
            <Formik initialValues={{
                name: "",
                price: "",
                typeId: 0
            }}
                    onSubmit={async (values,{isSubmitting})=>{
                        isSubmitting(false);
                        await saveProductAPI({...values,typeId: +values.typeId});
                        navigate("/");
                        await Swag.fire(

                        )
                    }}>
                <Form>
                    <div className="container mt-5 mb-5">
                        <div className="row height d-flex justify-content-center align-items-center">
                            <div className="col-md-6">
                                <div className="card px-5 py-4">

                                    <div style={{textAlign: "center"}}>
                                        <h1 style={{color: "#653399"}}>Create Product</h1>
                                    </div>
                                    <div className=" mt-4 inputs">
                                        <label>Name</label>
                                        <Field type="text" className="form-control" name="name" id="name"/>
                                        <ErrorMessage name="name" component="span" className="error"/>
                                    </div>
                                    <div className=" mt-4 inputs">
                                        <label>Price</label>
                                        <Field type="number" className="form-control" name="price" id="price"/>
                                        <ErrorMessage name="price" className="error" component="span"/>
                                    </div>
                                    <div className=" mt-4 inputs">
                                        <label>Product Type</label>
                                        <Field className="form-control" name="productTypeId"
                                               id="productTypeId" as="select">
                                            <option value={0}>Select Product Type</option>
                                            {
                                                productType.map((pt) => (
                                                    <option key={pt.id} value={pt.id}>
                                                        {pt.name}
                                                    </option>
                                                ))
                                            }
                                        </Field>
                                        <ErrorMessage name="price" className="error" component="span"/>
                                    </div>

                                    <div className="text-center mt-4 btn-group">
                                        <button type="submit" className=" btn btn-success integration"
                                                style={{backgroundColor: "#653399"}}>
                                            <b>Save</b>
                                        </button>
                                    </div>
                                    <div className="text-center mt-4 btn-group">
                                        <button type="submit"
                                                className=" btn btn-success integration"
                                                onClick={() => navigate('/product')}
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
import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {getListProductTypeAPI} from "../service/ProductTypeService";
import {useNavigate} from "react-router-dom";
import {editProductAPI, getProductAPI} from "../service/ProductService";
import * as Swal from "sweetalert2";
import {useParams} from "react-router-dom";
import * as yup from 'yup';


export function EditProduct() {
    const navigate = useNavigate();
    const params = useParams();
    const [productType, setProductType] = useState([]);
    const [product, setProduct] = useState();

    useEffect(() => {
        const getProduct = async () => {
            const res = await getProductAPI(params.id);
            setProduct(res.data);
        }
        getProduct();
    }, [params.id])

    useEffect(() => {
        const getListProductType = async () => {
            const res = await getListProductTypeAPI();
            setProductType(res.data);
        }
        getListProductType();

    }, [])
    if (!product) {
        return null;
    }
    return (
        <>
            <Formik initialValues={{
                id: product?.id,
                name: product?.name,
                price: product?.price,
                productTypeId: product?.productTypeId
            }}
                    validationSchema={yup.object({
                        name: yup.string().required("Không được để trống").matches(/^(IP-)\d{3}$/, "Phải đúng định dạng(IP=001)"),
                        price: yup.number().required("Không được để trống"),
                        productTypeId: yup.number().min(1)
                    })}
                    onSubmit={async (values, {setSubmitting}) => {
                        setSubmitting(false);
                        await editProductAPI({...values, productTypeId: +values.productTypeId});
                        navigate("/product");
                        await Swal.fire({
                            icon: "succes",
                            title: "Sửa thành công",
                            timer: "2000"
                        })
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

                                    </div>
                                    <div className=" mt-4 inputs">
                                        <label>Price</label>
                                        <Field type="number" className="form-control" name="price" id="price"/>

                                    </div>
                                    <div className=" mt-4 inputs">
                                        <label>Product Type</label>
                                        <Field className="form-control" name="productTypeId"
                                               id="productTypeId" as="select">
                                            <option value={0}>---Select Product Type---</option>
                                            {
                                                productType && productType.map((type, index) => (
                                                    <option key={index} value={type.id}>
                                                        {type.name}
                                                    </option>
                                                ))
                                            }
                                        </Field>
                                    </div>

                                    <div className="text-center mt-4 btn-group">
                                        <button type="submit" className=" btn btn-success integration"
                                                style={{backgroundColor: "#653399"}}>
                                            <b>Update</b>
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
    );
}
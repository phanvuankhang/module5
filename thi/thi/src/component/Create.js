
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as Swal from "sweetalert2";
import {createOrdersAPI, getListOrdersAPI} from "../service/OrdersService";
import {useEffect, useState} from "react";

export function CreateProduct() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [product, setProduct] = useState([]);

    const getProduct =async (id) =>{

        for (let index = 0; index < orders.length; index++) {
            if(orders[index].id === id){
                setProduct(orders[index])
            }

        }
    }
    const getListOrders = async () => {
        const res = await getListOrdersAPI();
        setOrders(res.data);
    }
    useEffect(() => {
        getListOrders()
    }, [])

    return (
        <>
            <Formik initialValues={{
                dateBuy: "",
                totalMoney: 0,
                quantity: 0,
                product: "",
                price:0
            }}
                    onSubmit={async (values, {setSubmitting}) => {
                        setSubmitting(false);
                        await createOrdersAPI({
                            ...values,product:product,
                            totalMoney: product.price * values.quantity
                        })
                        navigate("/")
                        await Swal.fire({
                                icon: "success",
                                title: "Thêm mới thành công",
                                timer: "2000"
                            }
                        )
                    }}>
                <Form>
                    <div className="container mt-5 mb-5">
                        <div className="row height d-flex justify-content-center align-items-center">
                            <div className="col-md-6">
                                <div className="card px-5 py-4">

                                    <div style={{textAlign: "center"}}>
                                        <h1 style={{color: "#653399"}}>Thêm Mới Sản Phẩm</h1>
                                    </div>
                                    <div className=" mt-4 inputs">
                                        <label>Sản phẩm</label>
                                        <Field className="form-control" name="typeId"
                                               id="typeId" as="select" onClick={(val) => getProduct(val.target.value)}>
                                            <option value="">Chọn Sản Phẩm</option>
                                            {
                                                orders.map((o) => (
                                                    <option key={o.id} value={o.id}>
                                                        {o.product.name}
                                                    </option>
                                                ))
                                            }
                                        </Field>
                                        <ErrorMessage className="error" name="typeId" component="span"/>
                                    </div>
                                    <div className=" mt-4 inputs">
                                        <label>Giá(USD)</label>
                                        <Field type="number" className="form-control" name="price" id="price"/>
                                        <ErrorMessage className="error" name="price" component="span"/>
                                    </div>
                                    <div className=" mt-4 inputs">
                                        <label>Số lượng</label>
                                        <Field type="number" className="form-control" name="quantity" id="quantity"/>
                                        <ErrorMessage className="error" name="quantity" component="span"/>
                                    </div>
                                    <div className="text-center mt-4 btn-group">
                                        <button type="submit" className=" btn btn-success integration"
                                                style={{backgroundColor: "#653399"}}>
                                            <b>Thêm</b>
                                        </button>
                                    </div>
                                    <div className="text-center mt-4 btn-group">
                                        <button type="submit"
                                                className=" btn btn-success integration"

                                                style={{backgroundColor: "black"}} onClick={() => navigate("/")}>
                                            <b>Quay Lại</b>
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
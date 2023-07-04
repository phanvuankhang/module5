import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {deleteOrdersAPI, getListOrdersAPI} from "../service/OrdersService";
import * as Swal from "sweetalert2";

export function ListOrders() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    const deleteInformation = (id,name) => {
        const res = async () => {
            try {
                await Swal.fire({
                    title: 'Delete Confirmation',
                    icon: "warning",
                    text: `Are you sure to removed ${name}`,
                    confirmButtonText: 'Delete',
                    confirmButtonColor: 'red',
                    cancelButtonText: 'Cancel',
                    cancelButtonColor: 'grey',
                    showCancelButton: true
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        await deleteOrdersAPI(id);
                        await getListOrders();
                        await Swal.fire('Delete Successfully', `${name} has been deleted.`, 'success')
                    }

                })
            } catch (e) {
                console.log(e)
            }
        }
        res()
    }
        const getListOrders = async () => {
            const res = await getListOrdersAPI();
            setOrders(res.data);
        }
        useEffect(() => {
            getListOrders()
        }, [])

    if (!orders) {
        return null;
    }
    return (

        <>
            <h1 style={{textAlign: "center"}}>Thống kê đơn hàng</h1>
            <Formik initialValues={{
                typeId: "",
            }}
                    onSubmit={async (values) => {

                    }}>
                <Form>
                    <Field style={{marginLeft: "5px"}} name="typeId" as="select">
                        <option value="">Chọn sản phẩm</option>
                        {
                            orders.map((o) => (
                                <option key={o.id} value={o.id}>
                                    {o.product.productType}
                                </option>
                            ))
                        }
                    </Field>
                    <button style={{marginLeft: "5px"}} className="btn btn-success" type="submit">Tìm kiếm</button>
                </Form>
            </Formik>
            <button style={{marginLeft: "88vw"}} className="btn btn-success"
                    onClick={() => navigate("/create-form")}>Thêm mới sản phẩm
            </button>
            <table className="table table-striped table-inverse table-responsive">
                <thead className="thead-inverse">
                <tr>
                    <th>Mã đơn hàng</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá(USD)</th>
                    <th>Loại sản phẩm</th>
                    <th>Ngày mua</th>
                    <th>Số lượng</th>
                    <th>Tổng tiền(USD)</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    orders.map((o) => {
                        return (
                            <tr key={o.id}>
                                <td scope="row">{o.id}</td>
                                <td>{o.product.name}</td>
                                <td>{o.product.price}</td>
                                <td>{o.product.productType}</td>
                                <td>{o.dateBuy}</td>
                                <td>{o.quantity}</td>
                                <td>{o.totalMoney}</td>
                                <td>
                                    <button className="btn btn-outline-warning">Sửa</button>
                                    <button style={{marginLeft: "5px"}} className="btn btn-outline-danger"
                                            onClick={() => deleteInformation(o.id, o.product.name)}>Xóa
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}
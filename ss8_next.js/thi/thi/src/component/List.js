import React, {useEffect, useState} from "react";
import {deleteProductAPI, getListProductAPI, searchProductAPI} from "../service/ProductService";
import {getListProductTypeAPI} from "../service/ProductTypeService";
import {useNavigate} from "react-router-dom";
import * as Swal from "sweetalert2";
import {Formik, Form, Field} from "formik";



export function ProductList() {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [productType, setProductType] = useState([]);

    const deleteInformation  = (id, name) => {
        const res = async () => {
            try {
                await Swal.fire({
                    title:'Delete Confirmation',
                    icon:"warning",
                    text:`Are you sure to removed ${name}`,
                    confirmButtonText: 'Delete',
                    confirmButtonColor: 'red',
                    cancelButtonText: 'Cancel',
                    cancelButtonColor: 'grey',
                    showCancelButton: true
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        await deleteProductAPI(id);
                        await getListProductAPI();
                        await Swal.fire('Delete Successfully',`${name} has been deleted.`,'success')

                    }

                })
            }catch (e) {
                console.log(e)
            }
        }
        res()
    }

    const getListProduct = async () => {
        const res = await getListProductAPI();
        setProduct(res.data);
    }

    const getListProductType = async () => {
        const res = await getListProductTypeAPI();
        setProductType(res.data);
    }
    useEffect(() => {
        getListProduct();
        getListProductType();
    }, [])

    if(!product){
        return null;
    }
    return (
        <>
            <Formik initialValues={{
                name:"",
                productTypeId:""
            }}
                    onSubmit={async (values)=>{
                const res=await searchProductAPI(values.name,values.productTypeId);
                setProduct(res.data)
            }}>
                <Form>
                   <Field name="name" />
                   <Field name="productTypeId" as="select">
                    <option value="">Select Type Product</option>
                    {
                        productType.map((pt)=>(
                            <option key={pt.id} value={pt.id}>
                                {pt.name}
                            </option>
                        ))
                    }
                   </Field>
                   <button type="submit">Search</button>
                </Form>
            </Formik>
            <button type="button" className="bnt btn-success" onClick={()=>navigate("/product/create-form")}>Add New</button>
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Product Type</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                  product && product.map((p) => {
                        return (
                            <tr key={p.id}>
                                <td scope="row">{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                                <td>{productType.find((pt) => pt.id === p.productTypeId)?.name}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-danger" onClick={() => deleteInformation(p.id, p.name)}>
                                        Delete
                                    </button>
                                    <button className="btn btn-outline-warning" onClick={()=>navigate(`/product/${p.id}/edit-form`)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    );
}

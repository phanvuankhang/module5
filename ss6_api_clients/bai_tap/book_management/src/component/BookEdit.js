import {Field, Form, Formik} from "formik";
import * as BookService from "../service/BookService";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";


export function BookEdit() {
    const navigate=useNavigate();
    const param=useParams();
    const [book,setBook]=useState();
    useEffect(()=>{
        const fetchApi=async ()=>{
            const result=await BookService.findById(param.id)
            setBook(result);
        }
        fetchApi()
    },[param.id])
    if (!book){
        return null
    }
    return(
        <>
            <h1>Add a new Book</h1>
            <Formik initialValues={{
                title:book?.title,
                quantity:book?.quantity
            }}
                    onSubmit={(values) => {
                        const edit = async () => {
                            await BookService.edit(param.id,values)
                            navigate("/")
                        }
                        edit()
                    }}>
                {
                    <Form>

                        <div className="mt-4 inputs"><label>Title</label>
                            <Field type="text" className="form-control" name="title"/>
                        </div>
                        <div className="mt-4 inputs"><label>Quantity</label>
                            <Field type="number" className="form-control" name="quantity"/>
                        </div>
                        <button type="submit" className=" btn btn-success integration">
                            <b>Add</b>
                        </button>
                    </Form>
                }
            </Formik>
        </>
    )
}
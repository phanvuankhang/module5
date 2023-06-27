import {useNavigate} from "react-router-dom";
import React from "react";
import {Field, Form, Formik} from "formik";
import * as BookService from '../service/BookService'
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {RotatingLines} from "react-loader-spinner";


export function BookCreate() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Add a new Book</h1>
            <Formik initialValues={{
                title: '',
                quantity: ''
            }}
                    onSubmit={(values) => {
                        const create = async () => {
                            await BookService.save(values)
                            navigate("/")
                        }
                        create()
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
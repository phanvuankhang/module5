import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import {RotatingLines} from "react-loader-spinner";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export function ContactForm() {
    return (
        <>
            <Formik initialValues={{
                name: '',
                email: '',
                phone: '',
                message: ''
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Can\'t be left blank.'),
                        email: Yup.string().required('Can\'t be left blank.').matches(/^[a-zA-Z0-9+.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Incorrect format'),
                        phone: Yup.string().required('Can\'t be left blank.'),
                        message: Yup.string().required('Can\'t be left blank.')
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            setSubmitting(false)
                            toast(`Add contact successfully!!!`);
                        }, 1000)

                    }}>
                {
                    ({isSubmitting}) => (
                        <div className="container mt-5 mb-5">
                            <div className="row height d-flex justify-content-center align-items-center">
                                <div className="col-md-6">
                                    <div className="card px-5 py-4">

                                        <div style={{textAlign: "center"}}>
                                            <h1 style={{color: "#653399"}}>Contact Form</h1>
                                        </div>
                                        <Form>

                                            <div className="mt-4 inputs"><span>Name</span>
                                                <Field type="text" className="form-control" name='name'
                                                       placeholder="Nguyen Van A"/>
                                            </div>
                                            <ErrorMessage name='name' component='span' className='form-err'/>

                                            <div className="mt-2 inputs"><span>Email</span>
                                                <Field type="text" className="form-control" id="password" name='email'
                                                       placeholder="example@example.com"/>
                                            </div>
                                            <ErrorMessage name='email' component='span' className='form-err'/>

                                            <div className="mt-2 inputs"><span>Phone</span>
                                                <Field type="number" className="form-control" id="confirm" name='phone'
                                                       placeholder="090xxxxxx"/>
                                            </div>
                                            <ErrorMessage name='phone' component='span' className='form-err'/>

                                            <div className="mt-2 inputs"><span>Message</span>
                                                <Field className="form-control" component='textarea' name='message'/>
                                            </div>
                                            <ErrorMessage name='message' component='span' className='form-err'/>
                                            {
                                                isSubmitting ?
                                                    <RotatingLines
                                                        strokeColor="grey"
                                                        strokeWidth="5"
                                                        animationDuration="0.75"
                                                        width="30"
                                                        visible={true}
                                                    />
                                                    :
                                                    <div className="text-center mt-4 btn-group">

                                                        <button type="submit" className=" btn btn-success integration">
                                                            <b>Submit</b>
                                                        </button>

                                                    </div>
                                            }

                                        </Form>

                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                }
            </Formik>
        </>
    )
}
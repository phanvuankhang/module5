import React, {useEffect, useState} from "react";
import axios from "axios";
import * as TodoService from "../service/TodoService"
import {Field, Form, Formik} from "formik";
import {ToastContainer, toast} from 'react-toastify'
import {RotatingLines} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css'

export function TodoList() {
    const [todo, setTodo] = useState([])
    const fetchApi = async () => {
        const result = await TodoService.findAll()
        setTodo(result)
    }
    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <>
            <h1>Todo List</h1>
            <Formik initialValues={{
                id:'',
                title:''
            }}
                    onSubmit={(values, {setSubmitting,resetForm}) => {
                        const create = async () => {
                            setSubmitting(false)
                           await TodoService.save(values)
                            toast('Add todo successfully!!!')
                            fetchApi()
                            resetForm()
                        }
                        create()
                    }}>
                {
                    ({isSubmitting}) => (
                        <Form>
                            <Field type="text" className="form-control" name='title'/>
                            {isSubmitting ?
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
                    )
                }
            </Formik>
            {
                todo.map((todo)=>(
                    <ul key={todo.id}>
                        <li>{todo.title}</li>
                    </ul>
                ))
            }
        </>
    )
}
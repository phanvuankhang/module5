import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {ToastContainer, toast} from "react-toastify";
import {RotatingLines} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css'

export function MedicalDeclaration() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    idNumber: '',
                    dayBirth: '',
                    gender: '',
                    nationality: '',
                    workingCompany: '',
                    workingParts: '',
                    healthInsurance: '',
                    province: '',
                    district: '',
                    wards: '',
                    numberOfHouses: '',
                    email: '',
                    phone: '',
                    move: '',
                    symptom: '',
                    contact: ''
                }}
                validationSchema={Yup.object(
                    {
                        name: Yup.string()
                            .required('Required'),
                        idNumber: Yup.number().required('Required'),
                        dayBirth: Yup.number().required('Required').min(1900, 'Must be greater than 1900'),
                        nationality: Yup.string().required('Required'),
                        province: Yup.string().required('Required'),
                        district: Yup.string().required('Required'),
                        wards: Yup.string().required('Required'),
                        numberOfHouses: Yup.string().required('Required'),
                        email: Yup.string()
                            .required('Required').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, 'Invalid email address'),
                        phone: Yup.number()
                            .required('Required')
                    }
                )}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false)
                        toast('Add medical declaration successfully!!!');
                    }, 1000)
                }}
            >
                {
                    ({isSubmitting}) => (
                        <div className="container ">
                            <h1 className="text-center">Tờ khai y tế</h1>
                            <Form>
                                <div className="mb-3">
                                    <label className="form-label">Họ tên</label>
                                    <Field type="text" className="form-control"
                                           name="name"
                                    />
                                    <ErrorMessage name="name" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Số hộ chiếu/CMND</label>
                                    <Field type="text" className="form-control"
                                           name="idNumber"
                                    />
                                    <ErrorMessage name="idNumber" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Năm sinh</label>
                                    <Field type="text" className="form-control"
                                           name="dayBirth"
                                    />
                                    <ErrorMessage name="dayBirth" component='span' className="error-mess"/>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Giới tính</label>
                                    <div className="form-check form-check-inline">
                                        <label className="form-label">Nam</label>
                                        <Field type="radio" className="form-check-input"
                                               value="nam"
                                               name="gender"
                                        />
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <label className="form-label">Nữ</label>
                                        <Field type="radio" className="form-check-input"
                                               value="nu"
                                               name="gender"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Quốc tịch</label>
                                    <Field type="text" className="form-control"
                                           name="nationality"
                                    />
                                    <ErrorMessage name="nationality" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Công ty làm việc</label>
                                    <Field type="text" className="form-control"
                                           name="workingCompany"
                                    />
                                    <ErrorMessage name="workingCompany" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Bộ phận làm việc</label>
                                    <Field type="text" className="form-control"
                                           name="workingParts"
                                    />
                                    <ErrorMessage name="workingParts" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3 ">
                                    <label className="form-label">Có thẻ bảo hiểm y tế</label>
                                    <Field type="checkbox" className="form-check-input"
                                           value="có"
                                           name="healthInsurance"
                                    />
                                </div>
                                <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                                <div className="mb-3">
                                    <label className="form-label">Tỉnh Thành</label>
                                    <Field type="text" className="form-control"
                                           name="province"
                                    />
                                    <ErrorMessage name="province" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Quận/Huyện</label>
                                    <Field type="text" className="form-control"
                                           name="district"
                                    />
                                    <ErrorMessage name="district" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phường/xã</label>
                                    <Field type="text" className="form-control"
                                           name="wards"
                                    />
                                    <ErrorMessage name="wards" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Số nhà, phố, tổ dân phố /thôn /đội</label>
                                    <Field type="text" className="form-control"
                                           name="numberOfHouses"
                                    />
                                    <ErrorMessage name="numberOfHouses" component='span' className="error-mess"/>
                                </div>


                                <div className="mb-3">
                                    <label className="form-label">Điện thoại</label>
                                    <Field type="number" className="form-control"
                                           name="phone"
                                    />
                                    <ErrorMessage name="phone" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <Field type="text" className="form-control"
                                           name="email"
                                    />
                                    <ErrorMessage name="email" component='span' className="error-mess"/>
                                </div>
                                <div className="mb-3">
                                    <h3>Trong vòng 14 ngày qua Anh/chị có đến quốc gia vùng lãnh thỗ nào(có thể đi qua
                                        nhiều quốc gia)</h3>
                                    <Field type="text" className="form-control" as="textarea"
                                           name="move"
                                    />
                                </div>
                                <h3>Trong vòng 14 ngày qua Anh/chị có xuất hiện triệu chứng nào sau đây không?</h3>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="sốt"
                                           name="symptom"
                                    />
                                    <label className="form-check">Sốt</label>
                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="ho"
                                           name="symptom"
                                    />
                                    <label className="form-check">Ho</label>

                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Khó thở"
                                           name="symptom"
                                    />
                                    <label className="form-check">Khó thở</label>

                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Viêm phổi"
                                           name="symptom"
                                    />
                                    <label className="form-check">Viêm phổi</label>

                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Đau họng"
                                           name="symptom"
                                    />
                                    <label className="form-check">Đau họng </label>

                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Mệt mỏi"
                                           name="symptom"
                                    />
                                    <label className="form-check">Mệt mỏi</label>

                                </div>


                                <h3>Trong vòng 14 ngày qua Anh/chị có tiếp xúc với?</h3>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19"
                                           name="contact"
                                    />
                                    <label className="form-check">Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</label>
                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Người từ nước có bệnh COVID-19"
                                           name="contact"
                                    />
                                    <label className="form-check">Người từ nước có bệnh COVID-19</label>

                                </div>
                                <div className="mb-3 d-flex">
                                    <Field type="checkbox" className="form-check-input"
                                           value="Người có biểu hiện (số, ho, khó thở, viêm phổi)"
                                           name="contact"
                                    />
                                    <label className="form-check">Người có biểu hiện (số, ho, khó thở, viêm
                                        phổi)</label>

                                </div>
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
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                }

                            </Form>
                        </div>
                    )
                }
            </Formik>
        </>
    )
}
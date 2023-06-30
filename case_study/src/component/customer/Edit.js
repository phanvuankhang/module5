import * as Swal from "sweetalert2";
import {edit, findAllCustomerType, findById} from "../../services/CustomerService";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";

export function CustomerEdit() {
    const navigate = useNavigate();
    const [customerType, setCustomerType] = useState([]);
    const params=useParams();
    const [customer, setCustomer] = useState();


    useEffect(() => {
        const getCustomerTypes = async () => {
            const res = await findAllCustomerType();
            setCustomerType(res.data);
        };
        getCustomerTypes();
    }, []);

    useEffect(() => {
        const getCustomer = async () => {
            const res = await findById(params.id);
            setCustomer(res.data);
        };
        getCustomer();
    }, [params.id]);


    if (!customer) {
        return null;
    }

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="card px-5 py-4">

                            <div style={{textAlign: "center"}}>
                                <h1 style={{color: "#653399"}}>Edit Customer</h1>
                            </div>
                            <Formik initialValues={{
                                id:customer?.id,
                                name: customer?.name,
                                customerTypeId: customer?.customerTypeId,
                                dateOfBirth: customer?.dateOfBirth,
                                gender: customer?.gender,
                                cccd: customer?.cccd,
                                phone: customer?.phone,
                                email:customer?.email,
                                address:customer?.address,
                            }}
                                    validationSchema={Yup.object({
                                        // name: Yup.string()
                                        //     .required('Không được để trống')
                                        //     .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,'Phải đúng định dạng tên, vd (Huynh Van A)'),
                                        // typeId: Yup.string()
                                        //     .required('Không được để trống'),
                                        // birthday: Yup.date()
                                        //     .required('Không được để trống'),
                                        // gender: Yup.string()
                                        //     .required('Không được để trống'),
                                        // cmnd: Yup.string()
                                        //     .required('Không được để trống')
                                        //     .matches( /^\d{9}$/,'Chứng minh nhân nhân đủ 9 số'),
                                        // phone: Yup.string()
                                        //     .required('Không được để trống')
                                        //     .matches(/^((\+84)|0)[0-9]{9}$/,'Số điện thoại bắt buộc 10 số bắt đầu bằng 0'),
                                        // email: Yup.string()
                                        //     .required('Không được để trống')
                                        //     .matches(/^[a-zA-Z0-9+_-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Nhập đúng định dạng Email(vd adc098@gmail.com)"),
                                        // address:Yup.string()
                                        //     .required('Không được để trống')
                                    })}
                                    onSubmit={async (values, {setSubmitting}) => {
                                        setSubmitting(false)
                                        await edit({...values, customerTypeId: +values.customerTypeId});

                                        Swal.fire({
                                            icon: "success",
                                            title: "Thêm mới thành công",
                                            timer: "2000"
                                        });
                                        navigate("/customer");
                                    }}>
                                <Form>
                                    <div className="mt-4 inputs"><label>Customer Name</label>
                                        <Field type="text" className="form-control" id="name" name="name"
                                               placeholder="Enter your full name"/>
                                    </div>

                                    <div className="mt-2 inputs"><label>Customer Type</label>
                                        <Field name="customerTypeId" id="customerTypeId" className="form-control"
                                               as="select">
                                            <option value={0}>--Select Customer Tpe--</option>
                                            {customerType.map((ct) => (
                                                <option key={ct.id} value={ct.id}>
                                                    {ct.name}
                                                </option>
                                            ))}
                                        </Field>
                                    </div>


                                    <div className="mt-2 inputs"><label>Date Of Birth</label>
                                        <Field type="date" className="form-control" id="dateOfBirth"
                                               name="dateOfBirth"
                                               min="1920-01-01"/>
                                    </div>
                                    <div className="mt-2 inputs"><label>Gender</label>
                                        <Field name="gender" id="gender" className="form-control" as="select"
                                               data-error="Please specify your need.">
                                            <option value="" selected disabled>--Select Gender--</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </Field>
                                    </div>


                                    <div className="mt-2 inputs"><label>CCCD Number</label>
                                        <Field type="text" className="form-control" name="cccd" id="cccd"
                                               placeholder="9 or 12 number"/>
                                    </div>

                                    <div className="mt-2 inputs"><label>Phone Number</label>
                                        <Field type="text" className="form-control" name="phone" id="phone"
                                               placeholder="09xxxxxxxx/+849xxxxxxxx"/>
                                    </div>


                                    <div className="mt-2 inputs"><label>Email</label>
                                        <Field type="text" className="form-control" name="email" id="email"
                                               placeholder="abc@abc.abc"/>
                                    </div>
                                    <div className="mt-2 inputs"><label>Address</label>
                                        <Field type="text" className="form-control" id="address" name="address"/>
                                    </div>
                                    <div className="text-center mt-4 btn-group">

                                        <button type="submit" className=" btn btn-success integration"
                                                style={{backgroundColor: "#653399"}}>
                                            <b>Update</b>
                                        </button>
                                    </div>
                                    <div className="text-center mt-4 btn-group">

                                        <button onClick={() => navigate('/customer')} className=" btn btn-dark ">
                                            <b>Back</b>
                                        </button>

                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
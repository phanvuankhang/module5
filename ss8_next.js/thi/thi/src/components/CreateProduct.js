import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import {createProductAPI, getListProductTypesAPI} from "../service/product.service";
import { useNavigate } from "react-router";

export default function CreateProductPage() {
  const [productTypes, setProductTypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProductTypes = async () => {
      const res = await getListProductTypesAPI();
      setProductTypes(res.data);
    };

    getProductTypes();
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          price: 0,
          productTypeId: null,
        }}
        validationSchema={yup.object({
          name: yup.string().required(),
          price: yup.number().required().min(500),
          productTypeId: yup.number().required().min(1),
        })}
        onSubmit={async (values) => {
          await createProductAPI({
            ...values,
            productTypeId: +values.productTypeId,
          });
          navigate("/products");
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field name="name" id="name" type="text" />
            <ErrorMessage name="name" component="span" />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <Field name="price" id="price" type="number" />
            <ErrorMessage name="price" component="span" />
          </div>
          <div>
            <label htmlFor="productType">Product Type:</label>
            <Field name="productTypeId" id="typeId" as="select">
              <option value={0}>Please select</option>
              {productTypes.map((pt, index) => (
                <option key={index} value={pt.id}>
                  {pt.name}
                </option>
              ))}
            </Field>
            <ErrorMessage name="productTypeId" component="span" />
          </div>
          <div>
            <input type="submit" />
          </div>
        </Form>
      </Formik>
    </>
  );
}

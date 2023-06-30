import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { getListProductTypesAPI } from "../service/product.service";
import {
  createProductAPI,
  getProductAPI,
  updateProductAPI,
} from "../service/product.service";
import { useNavigate, useParams } from "react-router";

export default function UpdateProductPage() {
  const [productTypes, setProductTypes] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProductTypes = async () => {
      const res = await getListProductTypesAPI();
      setProductTypes(res.data);
    };
    getProductTypes();
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      const res = await getProductAPI(params.id);
      setProduct(res.data);
    };
    getProduct();
  }, [params.id]);

  if (!product) {
    return null;
  }

  return (
    <>
      <Formik
        initialValues={{
          id: product?.id,
          name: product?.name,
          price: product?.price,
          productTypeId: product?.productTypeId,
        }}
        validationSchema={yup.object({
          id: yup.number().required(),
          name: yup.string().required(),
          price: yup.number().required().min(500),
          productTypeId: yup.number().required().min(1),
        })}
        onSubmit={async (values) => {
          await updateProductAPI({
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
            <Field name="productTypeId" id="productType" as="select">
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

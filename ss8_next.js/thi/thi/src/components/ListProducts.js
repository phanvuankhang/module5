import { useEffect, useState } from "react";
import { getListProductsAPI } from "../service/product.service";
import { getListProductTypesAPI } from "../service/product.service";
import { Link } from "react-router-dom";

export default function ListProductsPage() {
  const [products, setProducts] = useState([]);
  const [productTypes, setProductTypes] = useState([]);

  const getListProducts = async () => {
    const res = await getListProductsAPI();
    setProducts(res.data);
  };

  const getListProductTypes = async () => {
    const res = await getListProductTypesAPI();
    setProductTypes(res.data);
  };

  useEffect(() => {
    getListProducts();
    getListProductTypes();
  }, []);

  return (
    <>
      <Link to={"/products/creation-form"}>Create</Link>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Product Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => {
            return (
              <tr key={index}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>
                  {productTypes.find((pt) => pt.id === p.productTypeId)?.name}
                </td>
                <td>
                  <Link to={`/products/${p.id}/edit-form`}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

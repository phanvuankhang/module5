import axios from "axios";

export function getListProductTypeAPI() {
    return axios.get(" http://localhost:8080/productType");
}
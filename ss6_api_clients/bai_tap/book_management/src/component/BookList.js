import {useEffect, useState} from "react";
import axios from "axios";
import * as BookService from "../service/BookService"
import {NavLink, useNavigate} from "react-router-dom";

export function BookList() {
    const [idDelete,setIdDelete]=useState();
    const [nameDelete,setNameDelete]=useState();
    const navigate = useNavigate();
    const [book, setBook] = useState([])

    const prop=async (id,name)=>{
        setIdDelete(id)
        setNameDelete(name)
    }
    const handleDelete=async (id)=>{
        await BookService.deleteByID(id);
        const result=await BookService.findAll();
        setBook(result);
    }
    useEffect(() => {
        const fetchApi = async () => {
            const result = await BookService.findAll()
            setBook(result)
        }
        fetchApi()
    }, [])
    return (
        <>
            <div>
                <h1>Library</h1>
                <button className="btn btn-success" onClick={()=>navigate("/create")}>Add a new Book</button>
            </div>
            <table className="table table-striped table-inverse table-responsive">
                <thead className="thead-inverse">
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    book.map((book) => (
                        <tr key={book.id}>
                            <td scope="row">{book.title}</td>
                            <td scope="row">{book.quantity}</td>
                            <td scope="row">
                                <div>
                                    <button className="btn btn-primary">
                                    <NavLink style={{color:"white"}} to={'/edit/'+book.id}>
                                        Edit
                                    </NavLink>
                                    </button>
                                    <button style={{marginLeft:"10px"}} type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>prop(book.id,book.title)}>
                                       Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
                </tbody>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            </div>
                            <div className="modal-body">
                                Do you want to delete this <span>{nameDelete}</span>?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                </button>
                                <button type="submit" className="btn btn-danger"  data-bs-dismiss="modal" onClick={()=>handleDelete(idDelete)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </table>
        </>
    )
}
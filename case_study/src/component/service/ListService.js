import 'bootstrap/dist/css/bootstrap.min.css'
import './listService.css'
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {findAll, findAllServiceType} from "../../services/ServiceService";
import {deleteByID} from "../../services/ServiceService";

export function ListService() {
    const navigate = useNavigate();
    const [service, setService] = useState([]);
    const [typeService,setTypeService]=useState([]);
    const [idDelete, setIdDelete] = useState();
    const [nameDelete, setNameDelete] = useState();
    const propsDelete = async (id, name) => {
        setIdDelete(id)
        setNameDelete(name)
    }
    const handleDelete = async (id) => {
        await deleteByID(id);
        const res = await findAll();
        setService(res.data);

    }

    const getListTypeService=async ()=>{
        const res=await findAllServiceType();
        setTypeService(res.data);
    }
    const getListService = async () => {
        const res = await findAll();
        setService(res.data);
    }
    useEffect(() => {
        getListService();
        getListTypeService();
    }, []);

    return (
        <>

            <header>
                <div id="indicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <video autoPlay loop muted playsinline="playsinline" preload="metadata">
                                <source
                                    src="https://player.vimeo.com/progressive_redirect/playback/739896948/rendition/1080p/file.mp4?loc=external&signature=345373d1abd37c792626108e13529bd1542ecd6c096075bf7806b89b75f35690"
                                    type="video/mp4"/>
                            </video>
                            <div className="carousel-caption d-none d-md-block">
                                <h3 className="display-4" style={{color: "#653399", marginBottom: "2%"}}>ROOMS &
                                    SUITES</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <button className="btn btn-success"
                    style={{marginTop: "20px", marginLeft: "45vw", background: "#653399"}}
                    onClick={() => navigate("/create-service")}>Add New Service
            </button>

            <div className="container d-flex justify-content-center">
                <div className="row">
                    {
                        service.map((service) => (
                            <div className="col-md-3">
                                < div className="card" style={{marginTop: "25px"}}>
                                    <div><img src={service.img} width="400px" height="200px"
                                              className="img-responsive image"/>
                                    </div>
                                    <p className="rating">9.2</p>
                                    <div className="card-body">
                                        <h5 className="card-title">{service.name}</h5>
                                        <p className="card-text"><i className="fa fa-map-marker marker"></i> Room
                                            size:
                                            {service.area}
                                            m2
                                        </p>
                                        <p className="card-text">Type Service: {typeService.find(typeService=>typeService.id===service.typeId)?.name}</p>
                                        <p className="card-text">$ {service.rentalCost}</p>
                                        <div style={{marginLeft: "135px"}}>
                                            <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal" onClick={()=>propsDelete(service.id,service.name)}>Delete</button>
                                            <button style={{marginLeft: "5px"}}
                                                    className="btn btn-outline-warning"
                                                    onClick={() => navigate(`/${service.id}/edit-service`)}> Edit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete notice!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Do you want to delete this <span style={{color:"red"}}>{nameDelete}</span>?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                            </button>
                            <button type="button" className="btn btn-danger"  data-bs-dismiss="modal"
                                    onClick={()=>handleDelete(idDelete)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>



            <nav aria-label="Page navigation example" style={{marginLeft: "42vw"}}>
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </>

    )
}
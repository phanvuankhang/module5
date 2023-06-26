import {Header} from "../Header";
import {Footer} from "../Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './listService.css'
import React from "react";
export function ListService() {
    return (
        <>
            <>
                <Header/>
            </>
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
                                    <h3 className="display-4" style={{color: "#653399", marginBottom: "10%"}}>ROOMS &
                                        SUITES</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                <button className="btn btn-success" style={{marginTop: "5px"}}>Add New Service</button>
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div><img src="https://i.imgur.com/7cNRozs.jpg" className="img-responsive image"/></div>
                                <p className="rating">9.2</p>
                                <div className="card-body">
                                    <h5 className="card-title">OCEAN SUITE</h5>
                                    <p className="card-text"><i className="fa fa-map-marker marker"></i> Room size: 43.7
                                        m2
                                    </p>
                                    <p className="card-text"><i className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i></p>
                                    <p className="card-text">$ 1,399</p>
                                    <div style={{marginLeft: "135px"}}>
                                        <button className="btn btn-outline-danger">Delete</button>
                                        <button className="btn btn-outline-warning"> Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div><img src="https://i.imgur.com/CS59IJZ.jpg" className="img-responsive image"/></div>
                                <p className="rating">9.6</p>
                                <div className="card-body">
                                    <h5 className="card-title">OCEAN STUDIO SUITE</h5>
                                    <p className="card-text"><i className="fa fa-map-marker marker"></i> Room size: 43.7
                                        m2
                                    </p>
                                    <p className="card-text"><i className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i>
                                    </p>
                                    <p className="card-text">$ 2,399</p>
                                    <div style={{marginLeft: "135px"}}>
                                        <button className="btn btn-outline-danger">Delete</button>
                                        <button className="btn btn-outline-warning"> Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div><img src="https://i.imgur.com/LITAKvq.jpg" className="img-responsive image"/></div>
                                <p className="rating">8.2</p>
                                <div className="card-body">
                                    <h5 className="card-title">OCEAN DELUXE</h5>
                                    <p className="card-text"><i className="fa fa-map-marker marker"></i>Room size: 43.7
                                        m2
                                    </p>
                                    <p className="card-text"><i className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i></p>
                                    <p className="card-text">$ 1,699</p>
                                    <div style={{marginLeft: "135px"}}>
                                        <button className="btn btn-outline-danger">Delete</button>
                                        <button className="btn btn-outline-warning"> Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div><img src="https://i.imgur.com/7cNRozs.jpg" className="img-responsive image"/></div>
                                <p className="rating">9.2</p>
                                <div className="card-body">
                                    <h5 className="card-title">LAGOON SUPERIOR</h5>
                                    <p className="card-text"><i className="fa fa-map-marker marker"></i> Room size: 43.7
                                        m2
                                    </p>
                                    <p className="card-text"><i className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i></p>
                                    <p className="card-text">$ 1,399</p>
                                    <div style={{marginLeft: "135px"}}>
                                        <button className="btn btn-outline-danger">Delete</button>
                                        <button className="btn btn-outline-warning"> Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div><img src="https://i.imgur.com/CS59IJZ.jpg" className="img-responsive image"/></div>
                                <p className="rating">9.6</p>
                                <div className="card-body">
                                    <h5 className="card-title">GARDEN SUPERIOR</h5>
                                    <p className="card-text"><i className="fa fa-map-marker marker"></i> Room size: 43.7
                                        m2
                                    </p>
                                    <p className="card-text"><i className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i>
                                    </p>
                                    <p className="card-text">$ 2,399</p>
                                    <div style={{marginLeft: "135px"}}>
                                        <button className="btn btn-outline-danger">Delete</button>
                                        <button className="btn btn-outline-warning"> Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div><img src="https://i.imgur.com/LITAKvq.jpg" className="img-responsive image"/></div>
                                <p className="rating">8.2</p>
                                <div className="card-body">
                                    <h5 className="card-title">POOL VILLAS</h5>
                                    <p className="card-text"><i className="fa fa-map-marker marker"></i>Room size: 40.1
                                        m2
                                    </p>
                                    <p className="card-text"><i className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i><i
                                        className="fa fa-star star-rating"></i></p>
                                    <p className="card-text">$ 1,699</p>
                                    <div style={{marginLeft: "135px"}}>
                                        <button className="btn btn-outline-danger">Delete</button>
                                        <button className="btn btn-outline-warning"> Edit</button>
                                    </div>
                                </div>
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
            <>
                <Footer/>
            </>
        </>
    )
}
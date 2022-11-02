import React from 'react'
import PropTypes from 'prop-types'

const SearchPage = props => {
    return (
        <>
            {/* <!-- Search Bar Section --> */}
            <section className="card-body kp-listing-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 p-0">
                            <div className="input-group ">
                                <div className="form-outline w-100">
                                    <input id="search-focus" type="search" id="form1" className="form-control pt-1" />
                                    <label className="form-label" for="form1">Arera Colony</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12 p-0">
                            <div className="input-group ">
                                <div className="form-outline" style={{width: "85%"}}>
                                    <input id="search-focus" type="search" id="form1" className="form-control pt-1" />
                                    <label className="form-label  " for="form1">Search</label>
                                </div>
                                <button type="button" className="btn btn-primary kp-ark-background">
                                    <i className="fas fa-search d-sm-block"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="sale-banner">
                                <img src="assets/img/offer.jpg" className="img-fluid w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"> Open &nbsp; &nbsp; Fillter</i>
                    </button>
                    {/* <!--     <a className="navbar-brand" href="#">Navbar</a> --> */}
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item p-1">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label className="form-check-label" for="flexCheckChecked">Video Consult</label>
                                </div>
                            </li>

                            <li className="nav-item p-1">
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Availability</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </li>
                            <li className="nav-item p-1">
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Medicine Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </li>
                            <li className="nav-item p-1">
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Gender</option>
                                    <option value="1">Male Female</option>
                                    <option value="2">Two</option>
                                </select>
                            </li>

                            <li className="nav-item p-1">
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected> Consultation Fee</option>
                                    <option value="1">Free</option>
                                    <option value="2">100-300</option>
                                    <option value="3">400-100</option>
                                </select>
                            </li>

                            <li className="nav-item p-1">
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Short By</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </li>
                            <li className="nav-item p-1">
                                <a className="nav-link" href="#">Reset Filters</a>
                            </li>

                        </ul>
                        <form className="d-flex input-group w-auto">
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Type query"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-primary"
                                type="button"
                                data-mdb-ripple-color="dark"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            {/* <!-- Filter Section --> */}

            <section className="container Listing-Section mb-5">
                <div className="row">
                    <div className="col-md-9">
                        <div className="py-5">
                            <h1 className="text-left"><span className="">156</span> Best Doctors for Bleeding Gums Treatment in Indore</h1>
                            <p className="text-left"><span> <i className="far fa-check-circle"></i> </span> Book appointments with minimum wait-time & verified doctor details</p>

                        </div>


                        <a href='/doctor/1'>
                        <div className="card mb-3 py-2 mt-2" style={{maxWidth: "800px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png"
                                        alt="Trendy Pants and Shoes"
                                        className="img-fluid rounded-start"
                                    />
                                    <div className="kp-view-profile py-2 text-center">
                                        {/* <!-- <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">View Profile</button> --> */}

                                        <p className="card-text">
                                            <small className="text-muted"><i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> </small>
                                        </p>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="#">Dr. Meer Juned Ali</a></h5>
                                        <p className="small card-text"> Dr. Meer Juned Ali</p>
                                        <p className="card-text">
                                            <span>22</span> years experience overall
                                        </p>

                                        <a href="#">Indore GPO,Indore</a> /
                                        <a href="#">Prime Dental Clinic</a>

                                        <p className="card-text">₹100 Consultation fee at clinic </p>
                                        <div className="kp-view-profile  d-flex">
                                            <button type="button" className="btn btn-outline-info btn-rounded mx-2" data-mdb-ripple-color="dark">View Profile</button>
                                            <button type="button" className="btn btn-outline-info btn-rounded" data-mdb-ripple-color="dark">Book Appoinment</button>
                                        </div>
                                        <hr />
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>

                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="kp-qr-code">
                                        <img src="assets/img/Animesh-Qr.jpeg" className="img-fluid" />
                                            <p className="card-text p-2">
                                                <small className="text-muted ">Scan Qr Code And Book Appoinment Directly.</small>
                                            </p>
                                    </div>

                                </div>
                            </div>
                        </div></a>
                        <div className="card mb-3 py-2 mt-2" style={{maxWidth: "800px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png"
                                        alt="Trendy Pants and Shoes"
                                        className="img-fluid rounded-start"
                                    />
                                    <div className="kp-view-profile py-2 text-center">
                                        {/* <!-- <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">View Profile</button> --> */}

                                        <p className="card-text">
                                            <small className="text-muted"><i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> </small>
                                        </p>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="#">Dr. Meer Juned Ali</a></h5>
                                        <p className="small card-text"> Dr. Meer Juned Ali</p>
                                        <p className="card-text">
                                            <span>22</span> years experience overall
                                        </p>

                                        <a href="#">Indore GPO,Indore</a> /
                                        <a href="#">Prime Dental Clinic</a>

                                        <p className="card-text">₹100 Consultation fee at clinic </p>
                                        <div className="kp-view-profile  d-flex">
                                            <button type="button" className="btn btn-outline-info btn-rounded mx-2" data-mdb-ripple-color="dark">View Profile</button>
                                            <button type="button" className="btn btn-outline-info btn-rounded" data-mdb-ripple-color="dark">Book Appoinment</button>
                                        </div>
                                        <hr />
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>

                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="kp-qr-code">
                                        <img src="assets/img/Animesh-Qr.jpeg" className="img-fluid" />
                                            <p className="card-text p-2">
                                                <small className="text-muted ">Scan Qr Code And Book Appoinment Directly.</small>
                                            </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 py-2 mt-2" style={{maxWidth: "800px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png"
                                        alt="Trendy Pants and Shoes"
                                        className="img-fluid rounded-start"
                                    />
                                    <div className="kp-view-profile py-2 text-center">
                                        {/* <!-- <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">View Profile</button> --> */}

                                        <p className="card-text">
                                            <small className="text-muted"><i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> </small>
                                        </p>

                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="#">Dr. Meer Juned Ali</a></h5>
                                        <p className="small card-text"> Dr. Meer Juned Ali</p>
                                        <p className="card-text">
                                            <span>22</span> years experience overall
                                        </p>

                                        <a href="#">Indore GPO,Indore</a> /
                                        <a href="#">Prime Dental Clinic</a>

                                        <p className="card-text">₹100 Consultation fee at clinic </p>
                                        <div className="kp-view-profile  d-flex">
                                            <button type="button" className="btn btn-outline-info btn-rounded mx-2" data-mdb-ripple-color="dark">View Profile</button>
                                            <button type="button" className="btn btn-outline-info btn-rounded" data-mdb-ripple-color="dark">Book Appoinment</button>
                                        </div>
                                        <hr />
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 py-2 mt-2" style={{maxWidth: "800px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png"
                                        alt="Trendy Pants and Shoes"
                                        className="img-fluid rounded-start"
                                    />
                                    <div className="kp-view-profile py-2 text-center">
                                        {/* <!-- <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">View Profile</button> --> */}

                                        <p className="card-text">
                                            <small className="text-muted"><i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> </small>
                                        </p>

                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="#">Dr. Meer Juned Ali</a></h5>
                                        <p className="small card-text"> Dr. Meer Juned Ali</p>
                                        <p className="card-text">
                                            <span>22</span> years experience overall
                                        </p>

                                        <a href="#">Indore GPO,Indore</a> /
                                        <a href="#">Prime Dental Clinic</a>

                                        <p className="card-text">₹100 Consultation fee at clinic </p>
                                        <div className="kp-view-profile  d-flex">
                                            <button type="button" className="btn btn-outline-info btn-rounded mx-2" data-mdb-ripple-color="dark">View Profile</button>
                                            <button type="button" className="btn btn-outline-info btn-rounded" data-mdb-ripple-color="dark">Book Appoinment</button>
                                        </div>
                                        <hr />
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 py-2 mt-2" style={{maxWidth: "800px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png"
                                        alt="Trendy Pants and Shoes"
                                        className="img-fluid rounded-start"
                                    />
                                    <div className="kp-view-profile py-2 text-center">
                                        {/* <!-- <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">View Profile</button> --> */}

                                        <p className="card-text">
                                            <small className="text-muted"><i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> </small>
                                        </p>

                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="#">Dr. Meer Juned Ali</a></h5>
                                        <p className="small card-text"> Dr. Meer Juned Ali</p>
                                        <p className="card-text">
                                            <span>22</span> years experience overall
                                        </p>

                                        <a href="#">Indore GPO,Indore</a> /
                                        <a href="#">Prime Dental Clinic</a>

                                        <p className="card-text">₹100 Consultation fee at clinic </p>
                                        <div className="kp-view-profile  d-flex">
                                            <button type="button" className="btn btn-outline-info btn-rounded mx-2" data-mdb-ripple-color="dark">View Profile</button>
                                            <button type="button" className="btn btn-outline-info btn-rounded" data-mdb-ripple-color="dark">Book Appoinment</button>
                                        </div>
                                        <hr />
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 py-2 mt-2" style={{maxWidth: "800px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png"
                                        alt="Trendy Pants and Shoes"
                                        className="img-fluid rounded-start"
                                    />
                                    <div className="kp-view-profile py-2 text-center">
                                        {/* <!-- <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">View Profile</button> --> */}

                                        <p className="card-text">
                                            <small className="text-muted"><i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> </small>
                                        </p>

                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="#">Dr. Meer Juned Ali</a></h5>
                                        <p className="small card-text"> Dr. Meer Juned Ali</p>
                                        <p className="card-text">
                                            <span>22</span> years experience overall
                                        </p>

                                        <a href="#">Indore GPO,Indore</a> /
                                        <a href="#">Prime Dental Clinic</a>

                                        <p className="card-text">₹100 Consultation fee at clinic </p>
                                        <div className="kp-view-profile  d-flex">
                                            <button type="button" className="btn btn-outline-info btn-rounded mx-2" data-mdb-ripple-color="dark">View Profile</button>
                                            <button type="button" className="btn btn-outline-info btn-rounded" data-mdb-ripple-color="dark">Book Appoinment</button>
                                        </div>
                                        <hr />
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 py-2 mt-2" style={{maxWidth: "800px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png"
                                        alt="Trendy Pants and Shoes"
                                        className="img-fluid rounded-start"
                                    />
                                    <div className="kp-view-profile py-2 text-center">
                                        {/* <!-- <button type="button" className="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">View Profile</button> --> */}

                                        <p className="card-text">
                                            <small className="text-muted"><i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> <i className="fas fa-star text-info"></i> </small>
                                        </p>

                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="#">Dr. Meer Juned Ali</a></h5>
                                        <p className="small card-text"> Dr. Meer Juned Ali</p>
                                        <p className="card-text">
                                            <span>22</span> years experience overall
                                        </p>

                                        <a href="#">Indore GPO,Indore</a> /
                                        <a href="#">Prime Dental Clinic</a>

                                        <p className="card-text">₹100 Consultation fee at clinic </p>
                                        <div className="kp-view-profile  d-flex">
                                            <button type="button" className="btn btn-outline-info btn-rounded mx-2" data-mdb-ripple-color="dark">View Profile</button>
                                            <button type="button" className="btn btn-outline-info btn-rounded" data-mdb-ripple-color="dark">Book Appoinment</button>
                                        </div>
                                        <hr />
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="view-more-profile text-center py-3">
                            <a type="button" className="btn btn-outline-info btn-rounded m-1" data-mdb-ripple-color="dark">Load More Profiles </a>
                        </div>
                    </div>
                    <div className="col-md-3 py-3">
                        <div className="card">
                            <h5 className="card-header kp-ark-text">Provide current location to see Doctors near you</h5>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">You are seeing results from indore. See results near you</p>
                                <a type="button" className="btn btn-outline-info btn-rounded m-1" data-mdb-ripple-color="dark">New Palasia</a>
                                <a type="button" className="btn btn-outline-info btn-rounded m-1" data-mdb-ripple-color="dark">Vijay Nagar</a>
                                <a type="button" className="btn btn-outline-info btn-rounded m-1" data-mdb-ripple-color="dark">Vijay Nagar</a>
                                <a type="button" className="btn btn-outline-info btn-rounded m-1" data-mdb-ripple-color="dark">Vijay Nagar</a>
                                <a type="button" className="btn btn-outline-info btn-rounded m-1" data-mdb-ripple-color="dark">Vijay Nagar</a>
                                <a type="button" className="btn btn-outline-info btn-rounded m-1" data-mdb-ripple-color="dark">Indore</a>
                                <hr />
                                    <a type="button" className="btn btn-outline-info btn-rounded m-1" data-mdb-ripple-color="dark"> Current Location &nbsp;&nbsp; <i className="fas fa-map-marker-alt"></i>  </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="float-end">
                    <nav aria-label="..." className="">
                        <ul className="pagination pagination-circle">
                            <li className="page-item">
                                <a className="page-link">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active" aria-current="page">
                                <a className="page-link text-white" href="#">2 <span className="visually-hidden">(current)</span></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </section>
            {/* <!-- End your project here--> */}
        </>
    )
}

SearchPage.propTypes = {}

export default SearchPage
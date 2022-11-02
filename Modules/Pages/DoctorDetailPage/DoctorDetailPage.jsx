import React from 'react'
import PropTypes from 'prop-types'

const DoctorDetailPage = props => {
    return (
        <>
            {/* <!-- Search Bar Section --> */}
            <section class="card-body kp-listing-sec">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-12 p-0">
                            <div class="input-group ">
                                <div class="form-outline w-100">
                                    <input id="search-focus" type="search" id="form1area" class="form-control pt-1" />
                                    <label class="form-label" for="form1area">Arera Colony</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 col-sm-12 p-0">
                            <div class="input-group ">
                                <div class="form-outline" style={{width: "85%"}}>
                                    <input id="search-focus" type="search" id="form1search" class="form-control pt-1" />
                                    <label class="form-label  " for="form1search">Search</label>
                                </div>
                                <button type="button" class="btn btn-primary kp-ark-background">
                                    <i class="fas fa-search d-sm-block"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <div class="sale-banner">
                                <img src="assets/img/offer.jpg" class="img-fluid w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"> Open &nbsp; &nbsp; Fillter</i>
                    </button>
                    {/* <!--     <a class="navbar-brand" href="#">Navbar</a> --> */}
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item p-1">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label class="form-check-label" for="flexCheckChecked">Video Consult</label>
                                </div>
                            </li>
                            <li class="nav-item p-1">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Availability</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </li>
                            <li class="nav-item p-1">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Medicine Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </li>
                            <li class="nav-item p-1">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Gender</option>
                                    <option value="1">Male Female</option>
                                    <option value="2">Two</option>
                                </select>
                            </li>
                            <li class="nav-item p-1">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected> Consultation Fee</option>
                                    <option value="1">Free</option>
                                    <option value="2">100-300</option>
                                    <option value="3">400-100</option>
                                </select>
                            </li>
                            <li class="nav-item p-1">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Short By</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </li>
                            <li class="nav-item p-1">
                                <a class="nav-link" href="#">Reset Filters</a>
                            </li>
                        </ul>
                        <form class="d-flex input-group w-auto">
                            <input
                                type="search"
                                class="form-control"
                                placeholder="Type query"
                                aria-label="Search"
                            />
                            <button
                                class="btn btn-outline-primary"
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
            <section class="container Listing-Section mb-5">
                <div class="row">
                    <div class="col-md-9">
                        <div class="py-5">
                            <h1 class="text-left"><span class="">156</span> Best Doctors for Bleeding Gums Treatment in Indore</h1>
                            <p class="text-left"><span> <i class="far fa-check-circle"></i> </span> Book appointments with minimum wait-time & verified doctor details</p>
                        </div>
                        <div class="card mb-3 py-2 mt-2" style={{maxWidth: "800px"}}>
                            <div class="row g-0">
                                <div class="col-md-3">
                                    <img
                                        src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png"
                                        alt="Trendy Pants and Shoes"
                                        class="img-fluid rounded-start"
                                    />
                                    <div class="kp-view-profile py-2 text-center">
                                        {/* <!-- <button type="button" class="btn btn-outline-info btn-rounded " data-mdb-ripple-color="dark">View Profile</button> --> */}
                                        <p class="card-text">
                                            <small class="text-muted">
                                                <i class="fas fa-star text-info"></i> <i class="fas fa-star text-info"></i> <i class="fas fa-star text-info"></i> <i class="fas fa-star text-info"></i> <i class="fas fa-star text-info"></i> </small>
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="card-body">
                                        <h5 class="card-title"><a href="#">Dr. Meer Juned Ali</a><a href="" class="kp-text-s-dark text-dark" >Profile is claimed</a> </h5>
                                        <p class="small card-text"> BDS </p>
                                        <p class="card-text">
                                            Dental Surgeon, Cosmetic/Aesthetic Dentist
                                            39 Years Experience Overall  (38 years as specialist)
                                        </p>
                                        <a href="#"> <i class="fas fa-check-circle mr-2"></i>  Medical Registration Verified </a> <br />
                                            <a href="#"> <i class="fas fa-thumbs-up mr-2"></i> <span>97% </span> (190 votes)</a>
                                            <p class="card-text">Dr. Ashok Paranjape completed his BDS degree in 1983 from Devi Ahhilya Bai Holkar Univercity Indore MP </p>
                                            <div class="kp-view-profile">
                                                <a href="#" class="card-text float-right"><u>Share your story</u></a>
                                            </div>
                                            <br />
                                            <hr />
                                            <p class="card-text">
                                                <small class="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="kp-qr-code">
                                        <img src="assets/img/Animesh-Qr.jpeg" class="img-fluid" />
                                        <p class="card-text p-2">
                                            <small class="text-muted ">Scan Qr Code And Book Appoinment Directly.</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3 py-2 mt-2" style={{maxWidth: "800px"}}>
                            <div class="row g-0">
                                <div class="row">
                                    <div class="col-3">
                                        {/* <!-- Tab navs --> */}
                                        <div
                                            class="nav flex-column nav-tabs text-center"
                                            id="v-tabs-tab"
                                            role="tablist"
                                            aria-orientation="vertical"
                                        >
                                            <a
                                                class="nav-link active"
                                                id="v-tabs-Info-tab"
                                                data-mdb-toggle="tab"
                                                href="#v-tabs-Info"
                                                role="tab"
                                                aria-controls="v-tabs-Info"
                                                aria-selected="true"
                                            >Info</a
                                            >
                                            <a
                                                class="nav-link"
                                                id="v-tabs-Stories-tab"
                                                data-mdb-toggle="tab"
                                                href="#v-tabs-Stories"
                                                role="tab"
                                                aria-controls="v-tabs-Stories"
                                                aria-selected="false"
                                            >Stories(50 +)</a
                                            >
                                            <a
                                                class="nav-link"
                                                id="v-tabs-Consult-tab"
                                                data-mdb-toggle="tab"
                                                href="#v-tabs-Consult"
                                                role="tab"
                                                aria-controls="v-tabs-Consult"
                                                aria-selected="false"
                                            >Consult Q&A</a>
                                            <a
                                                class="nav-link"
                                                id="v-tabs-Healthfeed-tab"
                                                data-mdb-toggle="tab"
                                                href="#v-tabs-Healthfeed"
                                                role="tab"
                                                aria-controls="v-tabs-Healthfeed"
                                                aria-selected="false"
                                            >Consult Q&A</a
                                            >
                                        </div>
                                        {/* <!-- Tab navs --> */}
                                    </div>
                                    <div class="col-9">
                                        {/* <!-- Tab content --> */}
                                        <div class="tab-content" id="v-tabs-tabContent">
                                            <div
                                                class="tab-pane fade show active"
                                                id="v-tabs-Info"
                                                role="tabpanel"
                                                aria-labelledby="v-tabs-Info-tab">
                                                <div class="container mx-auto">
                                                    <div class="row">
                                                        <div class="col-md-5">
                                                            <div class="info-dr-address">
                                                                <h1>LIG Colony, Indore</h1>
                                                            </div>
                                                            <div class="info-dr-name">
                                                                <a href="#">Dr. Ashok Paranjape's Clinic`</a>
                                                            </div>
                                                            <div class="info-dr-rating">
                                                                <p class="card-text">
                                                                    <small class="text-muted">
                                                                        <i class="fas fa-star text-info"></i> <i class="fas fa-star text-info"></i> <i class="fas fa-star text-info"></i> <i class="fas fa-star text-info"></i> <i class="fas fa-star text-info"></i> </small>
                                                                </p>
                                                            </div>
                                                            <div class="info-dr-clinic-address">
                                                                <a href="#">9-1/A, L.I.G. Corner, Landmark: Near Maya Medical Stores, Indore</a>
                                                            </div>
                                                            <div class="info-get-direction">
                                                                <a href="#"><u>Get Direction</u></a>
                                                            </div>
                                                            <div class="info-dr-clinic-images">
                                                                <h6>Gallery</h6>
                                                                <img src="assets/img/dummy.png" class="w-25" />
                                                                <img src="assets/img/dummy.png" class="w-25" />
                                                                <img src="assets/img/dummy.png" class="w-25" />
                                                                <img src="assets/img/dummy.png" class="w-25" />
                                                                <img src="assets/img/dummy.png" class="w-25" />
                                                                <a href="#">More</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="info-clinic-timing">
                                                                <h4 class="kp-ark-text">Clinic Timing</h4>
                                                                <h5 class="kp-ark-text">Mon-Fri</h5>
                                                                <a href="#" class="text-dark">11:00 AM - 01:30 PM <br /> 05:00 PM - 07:00 PM</a>
                                                                <h5 class="kp-ark-text">Sat</h5>
                                                                <a href="#" class="text-dark">10:30 AM - 01:30 PM</a>
                                                            </div>
                                                            <div class="info-dr-pay-btn py-3">
                                                                <button type="submit" class="btn kp-btn text-white btn-block">Pay Now</button>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <div class="info-clinic-timing">
                                                                <h4 class="kp-ark-text"> <i class="fas fa-rupee-sign"></i> 300 </h4>
                                                                <a href="#" class="text-dark"> <i class="far fa-credit-card"></i> Online Payment Available </a>
                                                            </div>
                                                            <div class="info-dr-prime">
                                                                <a class="kp-ark-text"> <i class="fas fa-check-circle"></i> Prime </a>
                                                                <p class="text-dark">Max. 15 mins wait + Verified details</p>
                                                            </div>
                                                            <div class="info-dr-book-btn">
                                                                <button type="submit" class="btn kp-btn text-white btn-block">Book Appointment</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr class="m-4" />
                                                <div class="container">
                                                    <h1><u>Patient Stories for Dr. Kuldeep Meena</u></h1>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <h5 class="kp-ark-text"> <i class="fas fa-user-check"></i> Kuldeep Meena <span class="text-dark"> Verified</span> </h5>
                                                            <h4 class="text-muted">Visited For Dental Cleaning</h4>
                                                            <div class="info-client-reviews">
                                                                <a href="#"> <i class="fas fa-thumbs-up"></i> I recommend the doctor</a>
                                                            </div>
                                                            <p class="text-left"><span> <i class="far fa-check-circle"></i> </span>Very experienced and supportive docter, *** ********* ** ***** My all family members are going to his clinic only for any teeth reated issues</p>
                                                        </div>
                                                        <h4 class="text-left"><span> <i class="far fa-check-circle"></i> </span>dr. Kuldeep Meena</h4>
                                                        <p class="text-left"><span> <i class="far fa-check-circle"></i> </span>thanks for your appreciation 🙏🙏🙏 </p>
                                                    </div>
                                                    <p class="card-text">
                                                        <small class="text-muted">Last updated 3 mins ago</small>
                                                    </p>
                                                </div>
                                            </div>
                                            Home content
                                        </div>
                                        <div
                                            class="tab-pane fade"
                                            id="v-tabs-Stories"
                                            role="tabpanel"
                                            aria-labelledby="v-tabs-Stories-tab"
                                        >
                                            Profile content
                                        </div>
                                        <div
                                            class="tab-pane fade"
                                            id="v-tabs-Consult"
                                            role="tabpanel"
                                            aria-labelledby="v-tabs-Consult-tab"
                                        >
                                            Messages content
                                        </div>
                                        <div
                                            class="tab-pane fade"
                                            id="v-tabs-Healthfeed"
                                            role="tabpanel"
                                            aria-labelledby="v-tabs-Healthfeed-tab"
                                        >
                                            Messages content
                                        </div>
                                    </div>
                                    {/* <!-- Tab content --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 py-3">
                        <div class="card">
                            <h5 class="card-header kp-ark-text">PICK A TIME SLOT</h5>
                            <div class="card-body">
                                <h5 class="card-title">Dr. Kuldeep Meena's Clinic</h5>
                                <p class="card-text"> ₹300Max 15 mins wait LIG Colony</p>
                                <hr />
                                <h3>Appoinment Calender</h3>
                                <hr />
                                <button type="submit" class="btn kp-btn text-white btn-block">Next availability on Mon, 4 Jul</button>
                                <button type="submit" class="btn kp-btn text-white btn-block">Call</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End your project here--> */}
        </>
    )
}

DoctorDetailPage.propTypes = {}

export default DoctorDetailPage
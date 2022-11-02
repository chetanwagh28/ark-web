import React from 'react'

function Header(props) {
    return (
        <>
            {/* <!-- Start your project here--> */}
            {/* <!-- topbar section --> */}
            <section className="kp-top-bar">
                <div className="kp-top-icons-phonekp-top-icons-phone">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="top-kp-phone">
                                    <a href="" className="p-1 font-weight-bold kp-ark-text"> <i className="fas fa-phone kp-ark-text"> </i> +91 - 9 7 5 5 0 - 3 6 4 8 2 </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="top-kp-icons float-end">
                                    <a href="" className="p-1"> <i className="fab fa-facebook"></i></a>
                                    <a href="" className="p-1"> <i className="fab fa-instagram"></i></a>
                                    <a href="" className="p-1"> <i className="fab fa-youtube"></i></a>
                                    <a href="" className="p-1"> <i className="fab fa-linkedin-in"></i></a>
                                    <a href="" className="p-1"> <i className="fas fa-user-alt"></i></a>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="kp-top-menue">
                {/* <!-- Navbar --> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    {/* <!-- Container wrapper --> */}
                    <div className="container-fluid">
                        {/* <!-- Navbar brand --> */}
                        <a className="navbar-brand me-2" href="assets/img/ark-logo.png">
                            <img
                                src="assets/img/ark-logo.png" height="" width="30" alt="MDB Logo"
                                loading="lazy"
                                style={{ marginTop: "-1px" }}
                            />
                        </a>

                        {/* <!-- Toggle button --> */}
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>

                        {/* <!-- Collapsible wrapper --> */}
                        <div className="collapse navbar-collapse" id="navbarButtonsExample">
                            {/* <!-- Left links --> */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Find Doctors</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Medicines</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Lab Tests</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Surgeries</a>
                                </li>
                            </ul>
                            {/* <!-- Left links --> */}

                            <div className="d-flex align-items-center">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#"><span className="badge bg-dark">New</span> For Corporates</a>
                                    </li>
                                    {/* <!-- Navbar dropdown --> */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-mdb-toggle="dropdown" aria-expanded="false">
                                            For Providers
                                        </a>
                                        {/* <!-- Dropdown menu --> */}
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <a className="dropdown-item" href="#">Action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-mdb-toggle="dropdown" aria-expanded="false">
                                            Security & help
                                        </a>
                                        {/* <!-- Dropdown menu --> */}
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <a className="dropdown-item" href="#">Action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                                <button type="button" className="btn kp-ark-background me-3">
                                    Sign up for free
                                </button>
                            </div>
                        </div>
                        {/* <!-- Collapsible wrapper --> */}
                    </div>
                    {/* <!-- Container wrapper --> */}
                </nav>
                {/* <!-- Navbar --> */}
            </section>
            <section className="card-body" style={{ width: "100%" }}>
            </section>
            {/* <!-- End your project here--> */}
        </>
    )
}


export default Header

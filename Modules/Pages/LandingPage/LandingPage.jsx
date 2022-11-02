import React from 'react'
import Image from 'next/image'


const LandingPage = (props) => {
    return (
        <>
            {/* <!-- Search Bar Section --> */}
            <section className="card-body">
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
                                <div className="form-outline">
                                    <input id="search-focus" type="search" id="form1" className="form-control pt-1" />
                                    <label className="form-label  " for="form1">Search</label>
                                </div>
                                <a href='/search' className="btn btn-primary kp-ark-background">
                                    <i className="fas fa-search d-sm-block"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="sale-banner">
                                {/* <img src="assets/img/offer.jpg" className="img-fluid w-100"> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Slider Start --> */}
            <section class="kp-main-slider ">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div id="carouselExampleCaptions" class="carousel slide" data-mdb-ride="carousel" style={{ backgroundUrl: 'https://www.katahdinfamilydental.com/assets/images/banner-figure.png', backgroundRepeat: "no-repeat", backgroundPosition: "right" }}>
                                <div class="carousel-indicators">
                                    <button type="button" data-mdb-target="#carouselExampleCaptions"
                                        data-mdb-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"
                                    ></button>
                                    <button type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide-to="1" aria-label="Slide 2"></button>
                                    <button
                                        type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active min-vh-100">
                                        {/* <!--  <img src="assets/img/banner2.jpg" class="d-block w-100" alt="Wild Landscape" /> --> */}
                                        <div class="carousel-caption d-none d-md-block kp-slider-title kp-ark-text">
                                            <h5>First slide label</h5>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item min-vh-100">
                                        {/* <!--  <img src="assets/img/banner2.jpg" class="d-block w-100" alt="Camera" /> --> */}
                                        <div class="carousel-caption d-none d-md-block kp-slider-title kp-ark-text">
                                            <h5>Second slide label</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item min-vh-100">
                                        {/* <!--  <img src="assets/img/banner2.jpg" class="d-block w-100" alt="Exotic Fruits" /> --> */}
                                        <div class="carousel-caption d-none d-md-block kp-slider-title kp-ark-text">
                                            <h5>Third slide label</h5>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container Consult-top-doctors">
                <div class="row">
                    <div class="py-5">
                        <h1 class="text-center">Consult top doctors online for any health concern</h1>
                        <p class="text-center">Private online consultations with verified doctors in all specialists</p>
                    </div>
                </div>
            </div>
            <section class="kp-small-service container-fluid bg-light py-5 px-5">
                <div class="row py-2">
                    <div class="col-md-4 col-sm-12 pt-1">
                        <div class="card card hover-zoom" style={{ maxWidth: "540px" }}>
                            <div class="row g-0">
                                <div class="col-md-4 text-center p-1 kp-box">
                                    <img
                                        src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png" alt="Trendy Pants and Shoes" class="img-fluid rounded-start w-100 text-center" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Instant Video Consultation</h5>
                                        <p class="card-text">
                                            Connect within 60 secs
                                        </p>
                                        <p class="card-text">
                                            <small class="text-muted">Connect within 60 secs</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 pt-1">
                        <div class="card card hover-zoom" style={{ maxWidth: "540px" }}>
                            <div class="row g-0">
                                <div class="col-md-4 text-center p-1 kp-box-1">
                                    <img
                                        src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png" alt="Trendy Pants and Shoes" class="img-fluid rounded-start w-100 text-center" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Instant Video Consultation</h5>
                                        <p class="card-text">
                                            Connect within 60 secs
                                        </p>
                                        <p class="card-text">
                                            <small class="text-muted">Connect within 60 secs</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 pt-1">
                        <div class="card hover-zoom" style={{ maxWidth: "540px" }}>
                            <div class="row g-0">
                                <div class="col-md-4 text-center p-1 kp-box-2">
                                    <img
                                        src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png" alt="Trendy Pants and Shoes" class="img-fluid rounded-start w-100 text-center" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Instant Video Consultation</h5>
                                        <p class="card-text">
                                            Connect within 60 secs
                                        </p>
                                        <p class="card-text">
                                            <small class="text-muted">Connect within 60 secs</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col-md-4 col-sm-12 pt-1">
                        <div class=" card hover-zoom" style={{ maxWidth: "540px" }}>
                            <div class="row g-0">
                                <div class="col-md-4 text-center p-1 kp-box-3">
                                    <img
                                        src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png" alt="Trendy Pants and Shoes" class="img-fluid rounded-start w-100 text-center" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Instant Video Consultation</h5>
                                        <p class="card-text">
                                            Connect within 60 secs
                                        </p>
                                        <p class="card-text">
                                            <small class="text-muted">Connect within 60 secs</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 pt-1">
                        <div class="card hover-zoom" style={{ maxWidth: "540px" }}>
                            <div class="row g-0">
                                <div class="col-md-4 text-center p-1 kp-box-4">
                                    <img
                                        src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png" alt="Trendy Pants and Shoes" class="img-fluid rounded-start w-100 text-center" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Instant Video Consultation</h5>
                                        <p class="card-text">
                                            Connect within 60 secs
                                        </p>
                                        <p class="card-text">
                                            <small class="text-muted">Connect within 60 secs</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 pt-1">
                        <div class="card hover-zoom">
                            <div class="row g-0">
                                <div class="col-md-4 text-center p-1 kp-box-5">
                                    <img
                                        src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png" alt="Trendy Pants and Shoes" class="img-fluid rounded-start w-100 text-center" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Instant Video Consultation</h5>
                                        <p class="card-text">
                                            Connect within 60 secs
                                        </p>
                                        <p class="card-text">
                                            <small class="text-muted">Connect within 60 secs</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="py-5">
                <hr class="text-center" style={{ color: "#00b2b5cf", textAlign: "center" }} />
            </div>
            <div class="container Consult-top-doctors">
                <div class="row">
                    <div class="py-5">
                        <h1 class="text-center">Consult top doctors online for any health concern</h1>
                        <p class="text-center">Private online consultations with verified doctors in all specialists
                        </p>
                    </div>
                </div>
            </div>
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-2 text-center">
                            <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png" class="img-fluid hover-shadow rounded-pill w-75" alt="Los Angeles Skyscrapers" />
                            <p class="text-center">Period doubts or Pregnancy </p>
                            <a href="#">CONSULT NOW</a>
                        </div>
                        <div class="col-md-2 text-center">
                            <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png" class="img-fluid hover-shadow rounded-pill w-75" alt="Los Angeles Skyscrapers" />
                            <p class="text-center">Period doubts or Pregnancy </p>
                            <a href="#">CONSULT NOW</a>
                        </div>
                        <div class="col-md-2 text-center">
                            <img src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg" class="img-fluid hover-shadow rounded-pill w-75" alt="Los Angeles Skyscrapers" />
                            <p class="text-center">Period doubts or Pregnancy </p>
                            <a href="#">CONSULT NOW</a>
                        </div>
                        <div class="col-md-2 text-center">
                            <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png" class="img-fluid hover-shadow rounded-pill w-75" alt="Los Angeles Skyscrapers" />
                            <p class="text-center">Period doubts or Pregnancy </p>
                            <a href="#">CONSULT NOW</a>
                        </div>
                        <div class="col-md-2 text-center">
                            <img src="https://www.practo.com/consult/static/images/top-speciality-pediatric.svg" class="img-fluid hover-shadow rounded-pill w-75" alt="Los Angeles Skyscrapers" />
                            <p class="text-center">Period doubts or Pregnancy </p>
                            <a href="#">CONSULT NOW</a>
                        </div>
                        <div class="col-md-2 text-center">
                            <img src="https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png" class="img-fluid hover-shadow rounded-pill w-75" alt="Los Angeles Skyscrapers" />
                            <p class="text-center">Period doubts or Pregnancy </p>
                            <a href="#">CONSULT NOW</a>
                        </div>
                    </div>
                </div>
                <div class="text-center py-5">
                    <a href="#" class="btn text-center btn-outline-info btn-rounded">View All Specialities</a>
                </div>
            </section>

            <div class="container Find-experienced-doctors">
                <div class="row">
                    <div class="py-5">
                        <h1 class="text-center">Book an appointment for an in-clinic consultation</h1>
                        <p class="text-center">Find experienced doctors across all specialties</p>
                    </div>
                </div>
            </div>
            <div class="client-home-section wow fadeInUp">
                <div class="container">
                    {/* <!-- Client Slider --> */}
                    <div class="client-slider-wrapper">
                        <div id="sync1" class="owl-carousel owl-theme clear-fix">
                            <div class="item">
                                <div class="card bg-dark text-white">
                                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" class="card-img" alt="Stony Beach" />
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">
                                            This is a wider card with supporting text below as a natural lead-in to additional
                                            content. This content is a little bit longer.
                                        </p>
                                        <p class="card-text">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="card bg-dark text-white">
                                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" class="card-img" alt="Stony Beach" />
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">
                                            This is a wider card with supporting text below as a natural lead-in to additional
                                            content. This content is a little bit longer.
                                        </p>
                                        <p class="card-text">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="card bg-dark text-white">
                                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" class="card-img" alt="Stony Beach" />
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">
                                            This is a wider card with supporting text below as a natural lead-in to additional
                                            content. This content is a little bit longer.
                                        </p>
                                        <p class="card-text">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /#sync1 --> */}
                    </div>
                    {/* <!-- /.thumbnail-wrapper --> */}
                </div>
                {/* <!-- End .client-slider-wrapper --> */}
            </div>
            <section class="d-none">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="owl-carousel owl-theme">
                                <div class="item">
                                    <div class="card bg-dark text-white">
                                        <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" class="card-img" alt="Stony Beach" />
                                        <div class="card-img-overlay">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                This is a wider card with supporting text below as a natural lead-in to additional
                                                content. This content is a little bit longer.
                                            </p>
                                            <p class="card-text">Last updated 3 mins ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="card bg-dark text-white">
                                        <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" class="card-img" alt="Stony Beach" />
                                        <div class="card-img-overlay">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                This is a wider card with supporting text below as a natural lead-in to additional
                                                content. This content is a little bit longer.
                                            </p>
                                            <p class="card-text">Last updated 3 mins ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="card bg-dark text-white">
                                        <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" class="card-img" alt="Stony Beach" />
                                        <div class="card-img-overlay">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                This is a wider card with supporting text below as a natural lead-in to additional
                                                content. This content is a little bit longer.
                                            </p>
                                            <p class="card-text">Last updated 3 mins ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="card bg-dark text-white">
                                        <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" class="card-img" alt="Stony Beach" />
                                        <div class="card-img-overlay">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                This is a wider card with supporting text below as a natural lead-in to additional
                                                content. This content is a little bit longer.
                                            </p>
                                            <p class="card-text">Last updated 3 mins ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="card bg-dark text-white">
                                        <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" class="card-img" alt="Stony Beach" />
                                        <div class="card-img-overlay">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                This is a wider card with supporting text below as a natural lead-in to additional
                                                content. This content is a little bit longer.
                                            </p>
                                            <p class="card-text">Last updated 3 mins ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="card bg-dark text-white">
                                        <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" class="card-img" alt="Stony Beach" />
                                        <div class="card-img-overlay">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                This is a wider card with supporting text below as a natural lead-in to additional
                                                content. This content is a little bit longer.
                                            </p>
                                            <p class="card-text">Last updated 3 mins ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="kp-back-sections mt-5 py-5">
                <div class="container">
                    <div class="row py-5">
                        <div class="col-md-4 py-5">
                            <h1 class="text-dark font-weight-bold">Read top articles from health experts</h1>
                            <p class="small font-weight-bold">Health articles that keep you informed about good health practices and achieve your goals.</p>
                            <div>
                                <div class="py-5">
                                    <a href="#" class="btn kp-btn btn-rounded text-white">View All Specialities</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img src="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910" class="img-fluid" />
                                    <a href="#!">
                                        <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                    </a>
                                </div>
                                <div class="card-body">
                                    <a href="#" class="small">Coronavirus</a>
                                    <h5 class="card-title"><a href="#" class="text-dark">12 Coronavirus Myths and Facts That You Should Be Aware Of</a></h5>
                                    <a href="#!" class="small">Dr. Diana Borgio</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img src="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c" class="img-fluid" />
                                    <a href="#!">
                                        <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                    </a>
                                </div>
                                <div class="card-body">
                                    <a href="#" class="small">Vitamins and Supplements</a>
                                    <h5 class="card-title"><a href="#" class="text-dark">Eating Right to Build Immunity Against Cold and Viral Infections</a></h5>
                                    <a href="#!" class="small">Dr. Diana Borgio</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- TESTIMONIALS --> */}
            <section class="testimonials py-2">
                <div class="container py-5">
                    <div class="row">
                        <div class="py-5">
                            <h1 class="text-center">Consult top doctors online for any health concern</h1>
                            <p class="text-center">Private online consultations with verified doctors in all specialists</p>
                        </div>
                        <div class="col-sm-12 pb-5">
                            <div id="customers-testimonials" class="owl-carousel">
                                {/* <!--TESTIMONIAL 1 --> */}
                                <div class="item">
                                    <div class="shadow-effect">
                                        <img class="rounded-circle w-25" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="" />
                                        <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                                    </div>
                                    <div class="testimonial-name">EMILIANO AQUILANI</div>
                                </div>
                                {/* <!--END OF TESTIMONIAL 1 --> */}
                                {/* <!--TESTIMONIAL 2 --> */}
                                <div class="item">
                                    <div class="shadow-effect">
                                        <img class="rounded-circle w-25" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="" />
                                        <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                                    </div>
                                    <div class="testimonial-name">ANNA ITURBE</div>
                                </div>
                                {/* <!--END OF TESTIMONIAL 2 --> */}
                                {/* <!--TESTIMONIAL 3 --> */}
                                <div class="item">
                                    <div class="shadow-effect">
                                        <img class="rounded-circle w-25" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="" />
                                        <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                                    </div>
                                    <div class="testimonial-name">LARA ATKINSON</div>
                                </div>
                                {/* <!--END OF TESTIMONIAL 3 --> */}
                                {/* <!--TESTIMONIAL 4 --> */}
                                <div class="item">
                                    <div class="shadow-effect">
                                        <img class="rounded-circle w-25" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="" />
                                        <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                                    </div>
                                    <div class="testimonial-name">IAN OWEN</div>
                                </div>
                                {/* <!--END OF TESTIMONIAL 4 --> */}
                                {/* <!--TESTIMONIAL 5 --> */}
                                <div class="item">
                                    <div class="shadow-effect">
                                        <img class="rounded-circle w-25" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="" />
                                        <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                                    </div>
                                    <div class="testimonial-name">MICHAEL TEDDY</div>
                                </div>
                                {/* <!--END OF TESTIMONIAL 5 --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- END OF TESTIMONIALS --> */}
            <section class="kp-mobile-App-Section bg-light">
                <div class="container">
                    <div class="row py-5">
                        <div class="col-md-8">
                            <div class="kp-app-mobile">n
                                <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-md-4 align-self-center">
                            <div class="kp-app-title">
                                <h1>Download the Practo app</h1>
                                <p class="small">Access video consultation with India’s top doctors on the Practo app. Connect with doctors online, available 24/7, from the comfort of your home.</p>
                                <form class="py-5">
                                    {/* <!-- Phone input --> */}
                                    <h1>Get the link to download the app</h1>
                                    <div class="form-outline mb-4">
                                        <input type="number" id="form1Example1" class="form-control" />
                                        <label class="form-label" for="form1Example1">Phone Number</label>
                                    </div>
                                    {/* <!-- Submit button --> */}
                                    <button type="submit" class="btn kp-btn text-white btn-block">Send SMS</button>
                                </form>
                                <div class="text-center py-5">
                                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/google_play.png" class="kp-app-icon-img" />
                                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/apple_store.png" class="kp-app-icon-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End your project here--> */}
        </>
    )
}

export default LandingPage
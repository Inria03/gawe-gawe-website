import Link from 'next/link'
import React from 'react'
function tentang() {
  return (
    <>
    {/*Page Header Start*/}
    <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: 'url(fotoperusahaan.jpg)'}}>
        <div className="container-fluid page-header-inner py-5">
            <div className="container text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Tentang Kami</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Tentang</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    {/*Page Header End*/}


    {/*Service Start*/}
    <div className="container-xxl py-5">
        <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-primary text-uppercase">LAYANAN KAMI</h6>
                <h1 className="mb-5">Beberapa layanan yang kami sediakan untuk client</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Web App</h5>
                            <p>Pembuatan Website Responsive yang mudah digunakan dan modern</p>
                            <Link className="text-secondary border-bottom" href="">Selengkapnya</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="d-flex bg-light py-5 px-4">
                        <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Mobile App</h5>
                            <p>Pembuatan aplikasi mobile yang mendukung dengan sistem operasi terbaru</p>
                            <Link className="text-secondary border-bottom" href="">Selengkapnya</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Workshop</h5>
                            <p>pembuatan aplikasi dengan dukungan API (Application Programming Interface)</p>
                            <Link className="text-secondary border-bottom" href="">Selengkapnya</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*Service End*/}


    {/*About Start*/}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 pt-4" style={{minHeight: '400px'}}>
                    <div className="position-relative h-50 wow fadeIn" data-wow-delay="0.1s">
                        <img className="position-absolute img-fluid w-100 h-100" src="/fotoperusahaan.jpg" style={{objectFit: 'cover'}} alt=""/>
                        <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{background: 'rgba(0, 0, 0, .08)'}}>
                            <h1 className="display-4 text-white mb-0">15 <span className="fs-4">Tahun</span></h1>
                            <h4 className="text-white">Berjaya</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h6 className="text-primary text-uppercase">TENTANG PERUSAHAAN</h6>
                    <h1 className="mb-4"><span className="text-primary">GAWE GAWE</span> adalah solusi terbaik untuk project IT anda</h1>
                    <p className="mb-4">PT. Gawe Gawe Solusi Teknologi merupakan perusahaan di bidang layanan jasa proyek IT yang bertempat di surabaya. PT. Gawe Gawe Solusi Teknologi membantu para user dalam mengerjakan atau mencari solusi di bidang IT atau didalam pembuatan website maupun aplikasi mobile</p>
                    <div className="row g-4 mb-3 pb-3">
                        <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex">
                                <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: '45px' ,height: '45px'}}>
                                    <span className="fw-bold text-secondary">01</span>
                                </div>
                                <div className="ps-3">
                                    <h6>Customer service 24 jam</h6>
                                    <span>PT. Gawe Gawe Solusi Teknologi menyediakan layanan customer service yang  tersedia 24 jam</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex">
                                <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: '45px' ,height: '45px'}}>
                                    <span className="fw-bold text-secondary">02</span>
                                </div>
                                <div className="ps-3">
                                    <h6>Berpengalaman</h6>
                                    <span>PT. Gawe Gawe Solusi Teknologi adalah perusahaan yang berpengalaman di bidangnya</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                            <div className="d-flex">
                                <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: '45px' ,height: '45px'}}>
                                    <span className="fw-bold text-secondary">03</span>
                                </div>
                                <div className="ps-3">
                                    <h6>Awards Winning Workers</h6>
                                    <span>Diam dolor diam ipsum sit amet diam et eos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*About End*/}

    {/*Fact Start */}
    <div className="container-fluid fact  my-5 py-5">
        <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-primary text-uppercase">SOROTAN</h6>
                <h1 className="mb-5">Produk kami yang terbaru</h1>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                <img className="img-thumbnail" src="/rehidro.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
                    <p className="text-black fw-bolder mb-0 mt-2">Rehidro</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                <img className="img-thumbnail" src="/Arena-o.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
                    <p className="text-black fw-bolder mb-0 mt-2">Arena-O</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                <img className="img-thumbnail" src="/Journal florist.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
                    <p className="text-black fw-bolder mb-0 mt-2">Journal Florist</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                <img className="img-thumbnail" src="/Qlassku.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
                    <p className="text-black fw-bolder mb-0 mt-2">Qlassku</p>
                </div>
                
            </div>
        </div>
    </div>
    {/*Fact End */}

    {/*Fact Start*/}
    <div className="container-fluid fact bg-dark my-5 py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                    <i className="fa fa-check fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" data-toggle="counter-up">5</h2>
                    <p className="text-white mb-0">Years Experience</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                    <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" data-toggle="counter-up">4</h2>
                    <p className="text-white mb-0">Expert Technicians</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                    <i className="fa fa-users fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                    <p className="text-white mb-0">Satisfied Clients</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                    <i className="fa fa-car fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                    <p className="text-white mb-0">Compleate Projects</p>
                </div>
            </div>
        </div>
    </div>
    {/*Fact End*/}

    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="text-center">
                <h6 className="text-primary text-uppercase">TESTIMONIAL</h6>
                <h1 className="mb-5">Penilaian Partner Kami</h1>
            </div>
            
            <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                    style={{ width: "150px" }} />
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                    <h5 className="mb-3">Maria Kate</h5>
                    <p>Photographer</p>
                    <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                        nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                        fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                        doloremque.
                    </p>
                    </div>
                </div>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="far fa-star fa-sm"></i></li>
                </ul>
            </div>
                <div className="carousel-item">
                <img className="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                    style={{ width: "150px" }} />
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                    <h5 className="mb-3">Maria Kate</h5>
                    <p>Photographer</p>
                    <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                        nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                        fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                        doloremque.
                    </p>
                    </div>
                </div>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="far fa-star fa-sm"></i></li>
                </ul>
                </div>
                <div className="carousel-item">
                <img className="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                    style={{ width: "150px" }} />
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                    <h5 className="mb-3">Maria Kate</h5>
                    <p>Photographer</p>
                    <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                        nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                        fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                        doloremque.
                    </p>
                    </div>
                </div>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="fas fa-star fa-sm"></i></li>
                    <li><i className="far fa-star fa-sm"></i></li>
                </ul>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    </div>
    
    {/*Team Start*/}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-primary text-uppercase">Team</h6>
                <h1 className="mb-5">Team Terbaik Kami</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/team-1.jpg" alt=""/>
                            <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="fw-bold mb-0">Inria</h5>
                            <small>Leader</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/team-2.jpg" alt=""/>
                            <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="fw-bold mb-0">Isby</h5>
                            <small>UI/UX Designer</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/team-3.jpg" alt=""/>
                            <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="fw-bold mb-0">Istiqlalia</h5>
                            <small>Fullstack Developer</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/team-4.jpg" alt=""/>
                            <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="fw-bold mb-0">Arjuna</h5>
                            <small>IT Support</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*Team End*/}
    </>
  )
}

export default tentang
import Link from "next/link"
import React from "react"
export default function Home() {
  return (
    <main>
    {/*Carousel Start */}
    <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="/bg.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex align-items-center">
                        <div className="container">
                            <div className="row align-items-center justify-content-center justify-content-lg-start">
                                <div className="col-10 col-lg-7 text-center text-lg-start">
                                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">PT. GAWE GAWE SOLUSI TEKNOLOGI</h6>
                                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Solusi semua masalah IT</h1>
                                    <Link href="" className="btn btn-primary py-3 px-5 animated slideInDown">Pelajari Lebih Lanjut<i className="fa fa-arrow-right ms-3"></i></Link>
                                </div>
                                <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                    <img className="img-fluid" src="img/carousel-1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="/bg.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex align-items-center">
                        <div className="container">
                            <div className="row align-items-center justify-content-center justify-content-lg-start">
                                <div className="col-10 col-lg-7 text-center text-lg-start">
                                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">PT. GAWE GAWE SOLUSI TEKNOLOGI</h6>
                                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Solusi semua masalah IT</h1>
                                    <Link href="" className="btn btn-primary py-3 px-5 animated slideInDown">Pelajari Lebih Lanjut<i className="fa fa-arrow-right ms-3"></i></Link>
                                </div>
                                {/* <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                    <img className="img-fluid" src="img/carousel-2.png" alt=""/>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    {/*Carousel End */}


    {/*Service Start */}
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
            <Link href="/layanan"><p className="text-primary text-end">Selengkapnya<i className="fa fa-arrow-right mx-2"></i></p></Link>
        </div>
    </div>
    {/*Service End */}


    {/*About Start */}
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
                    <Link href="/tentang" className="btn btn-primary py-3 px-5">Selengkapnya<i className="fa fa-arrow-right ms-3"></i></Link>
                </div>
            </div>
        </div>
    </div>
    {/*About End */}


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
                <Link href="/produk" className="btn btn-primary py-3 px-5">Selengkapnya<i className="fa fa-arrow-right ms-3"></i></Link>
            </div>
        </div>
    </div>
    {/*Fact End */}




    {/*Booking Start */}
    <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 py-5">
                    <div className="py-5">
                        <h1 className="text-white mb-4">Bergabunglah Bersama Kami!</h1>
                        <p className="text-white mb-0">Jadilah partner kami dan dapatkan penawaran khusus dari kami</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                        <h1 className="text-white mb-4">Buat Janji Temu</h1>
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control border-0" placeholder="Nama" style={{height: '55px'}}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control border-0" placeholder="Email" style={{height: '55px'}}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <select className="form-select border-0" style={{height: '55px'}}>
                                        <option selected>Pilih Layanan</option>
                                        <option value="1">Service 1</option>
                                        <option value="2">Service 2</option>
                                        <option value="3">Service 3</option>
                                    </select>
                                </div>
                                <div className="col-12 col-sm-6" style={{ position:'relative' }}>
                                    <div className="date" id="date1" data-target-input="nearest">
                                        <input type="text"
                                            className="form-control border-0 datetimepicker-input"
                                            placeholder="Service Date" data-target="#date1" data-toggle="datetimepicker" style={{height: '55px'}}/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control border-0" placeholder="Pesan"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" type="submit">Buat Janji</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*Booking End */}

    {/*Testimonial Start */}
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
                <i className="fa fa-arrow-right mx-2"></i>
            </button>
            </div>
        </div>
        <Link href="/tentang"><p className="text-primary text-end">Selengkapnya<i className="fa fa-arrow-right mx-2"></i></p></Link>
    </div>
    {/*Testimonial End */}

    <div className="container">
            <div className="text-center">
                <h6 className="text-primary text-uppercase">BLOG</h6>
                <h1 className="mb-5">Berita Terbaru Kami</h1>
            </div>
                <div className="row mt-n5">
                    <div className="col-md-6 col-lg-4 mt-5 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div className="blog-grid">
                            <div className="blog-grid-img position-relative"><img alt="img" src="/bg.jpg"/></div>
                            <div className="blog-grid-text p-4">
                                <h3 className="h5 mb-3"><a href="#!">Business tool for your customer</a></h3>
                                <p className="display-30">Exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                <div className="meta meta-style2">
                                    <ul>
                                        <li><p className="text-primary"><i className="fas fa-calendar-alt"></i> 10 Jul, <script>document.write(new Date().getFullYear())</script>2022</p></li>
                                        <li><p className="text-primary"><i className="fas fa-user"></i> User</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-5 wow fadeInUp" data-wow-delay=".4s" style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInUp" }}>
                        <div className="blog-grid">
                            <div className="blog-grid-img position-relative"><img alt="img" src="/bg.jpg"/></div>
                            <div className="blog-grid-text p-4">
                                <h3 className="h5 mb-3"><a href="#!">Growth your business strategy</a></h3>
                                <p className="display-30">Exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                <div className="meta meta-style2">
                                    <ul>
                                        <li><p className="text-primary"><i className="fas fa-calendar-alt"></i> 25 Jun, <script>document.write(new Date().getFullYear())</script>2022</p></li>
                                        <li><p className="text-primary"><i className="fas fa-user"></i> User</p></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-5 wow fadeInUp" data-wow-delay="1.2s" style={{ visibility: "visible", animationDelay: "1.2s", animationName: "fadeInUp" }}>
                        <div className="blog-grid">
                            <div className="blog-grid-img position-relative"><img alt="img" src="/bg.jpg"/></div>
                            <div className="blog-grid-text p-4">
                                <h3 className="h5 mb-3"><a href="#!">Business people meeting</a></h3>
                                <p className="display-30">Exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                <div className="meta meta-style2">
                                    <ul>
                                        <li><p className="text-primary"><i className="fas fa-calendar-alt"></i> 10 Feb, <script>document.write(new Date().getFullYear())</script>2022</p></li>
                                        <li><p className="text-primary"><i className="fas fa-user"></i> User</p></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Link href="/blog"><p className="text-primary text-end">Selengkapnya<i className="fa fa-arrow-right mx-2"></i></p></Link>
                </div>
            </div>
    
    </main>
  )
}

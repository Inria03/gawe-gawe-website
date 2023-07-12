import Link from 'next/link'
import React from 'react'

export default function layanan() {
  return (
    <div>
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
                            <Link className="text-secondary border-bottom" href="/detaillayanan">Selengkapnya</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="d-flex bg-light py-5 px-4">
                        <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Mobile App</h5>
                            <p>Pembuatan aplikasi mobile yang mendukung dengan sistem operasi terbaru</p>
                            <Link className="text-secondary border-bottom" href="/detaillayanan">Selengkapnya</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Workshop</h5>
                            <p>pembuatan aplikasi dengan dukungan API (Application Programming Interface)</p>
                            <Link className="text-secondary border-bottom" href="/detaillayanan">Selengkapnya</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1s">
                    <div className="d-flex bg-light py-5 px-4">
                        <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Web App</h5>
                            <p>Pembuatan Website Responsive yang mudah digunakan dan modern</p>
                            <Link className="text-secondary border-bottom" href="/detaillayanan">Selengkapnya</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1.3s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Mobile App</h5>
                            <p>Pembuatan aplikasi mobile yang mendukung dengan sistem operasi terbaru</p>
                            <Link className="text-secondary border-bottom" href="/detaillayanan">Selengkapnya</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1.5s">
                    <div className="d-flex bg-light py-5 px-4">
                        <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Workshop</h5>
                            <p>pembuatan aplikasi dengan dukungan API (Application Programming Interface)</p>
                            <Link className="text-secondary border-bottom" href="/detaillayanan">Selengkapnya</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*Service End */}
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
    </div>
  )
}

import React from 'react'

function tentang() {
  return (
    <>
    {/*Page Header Start*/}
    <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: 'url(img/carousel-bg-1.jpg)'}}>
        <div className="container-fluid page-header-inner py-5">
            <div className="container text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">FAQ</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Tanya</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    {/*Page Header End*/}


    {/*Service Start*/}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 pt-4" style={{minHeight: '400px'}}>
                    <div className="position-relative h-50 wow fadeIn" data-wow-delay="0.1s">
                        <img className="position-absolute img-fluid w-100 h-100" src="/fotoperusahaan.jpg" style={{objectFit: 'cover'}} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text-left wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-primary text-uppercase">FAQ</h6>
                        <h1 className="mb-5">Frequently Ask Question</h1>
                     </div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Apa itu PT. Gawe Gawe
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>PT. Gawe Gawe Solusi Teknologi</strong> adalah perusahaan it Terbaik di surabaya
                                </div>
                            </div>
                        </div>  
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Apa itu PT. Gawe Gawe
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                <strong>PT. Gawe Gawe Solusi Teknologi</strong> adalah perusahaan it Terbaik di surabaya
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Apa itu PT. Gawe Gawe
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                <strong>PT. Gawe Gawe Solusi Teknologi</strong> adalah perusahaan it Terbaik di surabaya
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 py-5">
                    <div className="py-5">
                        <h1 className="text-white mb-4">Hubungi Kami !</h1>
                        <p className="text-white mb-0">Jadilah partner kami dan dapatkan penawaran khusus dari kami</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                        <h1 className="text-white mb-4">Buat Pertanyaan</h1>
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
                                <div className="col-12 col-sm-6">
                                    <div className="date" id="date1" data-target-input="nearest">
                                        <input type="text"
                                            className="form-control border-0 datetimepicker-input"
                                            placeholder="Perihal"  style={{height: '55px'}}/>
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
    {/*Service End*/}
    </>
  )
}

export default tentang
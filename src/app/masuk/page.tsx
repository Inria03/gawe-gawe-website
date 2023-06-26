import React from 'react'

function Masuk() {
  return (
    <div className='container mt-5'>
      <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-primary text-uppercase">Masuk</h6>
                <h1 className="mb-5">Gabung Bersama Kami</h1>
            </div>
            <div className="row g-4">
                <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                    <img src="/bg.jpg" style={{ height: "450px" }} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                        <form>
                        {/*Email input */}
                          <div className="form-outline mb-4">
                            <input type="email" id="form2Example1" className="form-control" />
                            <label className="form-label" htmlFor="form2Example1">Username</label>
                          </div>

                          {/*Password input */}
                          <div className="form-outline mb-4">
                            <input type="password" id="form2Example2" className="form-control" />
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                          </div>

                          {/*2 column grid layout for inline styling */}
                          <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                              {/*Checkbox */}
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="form2Example31"/>
                                <label className="form-check-label" htmlFor="form2Example31"> Ingat Saya </label>
                              </div>
                            </div>

                            <div className="col">
                              {/*Simple link */}
                              <a href="#!">Lupa Password?</a>
                            </div>
                          </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Masuk</button>
                                </div>
                          {/*Register buttons */}
                            <div className="text-center mt-5">
                              <p>Belum Punya Akun? <a href="#!">Daftar</a></p>
                              <p>Atau Masuk Dengan:</p>
                              <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                              </button>

                              <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                              </button>

                              <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                              </button>

                              <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                              </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Masuk
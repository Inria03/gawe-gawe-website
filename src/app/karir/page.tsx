import Link from 'next/link'
import React from 'react'

function karir() {
  return (
    <div className='container mt-5'>
      <div className="career-area pt-100 pb-100">
        <div className="container"><div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="CareerContent_careerItemContent__3Kv6k">
              <h3>We're looking for</h3>
              <div className="CareerContent_careerBox__2Qtuu">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-sm-6">
                    <div className="CareerContent_careerContent__2a7t6">
                      <h4>Team Lead - Digital Marketing</h4>
                      <p><span>Education:</span> BBA / M.A.</p>
                      <p><span>Experience:</span> At least 5 years</p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="CareerContent_careerBtn__3MZfN">
                      <Link href="/detailKarir"className="btn btn-primary w-100 py-3">Details</Link>
                      <p><span>Deadline:</span> July 30, 2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="CareerContent_careerBox__2Qtuu">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-sm-6">
                    <div className="CareerContent_careerContent__2a7t6">
                      <h4>Senior ASP.Net Core Developer</h4>
                      <p><span>Education:</span> CSE / M.A.</p>
                      <p><span>Experience:</span> At least 5 years</p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="CareerContent_careerBtn__3MZfN">
                      <a className="btn btn-primary w-100 py-3" href="/career-details/">Details</a>
                      <p><span>Deadline:</span> Aug 02, 2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="CareerContent_careerBox__2Qtuu">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-sm-6">
                    <div className="CareerContent_careerContent__2a7t6">
                      <h4>Android Developer</h4>
                      <p><span>Education:</span> CSE / M. Sc.</p>
                      <p><span>Experience:</span> At least 3 years</p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="CareerContent_careerBtn__3MZfN">
                      <a className="btn btn-primary w-100 py-3" href="/career-details/">Details</a>
                      <p><span>Deadline:</span> Aug 05, 2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="CareerContent_careerBox__2Qtuu">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-sm-6">
                    <div className="CareerContent_careerContent__2a7t6">
                      <h4>Graphic Designer</h4>
                      <p><span>Education:</span> UI/UX / M.A.</p>
                      <p><span>Experience:</span> At least 3 years</p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="CareerContent_careerBtn__3MZfN">
                      <a className="btn btn-primary w-100 py-3" href="/career-details/">Details</a>
                      <p><span>Deadline:</span> Aug 10, 2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="CareerContent_careerBox__2Qtuu">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-sm-6">
                    <div className="CareerContent_careerContent__2a7t6">
                      <h4>Digital Marketing Executive</h4>
                      <p><span>Education:</span> UI/UX / M.A.</p>
                      <p><span>Experience:</span> At least 7 years</p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="CareerContent_careerBtn__3MZfN">
                      <a className="btn btn-primary w-100 py-3" href="/career-details/">Details</a>
                      <p><span>Deadline:</span> Aug 20, 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className=" h-100 d-flex flex-column center text-center p-5 wow zoomIn">
              <div>
                <h3 className="text-primary mb-4">Lamar Pekerjaan dan Gabung Bersama Kami</h3>
              </div>
              <form>
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                            <label htmlFor="name">Nama Lengkap</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                            <label htmlFor="subject">Nomer Telepon</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                            <label htmlFor="subject">Link Portofolio</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                          <select className="form-select p-1 px-2" style={{height: '55px'}} name='Posisi' id='posisi'>
                                        <option selected>Posisi</option>
                                        <option value="1">Service 1</option>
                                        <option value="2">Service 2</option>
                                        <option value="3">Service 3</option>
                          </select>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "100px" }}></textarea>
                            <label htmlFor="message">Ceritakan Dirimu</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary w-100 py-3" type="submit">Lamar</button>
                    </div>
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

export default karir
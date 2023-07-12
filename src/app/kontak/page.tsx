import Link from 'next/link'
import React from 'react'

function kontak() {
  return (
    <div className='container'>
      <iframe className='mt-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8560216988935!2d1
      12.74459667430781!3d-7.257222292749444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0
      x2dd7f9658fe40279%3A0xfc241afb8ab12b67!2sJl.%20Pacar%20No.2a%2C%20Ketabang%2C%20Kec.%20Genteng%2C
      %20Surabaya%2C%20Jawa%20Timur%2060272!5e0!3m2!1sen!2sid!4v1688060918520!5m2!1sen!2sid" 
      width="1300" height="450" style={{border: "0"}} allowFullScreen loading="lazy"
       referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="row g-4 mt-1 mb-1">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <Link href="https://goo.gl/maps/HYW4PTEWDDaF8y7C9"className="mb-2"><p><i className="fa fa-map-marker-alt me-3"></i>Jl. Pacar No. 2a Surabaya</p></Link>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <Link href="https://wa.me/6285899731884" className="mb-2"><p><i className="fa fa-phone-alt me-3"></i>+62 (858)99731884</p></Link>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <Link href="/kontak"><p className="mb-2"><i className="fa fa-envelope me-3"></i>emailgawe@gmail.com</p></Link>
        </div>
      </div>
      <div className="container h-100 d-flex flex-column center text-center p-5 wow zoomIn" style={{ width:'1000px' }}>
    <div>
    <h3 className="text-primary mb-4">Hubungi Kami</h3>
    </div>
    <form>
    <div className="row g-3">
        <div className="col-md-6">
            <div className="form-floating">
                <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                <label htmlFor="name">Nama</label>
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
                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "100px" }}></textarea>
                <label htmlFor="message">Pesan</label>
            </div>
        </div>
        <div className="col-12">
            <button className="btn btn-primary w-100 py-3" type="submit">Kirim</button>
        </div>
    </div>
    </form>
  </div>           
  </div>
  )
}

export default kontak
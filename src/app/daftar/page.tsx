import Link from 'next/link'
import React from 'react'

function daftar() {
  return (
    <div>
      <div className="container h-100 d-flex flex-column center text-center p-5 wow zoomIn" style={{ width:'1000px' }}>
    <div>
    <h3 className="text-primary mb-4">Daftar</h3>
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
                <input type="text" className="form-control" id="username" placeholder="Username"/>
                <label htmlFor="username">Username</label>
            </div>
        </div>
        <div className="col-12">
            <div className="form-floating">
                <input type="password" className="form-control" id="password" placeholder="Password"/>
                <label htmlFor="password">Password</label>
            </div>
        </div>
        <div className="col-12">
            <div className="form-floating">
                <input type="password" className="form-control" id="repassword" placeholder="Tulis Ulang Password"/>
                <label htmlFor="repassword">Tulis Ulang Password</label>
            </div>
        </div>
        <div className="col d-flex justify-content-center">
          {/*Checkbox */}
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="centangkebijakan"/>
            <label className="form-check-label" htmlFor="centangkebijakan"> Saya Menyetujui <Link href='/kebijakan' className='text-primary'>Aturan &amp; Kebijakan</Link> PT. Gawe Gawe Solusi Teknologi</label>
          </div>
        </div>
        <div className="col-12">
            <button className="btn btn-primary w-100 py-3" type="submit">Buat Akun</button>
        </div>
    </div>
    </form>
  </div>
    </div>
  )
}

export default daftar
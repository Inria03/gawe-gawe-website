import React from 'react'

function lupakonfirmasi() {
  return (
    <div>
      <div className="container h-100 d-flex flex-column center text-center p-5 wow zoomIn" style={{ width:'1000px' }}>
    <div>
    <h3 className="text-primary mb-4">Konfirmasi Email</h3>
    </div>
    <form>
    <div className="row g-3">
        <div className="">
            <div className="form-floating">
                <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                <label htmlFor="email">Email</label>
            </div>
        </div>
        <p>Jika Email Anda Terdaftar , Anda Akan Mendapatkan Email Berisi Link Untuk Mengganti Password</p>
        <div className="col-12">
            <a className="btn btn-primary w-100 py-3" href='/lupapassword'>Konfirmasi</a>
        </div>
    </div>
    </form>
  </div>
    </div>
  )
}

export default lupakonfirmasi
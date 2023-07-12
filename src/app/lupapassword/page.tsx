import React from 'react'

function lupapassword() {
  return (
    <div>
      <div className="container h-100 d-flex flex-column center text-center p-5 wow zoomIn" style={{ width:'1000px' }}>
    <div>
    <h3 className="text-primary mb-4">Buat Password Baru</h3>
    </div>
    <form>
    <div className="row g-3 center">
        <div className="col-md-6">
            <div className="form-floating">
                <input type="password" className="form-control" id="passwordBaru" placeholder="Password Baru"/>
                <label htmlFor="passwordBaru">Password Baru</label>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-floating">
                <input type="password" className="form-control" id="tulisPasswordBaru" placeholder="Tulis Ulang Password Baru"/>
                <label htmlFor="tulisPasswordBaru">Tulis Ulang Password Baru</label>
            </div>
        </div>
        <div className="col-12">
            <button className="btn btn-primary w-100 py-3" type="submit">Ubah Password</button>
        </div>
    </div>
    </form>
  </div>
    </div>
  )
}

export default lupapassword
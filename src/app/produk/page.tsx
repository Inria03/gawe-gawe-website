import Link from 'next/link'
import React from 'react'

function produk() {
  return (
    <div>
      <div className="container-fluid fact  my-5 py-5">
        <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-primary text-uppercase">SOROTAN</h6>
                <h1 className="mb-5">Produk kami yang terbaru</h1>
            </div>
            <div className="row g-4">
                <Link href="/detailProduk" className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                <img className="img-thumbnail" src="/rehidro.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
                    <p className="text-black fw-bolder mb-0 mt-2">Rehidro</p>
                </Link>
                <Link href="/detailProduk" className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                <img className="img-thumbnail" src="/Arena-o.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
                    <p className="text-black fw-bolder mb-0 mt-2">Arena-O</p>
                </Link>
                <Link href="/detailProduk" className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                <img className="img-thumbnail" src="/Journal florist.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
                    <p className="text-black fw-bolder mb-0 mt-2">Journal Florist</p>
                </Link>
                <Link href="/detailProduk" className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                <img className="img-thumbnail" src="/Qlassku.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
                    <p className="text-black fw-bolder mb-0 mt-2">Qlassku</p>
                </Link>
                <Link href="/detailProduk" className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                <img className="img-thumbnail" src="/rehidro.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
                    <p className="text-black fw-bolder mb-0 mt-2">Rehidro</p>
                </Link>
                <Link href="/detailProduk" className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                <img className="img-thumbnail" src="/Arena-o.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
                    <p className="text-black fw-bolder mb-0 mt-2">Arena-O</p>
                </Link>
                <Link href="/detailProduk" className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                <img className="img-thumbnail" src="/Journal florist.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
                    <p className="text-black fw-bolder mb-0 mt-2">Journal Florist</p>
                </Link>
                <Link className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s" href="/detailProduk">
                <img className="img-thumbnail" src="/Qlassku.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
                    <p className="text-black fw-bolder mb-0 mt-2">Qlassku</p>
                </Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default produk
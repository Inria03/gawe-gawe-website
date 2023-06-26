import Link from 'next/link'
import React from 'react'

function detailProduk() {
  return (
    <div>
      <div className="container-fluid fact  my-5 py-5">
        <div className="container">
        <div className="text-left wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-5">qlassku</h1>
            <p>qlassku merupakan produk terbaik kami Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat facilis quis numquam inventore provident hic. Voluptatibus non ut dignissimos aliquid maiores, nisi odio minima accusamus doloremque quas aspernatur amet. Velit, voluptatem. Iusto perspiciatis quaerat officiis doloremque atque temporibus voluptatum illo? Quibusdam amet cumque, dolorem error eaque sit quia nemo, culpa officia veniam, aliquid a omnis. Nostrum impedit quae blanditiis dolorum, laborum beatae ea delectus eos ex doloribus voluptatem repellendus dignissimos ipsum omnis rerum labore iste accusamus optio deleniti quia iusto ab. Deserunt praesentium quasi architecto autem tempora ab ipsa voluptatum quaerat pariatur, alias vero tempore deleniti unde sit eveniet nemo.</p>
        </div>
        <div className="row g-4">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">TAMPILAN PRODUK</h6>
        </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
            <img className="img-thumbnail" src="/Qlassku.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
            <img className="img-thumbnail" src="/Qlassku.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
            <img className="img-thumbnail" src="/Qlassku.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
            <img className="img-thumbnail" src="/Qlassku.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
            <img className="img-thumbnail" src="/Qlassku.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
            <img className="img-thumbnail" src="/Qlassku.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
            <img className="img-thumbnail" src="/Qlassku.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
            <img className="img-thumbnail" src="/Qlassku.jpg" style={{objectFit: 'cover',height:'200px'}} alt=""/>
            </div>
        </div>
        <div>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase mt-5">TRAILER</h6>
        </div>
        <iframe className="mt-5" width="1300" height="576" src="https://www.youtube.com/embed/6Ejga4kJUts?list=RDMMj_MlBCb9-m8" title="The Cranberries - Zombie (Official Music Video)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        </div>
    </div>
    </div>
  )
}

export default detailProduk
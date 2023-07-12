import React from 'react'

function detailblog() {
  return (
    <div className='mt-5'>
        <div className="container">
            <div className="row">
                <div className="col-md-10 mb40">
                    <article>
                        <img src="bg.jpg" alt="" width="1000" className="img-fluid mb30"/>
                        <div className="post-content">
                            <h3>A smart template that works 24/7 for your company</h3>
                            <ul className="post-meta list-inline">
                                <li className="list-inline-item">
                                    <i className="fa fa-user-circle-o"></i> <a href="#">John Doe</a>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fa fa-calendar-o"></i> <a href="#">29 June 2017</a>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fa fa-tags"></i> <a href="#">Bootstrap4</a>
                                </li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, </p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, </p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, </p>
                            <ul className="list-inline share-buttons">
                                <li className="list-inline-item">Share Post:</li>
                                <li className="list-inline-item">
                                    <a href="#" className="social-icon-sm si-dark si-colored-facebook si-gray-round">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="social-icon-sm si-dark si-colored-twitter si-gray-round">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="social-icon-sm si-dark si-colored-linkedin si-gray-round">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                            <hr className="mb40"/>
                            <h4 className="mb40 text-uppercase font500">Tentang Penulis</h4>
                            <div className="media mb40">
                                <i className="d-flex mr-3 fa fa-user-circle fa-5x text-primary"></i>
                                <div className="media-body">
                                    <h5 className="mt-0 font700">Jane Doe</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="col-md-2 mb40">
                    <div>
                        <h4 className="sidebar-title">Latest News</h4>
                        <ul className="list-unstyled">
                            <li className="media">
                                <img className="d-flex mr-3 img-fluid" width="150" src="Qlassku.jpg" alt="Generic placeholder image"/>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1"><a href="#">Berita 1</a></h5>
                                    <p className='text-primary'><i className="fas fa-calendar-alt"></i> 10 Jul, <script>document.write(new Date().getFullYear())</script>2022<p className='text-primary'><i className="fas fa-user"></i> User</p></p>
                                </div>
                            </li>
                            <li className="media my-4">
                                <img className="d-flex mr-3 img-fluid" width="150" src="Qlassku.jpg" alt="Generic placeholder image"/>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1"><a href="#">Berita 2</a></h5>
                                    <p className='text-primary'><i className="fas fa-calendar-alt"></i> 10 Jul, <script>document.write(new Date().getFullYear())</script>2022<p className='text-primary'><i className="fas fa-user"></i> User</p></p>
                                </div>
                            </li>
                            <li className="media">
                                <img className="d-flex mr-3 img-fluid" width="150" src="Qlassku.jpg" alt="Generic placeholder image"/>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1"><a href="#">Berita 3</a></h5>
                                    <p className='text-primary'><i className="fas fa-calendar-alt"></i> 10 Jul, <script>document.write(new Date().getFullYear())</script>2022<p className='text-primary'><i className="fas fa-user"></i> User</p></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default detailblog
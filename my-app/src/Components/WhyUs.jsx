import React from 'react'
import './WhyUs.css'
function WhyUs() {
    return (
        <section id="why-us" className="why-us section-bg">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="card">
                            <img src="./img/why-us-1.jpg" className="card-img-top" alt="..." />
                                <div className="card-icon">
                                    <i className="bx bx-book-reader"></i>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="">Our Mission</a></h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="card">
                            <img src="./img/why-us-2.jpg" className="card-img-top" alt="..." />
                                <div className="card-icon">
                                    <i className="bx bx-calendar-edit"></i>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="">Our Plan</a></h5>
                                    <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="card">
                            <img src="./img/why-us-3.jpg" className="card-img-top" alt="..." />
                                <div className="card-icon">
                                    <i className="bx bx-landscape"></i>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="">Our Vision</a></h5>
                                    <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. </p>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default WhyUs

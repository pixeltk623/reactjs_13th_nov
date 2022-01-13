import React from 'react'
import './Hero.css';
function Hero() {
    return (
        <section id="hero">
            <div className="hero-container">
                <h1>Welcome to Siimple</h1>
                <h2>Please, fill out the for below to be notified for the latest updates!</h2>

                <form action="forms/notify.php" method="post" role="form" className="php-email-form">
                    <div className="row no-gutters">
                        <div className="col-md-6 form-group pr-md-1">
                            <input 
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                required />
                        </div>
                        <div className="col-md-6 form-group pl-md-1">
                            <input 
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                required />
                        </div>
                    </div>

                    <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your notification request was sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Notify me!</button></div>
                </form>
            </div>
        </section>
    )
}

export default Hero

import styles from './Contact.module.css'
import Image from 'next/image'

import contact from '../../../src/assets/contact/contact.png'
import star from '../../../src/assets/logo/star-icon.png'

const Contact = () => {
    return (
        <>
            <section className={styles.contactArea}>
                <div className="container">
                    <div className={styles.sectionTitle}>
                        <h2>Ready to Get Started?</h2>
                        <p>Your email address will not be published. Required fields are marked *</p>
                    </div>
                    <div className="address">
                        <div className="row">
                            <div className="col-md-sm-12 col-md-6 col-lg-6 col-xl-6 mb-2">
                                <div className={styles.location}>
                                    <div className={styles.locationContent}>
                                        <h2 className="text-center">
                                            <i className="fa fa-map-marker" aria-hidden="true" style={{fontSize: 60}}/>
                                        </h2>
                                        <h4 className="text-center">Our Address</h4>
                                        <p className="text-center mb-5">
                                            Eastern Kamalapur Complex
                                            64-68 North Kamlapur
                                            2nd Floor, room 218
                                            Motijheel, Dhaka-1000
                                            Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-sm-12 col-md-6 col-lg-6 col-xl-6 mb-2">
                                <div className="row">
                                    <div className="col-md-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
                                        <div className={styles.email}>
                                            <div className={styles.boxContent}>
                                                <h2 className="text-center">
                                                    <i className="fa fa-envelope" aria-hidden="true"
                                                       style={{fontSize: 60}}/>
                                                </h2>
                                                <h5 className="text-center">E-mail Us</h5>
                                                <p className="text-center">belatech@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
                                        <div className={styles.email}>
                                            <div className={styles.boxContent}>
                                                <h2 className="text-center">
                                                    <i className="fa fa-phone" aria-hidden="true"
                                                       style={{fontSize: 60}}/>
                                                </h2>
                                                <h5 className="text-center">Call Us </h5>
                                                <p className="text-center">01987132107</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-sm-12 col-md-6 col-lg-6 col-xl-6 mb-2">
                                <iframe
                                    className={`${styles.googleMap} mb-4 mb-lg-0`}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.4521028732247!2d90.42527631018355!3d23.73125221362765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x47fc03bc903dfe0!2sEastern+Commercial+Complex!5e0!3m2!1sen!2sbd!4v1564505983152!5m2!1sen!2sbd"
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </div>
                            <div className="col-md-sm-12 col-md-6 col-lg-6 col-xl-6 mb-2">
                                <div className={styles.contactBox}>
                                    <form action="#" method="post">
                                        <div className="row">
                                            <div className="col form-group mb-4">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div className="col form-group  mb-4">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="Your Email"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group  mb-4">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="subject"
                                                placeholder="Subject"
                                            />
                                        </div>
                                        <div className="form-group  mb-4">
                                            <textarea
                                                className="form-control"
                                                name="message"
                                                rows="5"
                                                placeholder="Message"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Contact;
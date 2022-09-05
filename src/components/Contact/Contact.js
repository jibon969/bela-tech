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
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-image">
                                <Image src={contact} alt="image"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.contactForm}>
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className={styles.formControl}
                                                    placeholder="Your name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className={styles.formControl}
                                                    placeholder="Your email address"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="phone_number"
                                                    className={styles.formControl}
                                                    placeholder="Your phone number"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea
                                                    name="message"
                                                    className={styles.formControlTextArea}
                                                    cols="30"
                                                    rows="6"
                                                    placeholder="Write your message..."
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <button
                                                type="submit"
                                                className={styles.defaultBtn}>
                                                <i className="flaticon-tick"/>
                                                <span>Send Message </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Contact;
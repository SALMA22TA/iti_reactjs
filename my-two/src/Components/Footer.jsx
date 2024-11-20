import React from 'react';
import '../Sty.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                {/* Contact Us section */}
                <div className='cont'>
                    <h3>Contact Us</h3>
                </div>
                <div className='co'>
                    <p>
                        Get in touch with us via mail or phone.
                    </p>
                    <p>
                        We are waiting for your call or message!
                    </p>
                    <a className="btn rounded-pill main-btn w-100" href="mailto:salmastyles100@gmail.com">Send Via Gmail</a>
                </div>


                {/* Footer Logo and Quote */}
                <div className="footer-logo-section">
                    <div className="footer-logo">Movie4U</div>
                    <p>"The best place to discover movies"</p>
                    <p>&copy; 2024 MOVIE4U. All rights reserved.</p>
                </div>

                {/* Social media icons */}
                <div className="footer-social">
                    <h6>To Keep In Touch With Eng. Salma:</h6>
                    <ul className="d-flex mt-3 list-unstyled gap-4">
                        <li>
                            <a className="d-block text-light" href="https://www.facebook.com/salma.taha.9022?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-facebook fa-lg facebook rounded-circle p-2"></i>
                            </a>
                        </li>
                        <li>
                            <a className="d-block text-light" href="https://github.com/SALMA22TA" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-github fa-lg github rounded-circle p-2"></i>
                            </a>
                        </li>
                        <li>
                            <a className="d-block text-light" href="https://x.com/SalMaTa02?t=3VHFP8ClSOSBBSjNcpM7ZA&s=09" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-twitter fa-lg twitter rounded-circle p-2"></i>
                            </a>
                        </li>
                        <li>
                            <a className="d-block text-light" href="https://www.instagram.com/salmataha441?igsh=MTh4dG9pb3QzY3c0MA==" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-instagram fa-lg instagram rounded-circle p-2"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="links">
                    <h3>Links</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

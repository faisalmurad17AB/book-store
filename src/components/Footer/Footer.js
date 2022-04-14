import React from 'react'
const Footer = () => {
  return (
    <section class="appie-footer-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="footer-about-widget">
                        <div class="logo">
                            <a href="#"><img src="assets/images/logo.jpg" alt=""/></a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, explicabo!</p>
                        <a href="#">Read More <i class="fa-solid fa-arrow-right"></i></a>
                        <div class="social mt-30">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <div class="footer-navigation">
                        <h4 class="title">Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Case Studies</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="footer-navigation">
                        <h4 class="title">Support</h4>
                        <ul>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">Faqs</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="footer-widget-info">
                        <h4 class="title">Get In Touch</h4>
                        <ul>
                            <li><a href="#"><i class="fa-solid fa-envelope"></i> abc@gmail.com</a></li>
                            <li><a href="#"><i class="fa-solid fa-phone"></i> +(92) 300 123 4567</a></li>
                            <li><a href="#"><i class="fa-solid fa-map-marker-alt"></i>Islamabad</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-copyright d-flex align-items-center justify-content-between pt-35">
                        <div class="apps-download-btn">
                            <ul>
                                <li><a href="#"><i class="fab fa-apple"></i> Download for iOS</a></li>
                                <li><a class="item-2" href="#"><i class="fab fa-google-play"></i> Download for Android</a></li>
                            </ul>
                        </div>
                        <div class="copyright-text">
                            <p>Copyright © 2022 ABC. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="back-to-top">
        <a href="#"><i class="fa-solid fa-arrow-up"></i></a>
    </div>
    </section>
  )
}

export default Footer

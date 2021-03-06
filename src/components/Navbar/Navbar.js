import React from 'react'
const Navbar = () => {
    return (
        <div>
            <div class="offcanvas_menu">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="offcanvas_menu_wrapper">
                        <div class="canvas_close">
                            <a href="#"></a>
                        </div>
                        <div class="offcanvas-brand text-center mb-40">
                            {/* <img src="assets/images/logo.png" alt="" /> */}
                        </div>
                        <div id="menu" class="text-left ">
                            <ul class="offcanvas_main_menu">
                                <li class="menu-item-has-children active">
                                    <a href="#">Home</a>
                                    <ul class="sub-menu">
                                        <li><a href="index.html">Home 1 </a></li>
                                        <li><a href="index-2.html">Home 2</a></li>
                                        <li><a href="index-3.html">Home 3</a></li>
                                        <li><a href="index-4.html">Home 4</a></li>
                                        <li><a href="index-5.html">Home 5</a></li>
                                        <li><a href="index-6.html">Home 6</a></li>
                                        <li><a href="index-7.html">Home 7</a></li>
                                        <li><a href="index-8.html">Home 8</a></li>
                                        <li><a href="index-rtl.html">Home Rtl</a></li>
                                        <li><a href="index-dark.html">Home Dark</a></li>
                                    </ul>
                                    </li>

                                <li class="menu-item-has-children active">
                                    <a href="#">Pages</a>
                                    <ul class="sub-menu">
                                        <li><a href="about-us.html">About Us 1</a></li>
                                        <li><a href="about-us-2.html">About Us 2</a></li>
                                        <li><a href="error.html">Error</a></li>
                                        <li><a href="service-details.html">Service</a> </li>
                                        <li><a href="service-details.html"> Service Details </a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children active">
                                    <a href="#">News</a>
                                    <ul class="sub-menu">
                                        <li><a href="news.html">news page</a></li>
                                        <li><a href="single-news.html">Single News</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children active">
                                    <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div class="offcanvas-social">
                            <ul class="text-center">
                                <li><a href="$"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="$"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="$"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="$"><i class="fab fa-dribbble"></i></a></li>
                            </ul>
                        </div>
                        <div class="footer-widget-info">
                            <ul>
                                <li><a href="#"><i class="fal fa-envelope"></i> support@appie.com</a></li>
                                <li><a href="#"><i class="fal fa-phone"></i> +(642) 342 762 44</a></li>
                                <li><a href="#"><i class="fal fa-map-marker-alt"></i> 442 Belle Terre St Floor 7, San Francisco, AV 4206</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <header class="appie-header-area appie-sticky">
        <div class="container">
            <div class="header-nav-box">
                <div class="row align-items-center">
                    <div class="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                        <div class="appie-logo-box">
                            <a href="index.html">
                                <img src="assets/images/logo.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                        <div class="appie-header-main-menu">
                            <ul>
                                <li>
                                    <a href="index.html">Home <i class="fa-solid fa-angle-down"></i></a>
                                    <ul class="sub-menu big-device-none">
                                        <li><a href="index.html">Home 1</a></li>
                                        <li><a href="index-2.html">Home 2</a></li>
                                        <li><a href="index-3.html">Home 3</a></li>
                                        <li><a href="index-4.html">Home 4</a></li>
                                        <li><a href="index-5.html">Home 5</a></li>
                                        <li><a href="index-6.html">Home 6</a></li>
                                        <li><a href="index-7.html">Home 7</a></li>
                                        <li><a href="index-8.html">Home 8</a></li>
                                        <li><a href="index-rtl.html">Home Rtl</a></li>
                                        <li><a href="index-dark.html">Home Dark</a></li>
                                    </ul>
                                    {/* <div class="mega-menu-main-wrap pt-10">
                                        <ul class="mega-menu-home">
                                            <li><a href="index.html">
                                            <img src="./assets/images/pages/index.png" alt="" /> Demo 1 </a>
                                            </li>
                                            <li><a href="index-2.html">
                                            <img src="./assets/images/pages/index-2.png" alt="" /> Demo 2 </a>
                                            </li>
                                            <li><a href="index-3.html">
                                            <img src="./assets/images/pages/index-3.png" alt="" /> Demo 3 </a>
                                            </li>
                                            <li><a href="index-4.html">
                                            <img src="./assets/images/pages/index-4.png" alt="" /> Demo 4 </a>
                                            </li>
                                            <li><a href="index-5.html">
                                            <img src="./assets/images/pages/index-5.png" alt="" /> Demo 5 </a>
                                            </li>
                                            <li><a href="index-6.html">
                                            <img src="./assets/images/pages/index-6.png" alt="" /> Demo 6 </a>

                                            </li>
                                            <li><a href="index-7.html">
                                            <img src="./assets/images/pages/index-7.png" alt="" /> Demo 7 </a>
                                            </li>
                                            <li><a href="index-8.html">
                                            <img src="./assets/images/pages/index-8.png" alt="" /> Demo 8 </a>
                                            </li>
                                            <li><a href="index-rtl.html">
                                            <img src="./assets/images/pages/index-dark.png" alt="" /> Demo 9 </a>
                                            </li>
                                            <li><a href="index-dark.html">
                                            <img src="./assets/images/pages/index-rtl.png" alt="" /> Demo 10 </a>
                                            </li>
                                        </ul>
                                    </div> */}

                                </li>

                                <li> <a href="#"> Mega Menu  <i class="fa-solid fa-angle-down"></i> </a>
                                    <div class="pages-mega-menu mega-menu-mainn-wrap pt-50 pb-30">

                                        <ul>
                                            <li> <a  class="pages-main-content hot" href="#"> Demo Layouts</a> </li>
                                            <li> <a href="#"> Categories </a> </li>
                                            <li> <a href="#"> Basic </a> </li>
                                            <li> <a href="#"> Parallax </a> </li>

                                        </ul>

                                        <ul>
                                            <li> <a class="pages-main-content" href="#"> Pre-built pages </a> </li>
                                            <li><a href="about-us.html">About Us 1</a></li>
                                            <li><a href="about-us-2.html">About Us 2</a></li>
                                            <li><a href="error.html">About Us 3</a></li>

                                        </ul>

                                        <ul>
                                            <li> <a class="pages-main-content projects" href="#"> Portfolio </a> </li>
                                            <li> <a href="#"> Standard </a> </li>
                                            <li> <a href="#"> Alternative </a> </li>
                                            <li> <a href="#"> Alternative </a> </li>
                                            </ul>


                                        <ul class="recent-post-main-wrap">
                                            <li class="mega-r-post"> Recent Posts </li>
                                            <div class="mega-menu-recent-ports">
                                                <ul class="mega-menu-ul-block">

                                                    <li class="recent-right-text">
                                                        <div class="mega-recent-post-text">
                                                            <a href="#"><img src="./assets/images/blog/3.jpg" alt=""/></a>
                                                            <div class="mega-recent-right-txt">
                                                                <a class="mega-recent-ftxt" href="#">
                                                                    <h5> Permalink to A companion for extra sleeping </h5>
                                                                </a>
                                                                <ul class="mega-menu-ul-block mega-menu-ul-block-lst">
                                                                    <li> July 23, 2016 </li>
                                                                    <li> <a class="blog-comment" href="#"> 1 Comment </a> </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                             </ul>
                                         </div>
                                     </li><li>
                                    <a href="#">Pages  <i class="fa-solid fa-angle-down"></i></a>
                                    <ul class="sub-menu">
                                        <li><a href="about-us.html">About Us 1</a></li>
                                        <li><a href="about-us-2.html">About Us 2</a></li>
                                        <li><a href="error.html">Error</a></li>
                                        <li><a href="service-details.html">Service</a> </li>
                                        <li><a href="service-details.html"> Service Details </a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>





                                </li>

                                <li><a href="#"> Shop <i class="fa-solid fa-angle-down"></i></a>
                                    <ul class="sub-menu">
                                        <li><a href="shop.html"> Shop </a></li>
                                        <li><a href="shop-2.html"> Shop 2 </a></li>
                                        <li><a href="shop-3.html"> Shop 3 </a></li>
                                        <li><a href="shop-details.html"> Shop Details </a></li>
                                        <li><a href="shop-details-2.html"> Shop Details 2 </a></li>
                                    </ul>
                                </li>



                                <li>
                                    <a href="#">News <i class="fa-solid fa-angle-down"></i></a>
                                    <ul class="sub-menu">
                                        <li><a href="news.html">News Page</a></li>
                                        <li><a href="single-news.html">Single News</a></li>
                                    </ul>




                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                        <div class="appie-btn-box text-right">
                            <a class="login-btn" href="#"><i class="fa-solid fa-user"></i> Login</a>
                            <a class=" animated_btn ml-30" href="#">Get Started</a>
                            <div class="toggle-btn ml-30 canvas_open d-lg-none d-block">
                            <i class="fa-solid fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </header>
        </div>
    )
}

export default Navbar

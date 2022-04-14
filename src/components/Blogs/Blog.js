import React from 'react'

const Blog = () => {
  return (
    <section class="appie-blog-area pt-90 pb-95">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="appie-section-title text-center">
                    <h3 class="appie-title">Latest blog posts</h3>
                    <p>Different layouts and styles for team sections.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="appie-blog-item mt-30 wow animated fadeInUp" data-wow-duration="3000ms" data-wow-delay="200ms">
                    <div class="thumb">
                        <img src="assets/images/blog-1.jpg" alt=""/>
                    </div>
                    <div class="content">
                        <div class="blog-meta">
                            <ul>
                                <li>March 10, 2022</li>
                                <li><a href="#">Saas & App</a></li>
                            </ul>
                        </div>
                        <h3 class="title"><a href="#">Introducing New Apps Design for our iOS App</a></h3>
                        <a href="#">Learn More <i class="fal fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="appie-blog-item mt-30 wow animated fadeInUp" data-wow-duration="3000ms" data-wow-delay="400ms">
                    <div class="thumb">
                        <img src="assets/images/blog-2.jpg" alt=""/>
                    </div>
                    <div class="content">
                        <div class="blog-meta">
                            <ul>
                                <li>March 10, 2022</li>
                                <li><a href="#">Saas & App</a></li>
                            </ul>
                        </div>
                        <h3 class="title"><a href="#">How to bring Dolce to your company</a></h3>
                        <a href="#">Learn More <i class="fal fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="appie-blog-item mt-30 wow animated fadeInUp" data-wow-duration="3000ms" data-wow-delay="600ms">
                    <div class="thumb">
                        <img src="assets/images/blog-3.jpg" alt=""/>
                    </div>
                    <div class="content">
                        <div class="blog-meta">
                            <ul>
                                <li>March 10, 2022</li>
                                <li><a href="#">Saas & App</a></li>
                            </ul>
                        </div>
                        <h3 class="title"><a href="#">17 Effective Ways to Monetize Mobile Apps</a></h3>
                        <a href="#">Learn More <i class="fal fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Blog

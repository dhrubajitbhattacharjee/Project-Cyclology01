import React, { Component } from 'react'
import '../CSS_Style/blog.css'
import pic_2 from '../Gimages/pic_23.JPG'
import Slider from "react-slick";



export default class BlogSetUp extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className='md:ml-10 md:mr-10 mr-5 ml-5 mb-5'>
                <Slider {...settings}>
                    <div>
                        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

                        <div id="main-content" class="blog-page mt-28 ml-6 mr-6 mb-6">
                            <div class="container">
                                <div class="row clearfix">
                                    <div class="col-lg-8 col-md-12 left-box">
                                        <div className='border mb-4 rounded-lg'>
                                            <div class="card single_post">
                                                <div class="body">
                                                    <div class="img-post">
                                                        <img class="d-block img-fluid" src={pic_2} alt="First slide" />
                                                    </div>
                                                    <h3 className='text-white font-serif'><a href="#!">All photographs are accurate</a></h3>
                                                    <p>It is a long established fact that a reader will beDistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                                </div>
                                                <div class="footer">
                                                    <div class="actions">
                                                        <a href="#!" class="btn btn-outline-secondary">Continue Reading</a>
                                                    </div>
                                                    {/* <ul class="stats">
                        <li><a href="#!">General</a></li>
                        <li><a href="#!" class="fa fa-heart">28</a></li>
                        <li><a href="#!" class="fa fa-comment">128</a></li>
                    </ul> */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='border mb-4 rounded-lg'>
                                            <div class="card single_post">
                                                <div class="body">
                                                    <div class="img-post">
                                                        <img class="d-block img-fluid" src={pic_2} alt="First slide" />
                                                    </div>
                                                    <h3 className='text-white font-serif'><a href="#!">All photographs are accurate</a></h3>
                                                    <p>It is a long established fact that a reader will beDistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                                </div>
                                                <div class="footer">
                                                    <div class="actions">
                                                        <a href="#!" class="btn btn-outline-secondary">Continue Reading</a>
                                                    </div>
                                                    {/* <ul class="stats">
                        <li><a href="#!">General</a></li>
                        <li><a href="#!" class="fa fa-heart">28</a></li>
                        <li><a href="#!" class="fa fa-comment">128</a></li>
                    </ul> */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='border mb-4 rounded-lg'>
                                            <div class="card single_post">
                                                <div class="body">
                                                    <div class="img-post">
                                                        <img class="d-block img-fluid" src={pic_2} alt="First slide" />
                                                    </div>
                                                    <h3 className='text-white font-serif'><a href="#!">All photographs are accurate</a></h3>
                                                    <p>It is a long established fact that a reader will beDistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                                </div>
                                                <div class="footer">
                                                    <div class="actions">
                                                        <a href="#!" class="btn btn-outline-secondary">Continue Reading</a>
                                                    </div>
                                                    {/* <ul class="stats">
                        <li><a href="#!">General</a></li>
                        <li><a href="#!" class="fa fa-heart">28</a></li>
                        <li><a href="#!" class="fa fa-comment">128</a></li>
                    </ul> */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='border mb-4 rounded-lg'>
                                            <div class="card single_post">
                                                <div class="body">
                                                    <div class="img-post">
                                                        <img class="d-block img-fluid" src={pic_2} alt="First slide" />
                                                    </div>
                                                    <h3 className='text-white font-serif'><a href="#!">All photographs are accurate</a></h3>
                                                    <p>It is a long established fact that a reader will beDistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                                </div>
                                                <div class="footer">
                                                    <div class="actions">
                                                        <a href="#!" class="btn btn-outline-secondary">Continue Reading</a>
                                                    </div>
                                                    {/* <ul class="stats">
                        <li><a href="#!">General</a></li>
                        <li><a href="#!" class="fa fa-heart">28</a></li>
                        <li><a href="#!" class="fa fa-comment">128</a></li>
                    </ul> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-12 right-box">
                                        {/* <div class="card">
                                            <div class="body search">
                                                <div class="input-group m-b-0">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text pt-3 pb-3 mr-4"><i class="fa fa-search"></i></span>
                                                    </div>
                                                    <input type="text" class="form-control" placeholder="Search..." />
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* <div class="card">
                                            <div class="header">
                                                <h2 className='font-serif text-3xl'>Categories Clouds</h2>
                                            </div>
                                            <div class="body widget">
                                                <ul class="list-unstyled categories-clouds m-b-0 space-x-2">
                                                    <li><a href="#!" className='ml-2'>eCommerce</a></li>
                                                    <li><a href="#!">Microsoft Technologies</a></li>
                                                    <li><a href="#!">Creative UX</a></li>
                                                    <li><a href="#!">Wordpress</a></li>
                                                    <li><a href="#!">Angular JS</a></li>
                                                    <li><a href="#!">Enterprise Mobility</a></li>
                                                    <li><a href="#!">WebsiteDesign</a></li>
                                                    <li><a href="#!">HTML5</a></li>
                                                    <li><a href="#!">Infographics</a></li>
                                                    <li><a href="#!">WordpressDevelopment</a></li>
                                                </ul>
                                            </div>
                                        </div> */}
                                        <div class="card">
                                            <div class="header">
                                                <h2 className='font-serif text-3xl'>Popular Posts</h2>
                                            </div>
                                            <div class="body widget popular-post">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="single_post">
                                                            <p class="m-b-0 font-serif text-lg">Apple Introduces Search Ads Basic</p>
                                                            <span className='font-serif text-lg'>jun 22, 2018</span>
                                                            <div class="img-post mt-2">
                                                                <img src={pic_2} alt="AwesomeImage" />
                                                            </div>
                                                        </div>
                                                        <div class="single_post">
                                                            <p class="m-b-0 font-serif text-lg">New rules, more cars, more races</p>
                                                            <span className='font-serif text-lg'>jun 8, 2018</span>
                                                            <div class="img-post mt-2">
                                                                <img src={pic_2} alt="AwesomeImage" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="single_post">
                                                            <p class="m-b-0 font-serif text-lg">Apple Introduces Search Ads Basic</p>
                                                            <span className='font-serif text-lg'>jun 22, 2018</span>
                                                            <div class="img-post mt-2">
                                                                <img src={pic_2} alt="AwesomeImage" />
                                                            </div>
                                                        </div>
                                                        <div class="single_post">
                                                            <p class="m-b-0 font-serif text-lg">New rules, more cars, more races</p>
                                                            <span className='font-serif text-lg'>jun 8, 2018</span>
                                                            <div class="img-post mt-2">
                                                                <img src={pic_2} alt="AwesomeImage" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="header font-serif text-2xl">
                                                <h2>Instagram Post</h2>
                                            </div>
                                            <div class="body widget">
                                                <ul class="list-unstyled instagram-plugin space-y-2">
                                                    <li className='mr-2 mt-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="header font-serif text-2xl">
                                                <h2>Email Newsletter <small>Get our products/news earlier than others, lets get in touch.</small></h2>
                                            </div>
                                            <div class="body widget newsletter">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Enter Email" />
                                                    <div class="input-group-append">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-send w-6 mt-2 ml-2" viewBox="0 0 16 16">
                                                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

                        <div id="main-content" class="blog-page mt-28 ml-6 mr-6 mb-6">
                            <div class="container">
                                <div class="row clearfix">
                                    <div class="col-lg-8 col-md-12 left-box">
                                        <div className='border mb-4 rounded-lg'>
                                            <div class="card single_post">
                                                <div class="body">
                                                    <div class="img-post">
                                                        <img class="d-block img-fluid" src={pic_2} alt="First slide" />
                                                    </div>
                                                    <h3 className='text-white font-serif'><a href="#!">All photographs are accurate</a></h3>
                                                    <p>It is a long established fact that a reader will beDistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                                </div>
                                                <div class="footer">
                                                    <div class="actions">
                                                        <a href="#!" class="btn btn-outline-secondary">Continue Reading</a>
                                                    </div>
                                                    {/* <ul class="stats">
                        <li><a href="#!">General</a></li>
                        <li><a href="#!" class="fa fa-heart">28</a></li>
                        <li><a href="#!" class="fa fa-comment">128</a></li>
                    </ul> */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='border mb-4 rounded-lg'>
                                            <div class="card single_post">
                                                <div class="body">
                                                    <div class="img-post">
                                                        <img class="d-block img-fluid" src={pic_2} alt="First slide" />
                                                    </div>
                                                    <h3 className='text-white font-serif'><a href="#!">All photographs are accurate</a></h3>
                                                    <p>It is a long established fact that a reader will beDistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                                </div>
                                                <div class="footer">
                                                    <div class="actions">
                                                        <a href="#!" class="btn btn-outline-secondary">Continue Reading</a>
                                                    </div>
                                                    {/* <ul class="stats">
                        <li><a href="#!">General</a></li>
                        <li><a href="#!" class="fa fa-heart">28</a></li>
                        <li><a href="#!" class="fa fa-comment">128</a></li>
                    </ul> */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='border mb-4 rounded-lg'>
                                            <div class="card single_post">
                                                <div class="body">
                                                    <div class="img-post">
                                                        <img class="d-block img-fluid" src={pic_2} alt="First slide" />
                                                    </div>
                                                    <h3 className='text-white font-serif'><a href="#!">All photographs are accurate</a></h3>
                                                    <p>It is a long established fact that a reader will beDistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                                </div>
                                                <div class="footer">
                                                    <div class="actions">
                                                        <a href="#!" class="btn btn-outline-secondary">Continue Reading</a>
                                                    </div>
                                                    {/* <ul class="stats">
                        <li><a href="#!">General</a></li>
                        <li><a href="#!" class="fa fa-heart">28</a></li>
                        <li><a href="#!" class="fa fa-comment">128</a></li>
                    </ul> */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='border mb-4 rounded-lg'>
                                            <div class="card single_post">
                                                <div class="body">
                                                    <div class="img-post">
                                                        <img class="d-block img-fluid" src={pic_2} alt="First slide" />
                                                    </div>
                                                    <h3 className='text-white font-serif'><a href="#!">All photographs are accurate</a></h3>
                                                    <p>It is a long established fact that a reader will beDistracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                                </div>
                                                <div class="footer">
                                                    <div class="actions">
                                                        <a href="#!" class="btn btn-outline-secondary">Continue Reading</a>
                                                    </div>
                                                    {/* <ul class="stats">
                        <li><a href="#!">General</a></li>
                        <li><a href="#!" class="fa fa-heart">28</a></li>
                        <li><a href="#!" class="fa fa-comment">128</a></li>
                    </ul> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-12 right-box">
                                        <div class="card">
                                            <div class="body search">
                                                <div class="input-group m-b-0">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text pt-3 pb-3 mr-4"><i class="fa fa-search"></i></span>
                                                    </div>
                                                    <input type="text" class="form-control" placeholder="Search..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="header">
                                                <h2 className='font-serif text-3xl'>Categories Clouds</h2>
                                            </div>
                                            <div class="body widget">
                                                <ul class="list-unstyled categories-clouds m-b-0 space-x-2">
                                                    <li><a href="#!" className='ml-2'>eCommerce</a></li>
                                                    <li><a href="#!">Microsoft Technologies</a></li>
                                                    <li><a href="#!">Creative UX</a></li>
                                                    <li><a href="#!">Wordpress</a></li>
                                                    <li><a href="#!">Angular JS</a></li>
                                                    <li><a href="#!">Enterprise Mobility</a></li>
                                                    <li><a href="#!">WebsiteDesign</a></li>
                                                    <li><a href="#!">HTML5</a></li>
                                                    <li><a href="#!">Infographics</a></li>
                                                    <li><a href="#!">WordpressDevelopment</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="header">
                                                <h2 className='font-serif text-3xl'>Popular Posts</h2>
                                            </div>
                                            <div class="body widget popular-post">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="single_post">
                                                            <p class="m-b-0 font-serif text-lg">Apple Introduces Search Ads Basic</p>
                                                            <span className='font-serif text-lg'>jun 22, 2018</span>
                                                            <div class="img-post mt-2">
                                                                <img src={pic_2} alt="AwesomeImage" />
                                                            </div>
                                                        </div>
                                                        <div class="single_post">
                                                            <p class="m-b-0 font-serif text-lg">New rules, more cars, more races</p>
                                                            <span className='font-serif text-lg'>jun 8, 2018</span>
                                                            <div class="img-post mt-2">
                                                                <img src={pic_2} alt="AwesomeImage" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="header font-serif text-2xl">
                                                <h2>Instagram Post</h2>
                                            </div>
                                            <div class="body widget">
                                                <ul class="list-unstyled instagram-plugin space-y-2">
                                                    <li className='mr-2 mt-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                    <li className='mr-2'><a href="#!"><img className='w-24' src={pic_2} alt="imageDescription" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="header font-serif text-2xl">
                                                <h2>Email Newsletter <small>Get our products/news earlier than others, lets get in touch.</small></h2>
                                            </div>
                                            <div class="body widget newsletter">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Enter Email" />
                                                    <div class="input-group-append">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-send w-6 mt-2 ml-2" viewBox="0 0 16 16">
                                                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </Slider>
            </div>
        )
    }
}
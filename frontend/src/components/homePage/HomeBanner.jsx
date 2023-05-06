import React from 'react';

import banner1 from "../../img/banner_img_01.jpg";
import banner2 from "../../img/banner_img_02.jpg";
import banner3 from "../../img/banner_img_03.jpg";


const HomeBanner = () => {
    return (

        <div id="template-mo-zay-hero-carousel" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="container">
                        <div class="row p-5">
                            <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img class="img-fluid" src={banner1} alt="" />
                            </div>
                            <div class="col-lg-6 mb-0 d-flex align-items-center">
                                <div class="text-align-left align-self-center">
                                    <h1 class="h1 text-success"><b>Zay</b> eCommerce</h1>
                                    {/* <h3 class="h2">Tiny and Perfect eCommerce Template</h3> */}
                                    <h3 class="h2">It is easy to trust us</h3>
                                    <p>
                                        A diverse store with different brands for every taste and size. In this store, we try to provide you with the best services at the lowest cost and in the fastest time
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <div class="row p-5">
                            <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img class="img-fluid" src={banner2} alt="" />
                            </div>
                            <div class="col-lg-6 mb-0 d-flex align-items-center">
                                {/* <div class="text-align-left">
                                    <h1 class="h1">Proident occaecat</h1>
                                    <h3 class="h2">Aliquip ex ea commodo consequat</h3>
                                    <p>
                                        You are permitted to use this Zay CSS template for your commercial websites.
                                        You are <strong>not permitted</strong> to re-distribute the template ZIP file in any kind of template collection websites.
                                    </p>
                                </div> */}
                                <div class="text-align-left align-self-center">
                                    <h1 class="h1 text-success"><b>Zay</b> eCommerce</h1>
                                    {/* <h3 class="h2">Tiny and Perfect eCommerce Template</h3> */}
                                    <h3 class="h2">It is easy to trust us</h3>
                                    <p>
                                        A diverse store with different brands for every taste and size. In this store, we try to provide you with the best services at the lowest cost and in the fastest time
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <div class="row p-5">
                            <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img class="img-fluid" src={banner3} alt="" />
                            </div>
                            <div class="col-lg-6 mb-0 d-flex align-items-center">
                                {/* <div class="text-align-left">
                                    <h1 class="h1">Repr in voluptate</h1>
                                    <h3 class="h2">Ullamco laboris nisi ut </h3>
                                    <p>
                                        We bring you 100% free CSS templates for your websites.
                                        If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.
                                    </p>
                                </div> */}
                                <div class="text-align-left align-self-center">
                                    <h1 class="h1 text-success"><b>Zay</b> eCommerce</h1>
                                    {/* <h3 class="h2">Tiny and Perfect eCommerce Template</h3> */}
                                    <h3 class="h2">It is easy to trust us</h3>
                                    <p>
                                        A diverse store with different brands for every taste and size. In this store, we try to provide you with the best services at the lowest cost and in the fastest time
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
                <i class="fas fa-chevron-left"></i>
            </a>
            <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
                <i class="fas fa-chevron-right"></i>
            </a>
        </div>

    );
}

export default HomeBanner;
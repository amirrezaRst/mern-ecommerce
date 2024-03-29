import React from 'react';

import { Link, useNavigate } from "react-router-dom";

const Footer = () => {

    const navigation = useNavigate();

    const redirectToShop = (prop) => {
        window.scrollTo({
            top: 20,
            behavior: "smooth"
        })
        navigation("/shop", { state: { prop } })
    }

    return (
        <footer class="bg-dark" id="tempaltemo_footer">
            <div class="container">
                <div class="row">

                    <div class="col-md-4 pt-5">
                        <h2 class="h2 text-success border-bottom pb-3 border-light logo">Zay Shop</h2>
                        <ul class="list-unstyled text-light footer-link-list">
                            <li>
                                <i class="fas fa-map-marker-alt fa-fw"></i>
                                {/* 123 Consectetur at ligula 10660 */}
                                _
                            </li>
                            <li>
                                <i class="fa fa-phone fa-fw"></i>
                                <span>0990-3738-378</span>
                            </li>
                            <li>
                                <i class="fa fa-envelope fa-fw"></i>
                                <span>amirreza.rostami.0073@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    <div class="col-md-4 pt-5">
                        <h2 class="h2 text-light border-bottom pb-3 border-light">Products</h2>
                        <ul class="list-unstyled text-light footer-link-list">
                            <li><a class="text-decoration-none" style={{ cursor: "pointer" }} onClick={() => redirectToShop("t shirt")}>T Shirt</a></li>
                            <li><a class="text-decoration-none" style={{ cursor: "pointer" }} onClick={() => redirectToShop("shirt")}>Shirt</a></li>
                            <li><a class="text-decoration-none" style={{ cursor: "pointer" }} onClick={() => redirectToShop("shoes")}>Shoes</a></li>
                            <li><a class="text-decoration-none" style={{ cursor: "pointer" }} onClick={() => redirectToShop("sneakers")}>Sneakers</a></li>
                            <li><a class="text-decoration-none" style={{ cursor: "pointer" }} onClick={() => redirectToShop("sunglass")}>Sunglass</a></li>
                            <li><a class="text-decoration-none" style={{ cursor: "pointer" }} onClick={() => redirectToShop("watch")}>Watch</a></li>
                            <li><a class="text-decoration-none" style={{ cursor: "pointer" }} onClick={() => redirectToShop("jacket")}>Jacket</a></li>
                        </ul>
                    </div>

                    <div class="col-md-4 pt-5">
                        <h2 class="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                        <ul class="list-unstyled text-light footer-link-list">
                            <li><Link to="/" class="text-decoration-none">Home</Link></li>
                            <li><Link to="/about" class="text-decoration-none">About Us</Link></li>
                            <li><Link to="/shop" class="text-decoration-none">Shop</Link></li>
                            {/* <li><a class="text-decoration-none" href="#">FAQs</a></li> */}
                            {/* <li><a class="text-decoration-none" href="#">Contact</a></li> */}
                        </ul>
                    </div>

                </div>

                <div class="row text-light mb-4">
                    <div class="col-12 mb-3">
                        <div class="w-100 my-3 border-top border-light"></div>
                    </div>
                    <div class="col-auto me-auto">
                        <ul class="list-inline text-left footer-icons">
                            <li class="list-inline-item border border-light rounded-circle text-center">
                                <a class="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                            </li>
                            <li class="list-inline-item border border-light rounded-circle text-center">
                                <a class="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                            </li>
                            <li class="list-inline-item border border-light rounded-circle text-center">
                                <a class="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                            </li>
                            <li class="list-inline-item border border-light rounded-circle text-center">
                                <a class="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-auto">
                        <label class="sr-only" for="subscribeEmail">Email address</label>
                        <div class="input-group mb-2">
                            <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                            <div class="input-group-text btn-success text-light">Subscribe</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-100 bg-black py-3">
                <div class="container">
                    <div class="row pt-2">
                        <div class="col-12">
                            <p class="text-center text-light">
                                All Rights Reserved | Copyright &copy; amirreza rostami
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
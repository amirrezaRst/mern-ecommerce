import React from 'react';

import { NavLink, Link } from "react-router-dom";

const MainNav = ({ userStatus, userData }) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light shadow">
            <div class="container d-flex justify-content-between align-items-center">

                <Link class="navbar-brand text-success logo h1 align-self-center" to="/">
                    Zay
                    {/* Shopstar */}
                </Link>

                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                    <div class="flex-fill">
                        <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                            <li class="nav-item">
                                <a class="nav-link"><NavLink to="/" exact activeStyle={{ color: "#04a527" }} className="nav-link">Home</NavLink></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"><NavLink to="/shop" activeStyle={{ color: "#04a527" }} className="nav-link">Shop</NavLink></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"><NavLink to="/about" activeStyle={{ color: "#04a527" }} className="nav-link">About</NavLink></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"><NavLink to="/contact" activeStyle={{ color: "#04a527" }} className="nav-link">Contact</NavLink></a>
                            </li>
                        </ul>
                    </div>
                    <div class="navbar align-self-center d-flex">
                        <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                            <div class="input-group">
                                <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ..." />
                                <div class="input-group-text">
                                    <i class="fa fa-fw fa-search"></i>
                                </div>
                            </div>
                        </div>
                        <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                            <i class="fa fa-fw fa-search text-dark mr-2"></i>
                        </a>
                        {userStatus == true ?
                            <div className="">
                                <Link class="nav-icon position-relative text-decoration-none mr-4" to="/shop-cart">
                                    <i class="fa fa-fw fa-cart-arrow-down text-dark"></i>
                                    <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">{userData && userData.cart ?userData.cart.length:null}</span>
                                </Link>
                                <Link class="nav-icon position-relative text-decoration-none" to="/favorite-product">
                                    <i class="fa fa-fw fa-heart text-dark"></i>
                                    <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">{userData && userData.favorite ?userData.favorite.length:null}</span>
                                </Link>
                            </div> :
                            <div className="">
                                <Link to="/login" className="font-weight-bold mr-3" style={{ color: "#169632", textDecoration: "none" }}>Login</Link>
                                <Link to="/signup" className="font-weight-bold" style={{ color: "#169632", textDecoration: "none" }}>Signup</Link>
                            </div>
                        }
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default MainNav;
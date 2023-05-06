import React from 'react';

import feature2 from "../img/feature_prod_02.jpg";
import { Link } from "react-router-dom";

const SingleFeaturedProduct = () => {
    return (
        <Link to="/product/" class="col-12 col-md-4 mb-4" style={{ textDecoration: "none" }}>
            <div class="card h-100">
                <a href="shop-single.html">
                    <img src={feature2} class="card-img-top" alt="..." />
                </a>
                <div class="card-body">
                    <ul class="list-unstyled d-flex justify-content-between">
                        <li>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-muted fa fa-star"></i>
                            <i class="text-muted fa fa-star"></i>
                        </li>
                        <li class="text-right"><h5 style={{ color: "#208e38", fontWeight: "normal" }}>$480.00</h5></li>
                    </ul>
                    <p class="h2 text-decoration-none text-dark">Cloud Nike Shoes</p>
                    <p class="card-text" style={{ color: "#212529" }}>
                        Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                    </p>
                    <p class="" style={{ color: "#208e38" }}>Reviews (48)</p>
                </div>
            </div>
        </Link>
    );
}

export default SingleFeaturedProduct;
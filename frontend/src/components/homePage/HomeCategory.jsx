import React from 'react';
import { Link } from 'react-router-dom';

import category1 from "../../img/category_img_01.jpg";
import category2 from "../../img/category_img_02.jpg";
import category3 from "../../img/category_img_03.jpg";


const HomeCategory = () => {
    return (

        <section class="container py-5">
            <div class="row text-center pt-3">
                <div class="col-lg-6 m-auto">
                    {/* <h1 class="h1">Categories of The Month</h1> */}
                    <h1 class="h1">Categories</h1>
                    <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4 p-5 mt-3">
                    <a href="#"><img src={category1} class="rounded-circle img-fluid border" /></a>
                    <h5 class="text-center mt-3 mb-3">Watches</h5>
                    <p class="text-center text-white"><Link to="/shop" class="btn btn-success">Go Shop</Link></p>
                </div>
                <div class="col-12 col-md-4 p-5 mt-3">
                    <a href="#"><img src={category2} class="rounded-circle img-fluid border" /></a>
                    <h2 class="h5 text-center mt-3 mb-3">Shoes</h2>
                    <p class="text-center text-white"><Link to="/shop" class="btn btn-success">Go Shop</Link></p>
                </div>
                <div class="col-12 col-md-4 p-5 mt-3">
                    <a href="#"><img src={category3} class="rounded-circle img-fluid border" /></a>
                    <h2 class="h5 text-center mt-3 mb-3">Accessories</h2>
                    <p class="text-center text-white"><Link to="/shop" class="btn btn-success">Go Shop</Link></p>
                </div>
            </div>
        </section>

    );
}

export default HomeCategory;
import React from 'react';
import SingleShopCart from './SingleShopCart';


const FavoriteProduct = () => {
    return (
        <section className="container py-4">
            <div class="row text-center pt-3 mb-5" >
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">Favorite Product</h1>
                    {/* <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p> */}
                </div>
            </div>

            <div className="row">
                <SingleShopCart path={"favorite"} />
            </div>

        </section>
    );
}

export default FavoriteProduct;
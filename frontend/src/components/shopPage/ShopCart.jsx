import React from 'react';

import ShopCartProduct from '../SingleShopCart';


const ShopCart = () => {
    return (
        <section className="container py-4">
            <div class="row text-center pt-3 mb-5" >
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">Shop Cart</h1>
                    {/* <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p> */}
                </div>
            </div>

            <div className="row">
                <ShopCartProduct path={"cart"} />
            </div>

        </section>
    );
}

export default ShopCart;
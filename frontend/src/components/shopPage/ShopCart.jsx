import React, { useContext } from 'react';
import ContextApi from '../../services/ContextApi';

import SingleShopCart from '../SingleShopCart';


const ShopCart = ({ userData }) => {

    const context = useContext(ContextApi);

    const result = () => {
        console.log(userData.cart[0]);
        // context
    }

    return (
        <section className="container py-4">
            <div class="row text-center pt-3 mb-5" >
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">Shop Cart</h1>
                    <p>
                        It's not cheaper than us, so don't waste your time.
                    </p>
                </div>
            </div>
            <button className="btn btn-success" onClick={result}>Result</button>
            <div className="row">
                {userData.cart[0] != undefined ? userData.cart.map(item => <SingleShopCart path={"cart"} id={item._id} name={item.name} color={item.color} picture={item.picture} price={item.price} size={item.size} />) : <h5 className='mx-auto my-5'>There is nothing in the shopping cart</h5>}
            </div>

        </section>
    );
}

export default ShopCart;
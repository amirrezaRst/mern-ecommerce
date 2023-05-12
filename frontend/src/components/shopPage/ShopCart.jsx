import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SingleShopCart from '../SingleShopCart';
import ContextApi from '../../services/ContextApi';


const ShopCart = ({ userData }) => {

    const result = () => {
        

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
            <button className="btn btn-success" onClick={result}>Resultt</button>
            <div className="row">
                {userData.cart[0] != undefined ?
                    userData.cart.map(item => <SingleShopCart path={"cart"} id={item._id} name={item.name} color={item.color} picture={item.picture} price={item.price} size={item.size} count={item.count} />) :
                    <div className='mx-auto'>
                        <h5 className='my-5 font-weight-normal'>There is nothing in the shopping cart <Link to="/shop" className="text-success font-weight-normal ml-3" style={{ textDecoration: "none" }}>Buy Now <i class="far fa-cart-shopping"></i></Link></h5>
                    </div>
                }
            </div>

            {userData.cart[0] != undefined ?
                <button type="button" class="btn btn-success btn-lg mb-3 mt-2">Payment</button> : null
            }
        </section>
    );
}

export default ShopCart;
import React from 'react';
import SingleShopCart from '../SingleShopCart';


const FavoriteProduct = ({ userData }) => {

    const result = () => {
        console.log(userData);
    }

    return (
        <section className="container py-4">
            <div class="row text-center pt-3 mb-5" >
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">Favorite Product</h1>
                    <p>
                        It's not cheaper than us, so don't waste your time.
                    </p>
                </div>
            </div>

            {/* <button className="btn btn-success" onClick={result}>Result</button> */}

            <div className="row">
                {userData.favorite[0] != undefined ? userData.cart.map(item => <SingleShopCart path={"cart"} id={item._id} name={item.name} color={item.color} picture={item.picture} price={item.price} size={item.size} />) : <h5 className='mx-auto my-5'>There is nothing your favorite</h5>}

                {/* <SingleShopCart path={"cart"} /> */}
            </div>

        </section>
    );
}

export default FavoriteProduct;
import React from 'react';

import SingleFavoriteCart from './SingleFavoriteCart';
import { Favorite } from "../utils/ProfileSvg"

const FavoriteProduct = ({ userData }) => {

    const result = () => {
        // console.log(userData.favorite);
        // userData.map((item) => {
        //     console.log(item.name);
        // })
    }

    return (
        <div className="card shadow-sm" >
            <div className="card-body">

                <button className="btn btn-primary" onClick={result}>Result</button>
                <div className="row">
                    {userData ?
                        userData.favorite.map(item => <SingleFavoriteCart id={item._id} name={item.name} color={item.color} price={item.price} picture={item.picture[0]} size={item.size} />) :
                        <div className="py-3 pb-5">
                            <div className="mx-auto text-center">
                                <Favorite />
                            </div>
                            <span className='d-block text-center font-weight-normal' style={{ fontSize: "1.15rem" }}>Your favorites list is empty</span>
                        </div>
                    }
                </div>

            </div>
        </div>
    );
}

export default FavoriteProduct;
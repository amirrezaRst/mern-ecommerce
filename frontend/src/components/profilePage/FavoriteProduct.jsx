import React, { useContext } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Favorite } from "../utils/ProfileSvg"
import SingleFavoriteCart from './SingleFavoriteCart';
import config from "../../services/config.json";
import ContextApi from '../../services/ContextApi';


const FavoriteProduct = ({ userData }) => {

    return (
        <div className="card shadow-sm" >
            <div className="card-body pt-4 pb-5">

                {userData != undefined && userData.favorite.length != 0 ?
                    <div className="row">
                        {userData.favorite.map(item => <SingleFavoriteCart id={item._id} name={item.name} color={item.color} price={item.price} picture={item.picture[0]} size={item.size} />)}
                    </div> :
                    <div className="py-3 pb-5">
                        <div className="d-flex justify-content-center">
                            <Favorite />
                        </div>
                        <span className='d-block text-center font-weight-normal' style={{ fontSize: "1.15rem" }}>Your favorites list is empty</span>
                    </div>
                }

            </div>
        </div >
    );
}

export default FavoriteProduct;
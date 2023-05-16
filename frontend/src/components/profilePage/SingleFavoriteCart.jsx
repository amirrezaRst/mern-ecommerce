import React from 'react';
import { Link } from 'react-router-dom';

import config from "../../services/config.json";


const SingleFavoriteCart = ({ id, name, picture, color, size, price, index }) => {

    const result = () => {
        // console.log(favorite);
    }

    const removeFavorite = async () => {
        
    }

    return (
        <React.Fragment>

            <div class="col-md-4">
                <div>
                    <div class="card mb-4 product-wap">
                        <div class="card">
                            <img class="card-img img-fluid" src={picture ? `${config.domain}/${picture}` : null} />
                            <div class="card-img-overlay product-overlay d-flex align-items-center justify-content-center">
                                <ul class="list-unstyled">
                                    <li><button class="btn btn-success text-white" onClick={result}><i class="fas fa-heart"></i></button></li>
                                    <li><Link to={`/product/${id}`} class="btn btn-success text-white mt-2"><i class="far fa-eye"></i></Link></li>
                                    {/* <li><button class="btn btn-success text-white mt-2"><i class="fa-solid fa-cart-plus"></i></button></li> */}
                                </ul>
                            </div>
                        </div>
                        <Link to={`/product/${id}`} class="card-body" style={{ textDecoration: "none" }}>
                            {index}
                            <p class="h3 text-decoration-none text-capitalize">{name}</p>

                            <div className="">
                                <ul class="w-100 list-unstyled d-flex justify-content-between mb-1">
                                    <li className='' style={{ color: "#898989" }}>{size[0] && size[0] != "single" ? size.map(size => <span>{size}/</span>) : "_"}</li>
                                </ul>
                                <li class="pt-2 pb-3 d-block">
                                    <div className='d-flex'>{color.map(col => <span class={`product-color-dot color-dot-${col} float-left rounded-circle ml-1`}></span>)}</div>
                                </li>
                            </div>

                            <div className="d-flex align-items-baseline justify-content-between mt-2">
                                <p class="mb-0 font-weight-normal" style={{ color: "#208e38" }}>${price}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default SingleFavoriteCart;
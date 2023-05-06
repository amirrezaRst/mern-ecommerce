import React from 'react';
import { Link } from 'react-router-dom';
import config from "../services/config.json";

const SingleShopCart = ({ path, id, name, picture, color, size, price }) => {

    const result = () => {
        console.log(picture);
    }

    return (
        <div class={path == "favorite" || path == "cart" ? "col-md-3" : "col-md-4"}>
            <div>
                <div class="card mb-4 product-wap">
                    <div class="card">
                        <img class="card-img img-fluid" src={picture[0] ? `${config.domain}/${picture[0]}` : null} />
                        <div class="card-img-overlay product-overlay d-flex align-items-center justify-content-center">
                            <ul class="list-unstyled">
                                <li><button class="btn btn-success text-white"><i class="far fa-heart"></i></button></li>
                                <li><Link to={`/product/${id}`} class="btn btn-success text-white mt-2"><i class="far fa-eye"></i></Link></li>
                                <li><button class="btn btn-success text-white mt-2"><i class="fas fa-cart-plus"></i></button></li>
                            </ul>
                        </div>
                    </div>
                    <Link to={`/product/${id}`} class="card-body" style={{ textDecoration: "none" }}>
                        <p class="h3 text-decoration-none text-capitalize">{name}</p>
                        <ul class="w-100 list-unstyled d-flex justify-content-between mb-1">
                            {/* <li className='' style={{ color: "#898989" }}>M/L/X/XL</li> */}
                            <li className='' style={{ color: "#898989" }}>{size[0] && size[0] != "single" ? size.map(size => <span>{size}/</span>) : "_"}</li>
                            <li class="pt-2">
                                {color[0] ? color.map(color =>
                                    <span class={`product-color-dot color-dot-${color} float-left rounded-circle ml-1`}></span>) : null
                                }
                            </li>
                        </ul>
                        {/* <ul class="list-unstyled d-flex justify-content-start mb-3">
                            <li>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-muted fa fa-star"></i>
                                <i class="text-muted fa fa-star"></i>
                            </li>
                        </ul> */}
                        <p class="mb-0" style={{ color: "#208e38", fontWeight: "bold" }}>${price}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SingleShopCart;
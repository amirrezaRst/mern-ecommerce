import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import { toast } from 'react-toastify';
import Swal from "sweetalert2";

import config from "../services/config.json";
import ContextApi from '../services/ContextApi';


const SingleShopCart = ({ path, id, name, picture, color, size, price, count }) => {

    const context = useContext(ContextApi);

    const result = () => {
        console.log(context.userData);
    }

    //! Handle Product Count
    const plus = async () => {
        await axios.get(`${config.domain}/api/cart/plus/${context.userData._id}/${id}`).then(res => {
            console.log(res);
            context.setUserData(res.data.user);
        }).catch(err => {
            toast.error(`Something went wrong please try later`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
            console.log(err);
        })
    }
    const minus = async () => {
        if (count != 1) {
            await axios.get(`${config.domain}/api/cart/minus/${context.userData._id}/${id}`).then(res => {
                console.log(res);
                context.setUserData(res.data.user);
            }).catch(err => {
                toast.error(`Something went wrong please try later`, {
                    position: "bottom-right",
                    theme: "light",
                    closeOnClick: true
                })
                console.log(err);
            })
        }
    }

    //! Handle Api
    const deleteProduct = async () => {
        Swal.fire({
            icon: "error",
            html: '<span style="font-size:1.4rem;font-weight:normal">Do you want to remove this product from the shopping cart?</sp>',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: "#db3030",
            confirmButtonText: "Delete!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`${config.domain}/api/cart/deleteCart/${context.userData._id}/${id}`).then(res => {
                    context.setUserData(res.data.user);
                }).catch(err => {
                    toast.error(`Something went wrong please try later`, {
                        position: "bottom-right",
                        theme: "light",
                        closeOnClick: true
                    })
                    console.log(err);
                })
                Swal.fire({
                    icon: "success",
                    html: "<h3>The product has been removed</h3>",
                    confirmButtonColor: "#59AB6E"
                })
            }
        })

    }

    return (
        <div class={path == "cart" ? "col-md-3" : "col-md-4"}>
            <div>
                <div class="card mb-4 product-wap">
                    <div class="card">
                        {path == "cart" ?
                            <img class="card-img img-fluid" src={picture ? `${config.domain}/${picture}` : null} /> :
                            <img class="card-img img-fluid" src={picture[0] ? `${config.domain}/${picture[0]}` : null} />
                        }
                        {path == "cart" ?
                            null :
                            <div class="card-img-overlay product-overlay d-flex align-items-center justify-content-center">
                                <ul class="list-unstyled">
                                    <li><button class="btn btn-success text-white"><i class="far fa-heart-circle-plus"></i></button></li>
                                    <li><Link to={`/product/${id}`} class="btn btn-success text-white mt-2"><i class="far fa-eye"></i></Link></li>
                                    <li><button class="btn btn-success text-white mt-2"><i class="fa-solid fa-cart-plus"></i></button></li>
                                </ul>
                            </div>
                        }
                    </div>
                    <Link to={path == "cart" ? null : `/product/${id}`} class="card-body" style={path == "cart" ? { cursor: "default", textDecoration: "none" } : { textDecoration: "none" }}>
                        <p class="h3 text-decoration-none text-capitalize">{name}</p>

                        {path != "cart" ?
                            <div className="">
                                <ul class="w-100 list-unstyled d-flex justify-content-between mb-1">
                                    <li className='' style={{ color: "#898989" }}>{size[0] && size[0] != "single" ? size.map(size => <span>{size}/</span>) : "_"}</li>
                                </ul>
                                <li class="pt-2 pb-3 d-block">
                                    <div className='d-flex'>{color.map(col => <span class={`product-color-dot color-dot-${col} float-left rounded-circle ml-1`}></span>)}</div>
                                </li>
                            </div> : null
                        }
                        {path == "cart" ?
                            <div>
                                <ul class="w-100 list-unstyled d-flex justify-content-between mb-1">
                                    <li className='' style={{ color: "#898989" }}>{size && size != "single" ? <span>Size : {size}</span> : "_"}</li>
                                    <li class="pt-2 pb-3 d-block">
                                        <span class={`product-color-dot color-dot-${color} float-left rounded-circle ml-1`} style={{ padding: "10px" }}></span>
                                    </li>
                                </ul>
                                <p class="mb-0 font-weight-normal d-block" style={{ color: "#208e38" }} onClick={result}>${count * price}</p>
                            </div> :
                            null
                        }

                        <div className="d-flex align-items-baseline justify-content-between mt-2">
                            {path == "cart" ?
                                <div className="d-flex align-items-baseline justify-content-between w-100 mt-3">
                                    <i class="far fa-trash-xmark btn btn-danger" style={{ fontSize: "200px" }} onClick={deleteProduct}></i>
                                    <ul class="list-inline">
                                        <li class="list-inline-item"><span class="btn btn-success" id="btn-minus" onClick={minus}>-</span></li>
                                        <li class="list-inline-item"><span style={{ fontWeight: "bolder" }}>{count}</span></li>
                                        <li class="list-inline-item"><span class="btn btn-success" id="btn-plus" onClick={plus}>+</span></li>
                                    </ul>
                                </div> :
                                <p class="mb-0 font-weight-normal" style={{ color: "#208e38" }}>${price}</p>
                            }
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SingleShopCart;
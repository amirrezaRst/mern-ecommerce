import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from "sweetalert2";

import PaymentHeader from "./PaymentHeader";
import PaymentAddress from './PaymentAddress';
import PaymentItem from "./PaymentItem";
import { ClubSvg } from "../utils/ProfileSvg"
import config from "../../services/config.json";
import ContextApi from '../../services/ContextApi';

const Payment = ({ userData }) => {

    const [totalPrice, setTotalPrice] = useState();
    const [countPackage, setCountPackage] = useState();
    const [shippingPrice, setShippingPrice] = useState(0);
    const [totalScore, setTotalScore] = useState();
    const [shippingAddress, setShippingAddress] = useState();
    const context = useContext(ContextApi);

    useEffect(() => {
        if (userData && userData.cart) {
            setCountPackage(userData.cart.length);

            const sumPrice = userData.cart.reduce(function (a, b) { return a + (b.price * b.count) }, 0)
            setTotalPrice(sumPrice);

            const sumScore = userData.cart.reduce(function (a, b) { return a + (b.clubScore * b.count) }, 0)
            setTotalScore(sumScore);
        }
    }, [])

    const result = () => {
        console.log(userData);
    }

    const handleDeleteCart = async () => {

        Swal.fire({
            icon: "error",
            html: '<span style="font-size:1.4rem;font-weight:normal">Are you sure you want to delete your cart?</sp>',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: "#db3030",
            confirmButtonText: "Delete!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`${config.domain}/api/user/deleteCart/${userData._id}`).then(res => {
                    context.setUserData(res.data.user);
                }).catch(err => {
                    toast.error(`Something went wrong please try later.`, {
                        position: "bottom-right",
                        theme: "light",
                        closeOnClick: true
                    })
                    console.log(err);
                })
            }
        })
    }

    const checkoutApi = async () => {
        const body = {
            address: userData.address[shippingAddress],
            amount: totalPrice + shippingPrice,
            user: userData
        }
        await axios.post(`${config.domain}/api/payment/checkoutCart`, body, { headers: { "x-auth-token": localStorage.getItem("token") } }).then(res => {
            window.location = res.data.response.url
        }).catch(err => {
            if (err.message == "Request failed with status code 401") {
                toast.error(`You do not have the required permission.`, {
                    position: "bottom-right",
                    theme: "light",
                    closeOnClick: true
                })
                return console.log(err);
            }
            toast.error(`Something went wrong!`, {
                position: "bottom-right",
                theme: "light",
                closeOnClick: true
            })
        })
    }


    return (
        <React.Fragment>

            <PaymentHeader />

            <main className="container mb-5">
                <button className="btn btn-success" onClick={result}>Result</button>
                <div className="row">
                    <section className='col-lg-4 pl-0'>
                        <div className="card shadow-sm" style={{ borderRadius: "10px" }}>
                            <div className="card-body px-3 py-4">

                                <div className="d-flex justify-content-between">
                                    <span style={{ fontWeight: "normal", fontSize: "1.05rem" }}>Commodity Prices</span>
                                    <span style={{ fontWeight: "normal", fontSize: "1.1rem" }}>{totalPrice}$</span>
                                </div>
                                <div className="special-divider mt-2 mb-4"></div>

                                <div className="d-flex justify-content-between">
                                    <span style={{ fontWeight: "normal", fontSize: "1.05rem" }}>Shipping Cost <span className='badge badge-success ml-2' style={{ fontSize: ".9rem", fontWeight: "normal" }}>{countPackage} Package</span></span>
                                    <span style={{ fontWeight: "normal", fontSize: "1.1rem" }}>{shippingPrice}$</span>
                                </div>
                                <div className="special-divider mt-2 mb-4"></div>

                                <div className="d-flex justify-content-between pt-3">
                                    <span style={{ fontWeight: "normal", fontSize: "1.15rem" }}>Payable</span>
                                    <span style={{ fontWeight: "normal", fontSize: "1.2rem" }}>{totalPrice + shippingPrice}$</span>
                                </div>

                                <button className="btn btn-block mt-4" id='shipping-btn' onClick={checkoutApi}>Order Payment</button>

                            </div>
                            <div className="" style={{ width: "100%", background: "#F1F2F4" }}>
                                <div className="d-flex justify-content-between p-3">
                                    <span style={{ fontWeight: "normal", fontSize: "1.05rem", display: "flex", alignItems: "center" }}><ClubSvg /><span className='ml-1'> Zay Club Score</span></span>
                                    <span style={{ fontWeight: "normal", fontSize: "1.05rem" }}>{totalScore} Points</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='col-lg-8 pr-0'>

                        <PaymentAddress userData={userData} changeShipping={setShippingPrice} changeShippingAddress={setShippingAddress} />

                        <div className="card shadow-sm" style={{ borderRadius: "10px" }}>
                            <div className="card-body pt-3 px-4 pb-4">
                                <div class="btn-group dropright">
                                    <i type="button" class="badge fas fa-ellipsis-vertical" data-toggle="dropdown" aria-expanded="false" style={{ fontSize: "1.5rem", cursor: "pointer" }}></i>
                                    <div class="dropdown-menu">
                                        <Link to="/shop-cart" class="dropdown-item text-dark"><i class="fa-regular fa-cart-shopping mr-2"></i> <span style={{ fontWeight: "normal", fontSize: "1.05rem" }}>Edit Product</span></Link>
                                        <div class="dropdown-item text-danger" onClick={handleDeleteCart}><i class="fa-regular fa-trash mr-3"></i> <span style={{ fontWeight: "normal", fontSize: "1.05rem" }}>Delete Cart</span></div>
                                    </div>
                                </div>
                                <div className="row mt-2">

                                    {userData.cart && userData.cart.length > 0 ?
                                        userData.cart.map(item => <PaymentItem picture={item.picture} count={item.count} color={item.color} />) : null
                                    }

                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>

        </React.Fragment>
    );
}

export default Payment;
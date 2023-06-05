import React, { useEffect, useState } from 'react';
import axios from 'axios';

import config from "../../services/config.json";
import { Link } from 'react-router-dom';
import Loading from '../common/Loading';

const VerifyPayment = () => {
    const [paymentStatus, setPaymentStatus] = useState();
    const [userPayment, setUserPayment] = useState();

    const queryParams = new URLSearchParams(window.location.search);
    const authority = queryParams.get("Authority");
    const status = queryParams.get("Status");


    const verifyPaymentApi = async () => {
        await axios.get(`${config.domain}/api/payment/verifyPayment/${authority}/${status}`).then(async (res) => {
            setPaymentStatus(true);
            setUserPayment(res.data.payment)
        }).catch(err => {
            console.log(err);
            setPaymentStatus(false);
        });
    }

    useEffect(() => {
        if (status == "OK") {
            verifyPaymentApi();
        }
        else {
            setPaymentStatus(false);
        }
    }, [status, authority])

    const result = () => {
        console.log(userPayment);
    }

    return (
        <React.Fragment>

            {!paymentStatus ?
                <main className='container' style={{ width: "100%" }}><Loading /></main>
                : paymentStatus && paymentStatus === false ?
                    <main className='container py-5' style={{ width: "100%" }}>
                        <div className="row">
                            <div className="col-md-6">
                                <img src="/assets/img/payment-error1_prev_ui.png" srcSet='/assets/img/payment-error1_prev_ui.png' className='img-fluid' alt="" />
                            </div>
                            <div className="col-md-6 d-flex justify-content-center flex-column">
                                <h3>There was a problem with the payment.</h3>
                                <h5 className='font-weight-normal'>Please try again later and don't worry about getting your money back</h5>
                                <Link to="/">
                                    <button className="btn btn-danger mt-4 py-2 w-25">Go Home</button>
                                </Link>
                            </div>
                        </div>
                    </main> :
                    <main className='container py-5' style={{ width: "100%" }}>
                        <div className="row">
                            <div className="col-md-6 d-flex justify-content-center">
                                <img src="/assets/img/payment-success3.avif" onClick={result} className='img-fluid' style={{ width: "75%" }} alt="" />
                            </div>
                            <div className="col-md-6">

                                <div className="card shadow-sm">
                                    <div className="card-body pt-4">

                                        <span className='pt-2' style={{ fontWeight: "normal", fontSize: "1.2rem", textAlign: "center", display: "block" }}>Thank you for your purchase and trust</span>

                                        <div className="mt-5 d-flex align-items-center justify-content-between px-3">
                                            <div>
                                                <div className="badge">
                                                    <i class="fa-regular fa-user" style={{ fontSize: "1.1rem" }}></i>
                                                </div>
                                                <span style={{ fontWeight: "normal", fontSize: "1.05rem" }}>Full Name</span>
                                            </div>
                                            <span style={{ fontWeight: "normal", fontSize: "1rem", color: "#404142", textTransform: "capitalize" }}>{userPayment ? userPayment.user.fullName : null}</span>
                                        </div>

                                        <div className="mt-3 d-flex align-items-center justify-content-between px-3">
                                            <div>
                                                <div className="badge">
                                                    <i class="fa-regular fa-box-archive" style={{ fontSize: "1.1rem" }}></i>
                                                </div>
                                                <span style={{ fontWeight: "normal", fontSize: "1.05rem" }}>Package</span>
                                            </div>
                                            <span style={{ fontWeight: "normal", fontSize: "1rem", color: "#404142" }}>1</span>
                                        </div>

                                        <div className="mt-3 d-flex align-items-center justify-content-between px-3">
                                            <div>
                                                <div className="badge">
                                                    <i class="fa-regular fa-sack-dollar" style={{ fontSize: "1.1rem" }}></i>
                                                </div>
                                                <span style={{ fontWeight: "normal", fontSize: "1.05rem" }}>Amount Paid</span>
                                            </div>
                                            <span style={{ fontWeight: "normal", fontSize: "1rem", color: "#404142" }}>{userPayment ? userPayment.amount : null}$</span>
                                        </div>

                                        <div className="mt-3 d-flex align-items-center justify-content-between px-3">
                                            <div>
                                                <div className="badge">
                                                    <i class="fa-regular fa-credit-card" style={{ fontSize: "1.1rem" }}></i>
                                                </div>
                                                <span style={{ fontWeight: "normal", fontSize: "1.05rem" }}>Payment Gateway</span>
                                            </div>
                                            <span style={{ fontWeight: "normal", fontSize: "1rem", color: "#404142" }}>Zarinpal</span>
                                        </div>

                                        <div className="mt-3 d-flex align-items-center justify-content-between px-3">
                                            <div className=''>
                                                <div className="badge">
                                                    <i class="fa-regular fa-location-dot" style={{ fontSize: "1.1rem" }}></i>
                                                </div>
                                                <span style={{ fontWeight: "normal", fontSize: "1.05rem" }}>Address</span>
                                            </div>
                                            <span style={{ fontWeight: "normal", textTransform: "capitalize", fontSize: "1rem", color: "#404142" }}>{userPayment ? userPayment.user.address.location : null}</span>
                                        </div>

                                        <div className="mt-3 d-flex align-items-center justify-content-between px-3">
                                            <div className=''>
                                                <div className="badge">
                                                    <i class="fa-regular fa-house" style={{ fontSize: "1.1rem" }}></i>
                                                </div>
                                                <span style={{ fontWeight: "normal", fontSize: "1.05rem" }}>Plaque</span>
                                            </div>
                                            <span style={{ fontWeight: "normal", fontSize: "1rem", color: "#404142" }}>{userPayment ? userPayment.user.address.plaque : null}</span>
                                        </div>

                                        <div className="mt-3 d-flex align-items-center justify-content-between px-3">
                                            <div className=''>
                                                <div className="badge">
                                                    <i class="fa-regular fa-phone" style={{ fontSize: "1.1rem" }}></i>
                                                </div>
                                                <span style={{ fontWeight: "normal", fontSize: "1.05rem" }}>Tracking Code</span>
                                            </div>
                                            <span style={{ fontWeight: "normal", fontSize: "1rem", color: "#404142" }}>{userPayment ? userPayment.refId : null}</span>
                                        </div>


                                        <Link to="/" style={{ textDecoration: "none" }} replace="true">
                                            <button className="btn btn-block btn-success mt-5 mb-2 py-2">Go Home</button>
                                        </Link>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </main>
            }

        </React.Fragment>
    );
}

export default VerifyPayment;
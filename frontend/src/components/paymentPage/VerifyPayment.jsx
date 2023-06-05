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

    // useEffect(async () => {
    //     if (status === "OK") {
    // console.log(status);
    // console.log(authority);
    // verifyPaymentApi()
    // return null;
    //     }
    //     else {
    //         console.log("The purchase was not made");
    //     }
    // }, [])

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
        console.log(paymentStatus);
    }

    return (
        <React.Fragment>

            {/* {paymentStatus && paymentStatus === true ?
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
                </main>
                :
                <main>
                    hello
                </main>
            } */}

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
                            <img src="/assets/img/payment-success3.avif" className='img-fluid' style={{width:"70%" }} alt="" />
                        </div>
                        <div className="col-md-6 d-flex justify-content-center flex-column">
                            <h3>There was a problem with the payment.</h3>
                            <h5 className='font-weight-normal'>Please try again later and don't worry about getting your money back</h5>
                            <Link to="/">
                                <button className="btn btn-danger mt-4 py-2 w-25">Go Home</button>
                            </Link>
                        </div>
                    </div>
                </main>
            }

        </React.Fragment>
    );
}

export default VerifyPayment;
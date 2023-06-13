import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import { toast } from 'react-toastify';

import { ClubSvg } from '../utils/ProfileSvg';
import config from "../../services/config.json";
import ContextApi from '../../services/ContextApi';

const OrderItem = ({ id, status, products, refId, date, scores }) => {
    const [totalPrice, setTotalPrice] = useState();
    const context = useContext(ContextApi);

    useEffect(() => {
        const total = products.reduce(function (a, b) { return a + b.price }, 0)
        setTotalPrice(total);
    }, [])

    const result = () => {
        console.log(scores);
    }

    const cancelOrder = async () => {

        Swal.fire({
            icon: "error",
            html: '<span style="font-size:1.4rem;font-weight:normal">Are you sure you want cancel this order?</sp>',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: "#db3030",
            confirmButtonText: "Yes!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.get(`${config.domain}/api/payment/cancelOrder/${context.userData._id}/${id}`).then(res => {
                    console.log(res.data);
                    context.setUserData(res.data.user);
                    Swal.fire({
                        icon: "success",
                        html: '<h4 style="font-size:1.4rem;font-weight:bold">Purchase successfully cancelled</h4> <br> <span style="font-size:1.15rem;font-weight:normal;margin-top:15px">The purchase amount will be returned to your wallet</span>',
                        confirmButtonColor: "#59AB6E",
                        confirmButtonText: "Ok"
                    })
                }).catch(err => {
                    toast.error(`something went wrong, please try alter.`, {
                        position: "bottom-right",
                        theme: "light",
                        closeOnClick: true
                    })
                    console.log(err);
                })
            }
        })
    }

    return (
        <div className="card shadow-sm mb-4" style={{ borderRadius: "6px" }}>
            <div className="card-body">

                <div className="d-flex justify-content-between align-items-center">

                    <div className='d-flex align-items-center'>
                        <div className="rounded-circle d-flex align-items-center justify-content-center mr-2"
                            style={{ width: "25px", height: "25px", padding: "16px", background: `${status == "delivered" ? "#6BB927" : status == "processing" ? "#2F9DFF" : status == "returned" ? "#F0C05B" : status == "canceled" ? "#FF0000" : null}` }}>
                            {status == "delivered" ? <i class="far fa-check text-white"></i> :
                                status == "processing" ? <i class="far fa-cart-flatbed-boxes text-white" style={{ fontSize: '0.9rem' }}></i> :
                                    status == "returned" ? <i class="far fa-arrow-rotate-left text-white" style={{ fontSize: ".95rem" }}></i> :
                                        status == "canceled" ? <i class="fas fa-xmark text-white"></i> :
                                            null
                            }
                        </div>
                        <span style={{ fontWeight: "normal", fontSize: "1.05rem", textTransform: "capitalize" }} onClick={result}>{status}</span>
                    </div>

                    {status == "processing" || status == "returned" ?
                        <div className="d-flex align-items-center badge" style={{ border: "1.5px solid #DC3545", color: "#ce2937", cursor: "pointer" }} onClick={cancelOrder}>
                            <span style={{ fontSize: "1rem", fontWeight: "normal" }}>Cancel purchase</span>
                        </div> : null
                    }

                </div>

                <div className="order-info mt-4">
                    <span style={{ color: "#767790" }}>{moment(date).format("YYYY MMMM DD")}</span>
                    <i class="fas fa-period"></i>
                    <span style={{ color: "#767790" }}>Order code<span style={{ color: "#3f4064", fontWeight: "normal" }}>{refId}</span></span>
                    <i class="fas fa-period"></i>
                    <span style={{ color: "#767790" }}>Amount<span style={{ color: "#3f4064", fontWeight: "normal" }}>{totalPrice}$</span></span>
                </div>
                {status == "delivered" ?
                    <div className="mt-2 d-flex align-items-center">
                        <ClubSvg /> <span style={{ fontWeight: "normal", fontSize: "1rem", color: "#767790", marginLeft: "4px" }}>Zayclub score</span>
                        <span style={{ fontSize: "1.05rem", color: "#3f4064", fontWeight: "normal", marginLeft: "7px" }}>{scores ? scores : null}</span>
                    </div> : null
                }
                <div className="dropdown-divider mt-3"></div>

                <div className="py-3 d-flex flex-wrap">
                    {products && products.length > 0 ?
                        products.map(item =>
                            <img src={`${config.domain}/${item.picture}`} alt="" style={{ width: "17%" }} />
                        )
                        : null
                    }
                </div>

                {status == "delivered" ?
                    <div>
                        <div className="dropdown-divider mt-3"></div>
                        <span style={{ fontSize: '1.05rem', fontWeight: "450", color: "#5faf18", cursor: "pointer", float: "right" }}>View the invoice</span>
                    </div> : null
                }

            </div>
        </div>
    );
}

export default OrderItem;
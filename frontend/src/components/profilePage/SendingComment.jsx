import React, { useEffect, useState } from 'react';

import config from "../../services/config.json";

const SendingComment = ({ orders, id, picture, score, proposal, text, accepted }) => {

    const [orderId, setOrderId] = useState();

    useEffect(() => {
        findOrderId();
    }, [orders])

    const findOrderId = () => {
        for (let i = 0; i < orders.length; i++) {
            for (let y = 0; y < orders[i].products.length; y++) {
                if (orders[i].products[y]._id == id) {
                    setOrderId(orders[i]._id)
                }
            }
        }
    }

    const result = () => {
        console.log(orderId);
    }

    return (
        <div className="pt-2 pb-3 px-2 mb-3" style={{ borderBottom: "1px solid #e0e0e6" }}>

            <div className="d-flex align-items-center">

                <div style={{ width: "18%" }}>
                    <img src={`${config.domain}/${picture}`} alt="" className='img-fluid sending-image' style={{ width: "100%" }} />
                    <span className="badge text-white"
                        style={score == 5 ? { background: "#169632" } : score == 4 ? { background: "#1aba3c" } : score == 3 ? { background: "#1de542" } : score == 2 ? { background: "#F9BC00" } : score == 1 ? { background: "#ef4056" } : null
                        }>{score}</span>
                </div>
                <div className="w-100 px-3">

                    <div className="d-flex justify-content-between pb-2" style={{ borderBottom: "1px solid #f1f2f4" }}>
                        <button className="btn btn-prima" onClick={result}>Result</button>
                        {proposal == 1 ?
                            <span style={{ color: "#00a049", fontSize: ".9rem", fontWeight: "normal" }}>
                                <i class="far fa-thumbs-up"></i> <span>i recommend buying this product</span>
                            </span>
                            : proposal == -1 ?
                                <span style={{ color: "#ef4056", fontSize: ".9rem", fontWeight: "normal" }}>
                                    <i class="far fa-thumbs-down"></i> <span>i do not recommend buying this product</span>
                                </span>
                                : null
                        }
                        <div>
                            {accepted == 1 ?
                                <span className="badge badge-pill mr-3" style={{ background: "#ffffff", border: "1px solid #28A745", color: "#28A745", fontWeight: "normal" }}>Accepted</span>
                                : accepted == -1 ?
                                    <span className="badge badge-pill mr-3" style={{ background: "#ffffff", border: "2px solid #ef4056", color: "#ef4056", fontWeight: "normal" }}>Not Accepted</span>
                                    : null
                            }
                            <div style={{ display: "inline", color: "#3f4064", cursor: "pointer" }}>
                                <i class="fa-regular fa-pen-line mr-3"></i>
                                <i class="far fa-trash-can"></i>
                            </div>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <span style={{ display: "block", fontWeight: "normal", fontSize: "1rem" }}>
                            {text}
                        </span>
                    </div>


                </div>

            </div>

        </div >
    );
}

export default SendingComment;
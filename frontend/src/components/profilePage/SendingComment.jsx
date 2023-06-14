import React from 'react';

import config from "../../services/config.json";

const SendingComment = () => {
    return (
        // background: "#f7f7f7"
        <div className="pt-2 pb-3 px-2 mb-3" style={{ borderBottom: "1px solid #e0e0e6" }}>

            <div className="d-flex align-items-center">

                {/* <img src={`${config.domain}/OJ5KrPNiS.png`} alt="" className='img-fluid sending-image' style={{ width: "15%" }} /> */}

                <div style={{ width: "18%" }}>
                    <img src={`${config.domain}/OJ5KrPNiS.png`} alt="" className='img-fluid sending-image' style={{ width: "100%" }} />
                    <span className="badge badge-dark" style={{ color: "#ffffff" }}>5</span>
                </div>

                <div className="w-100 px-3">

                    <div className="d-flex justify-content-between pb-2" style={{ borderBottom: "1px solid #f1f2f4" }}>
                        <span style={{ color: "#00a049", fontSize: ".9rem", fontWeight: "normal" }}>
                            <i class="far fa-thumbs-up"></i> <span>i recommend buying this product</span>
                        </span>
                        {/* <span style={{ color: "#ef4056", fontSize: ".9rem", fontWeight: "normal" }}>
                            <i class="far fa-thumbs-down"></i> <span>i do not recommend buying this product</span>
                        </span> */}
                        <div>
                            <span className="badge badge-pill mr-3" style={{ background: "#ffffff", border: "2px solid #28A745", color: "#28A745" }}>Accepted</span>
                            {/* <span className="badge badge-pill mr-3" style={{ background: "#ffffff", border: "2px solid #ef4056", color: "#ef4056" }}>Not Accepted</span> */}
                            <div style={{ display: "inline", color: "#3f4064", cursor: "pointer" }}>
                                <i class="fa-regular fa-pen-line mr-3"></i>
                                <i class="far fa-trash-can"></i>
                            </div>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <span style={{ display: "block", fontWeight: "normal", fontSize: "1rem" }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, recusandae.
                        </span>
                    </div>


                </div>

            </div>

        </div>
    );
}

export default SendingComment;
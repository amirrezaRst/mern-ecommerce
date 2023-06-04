import React from 'react';

import config from "../../services/config.json";

const PaymentItem = ({ picture, count, color }) => {
    return (
        <div className="col-md-4">
            <div className="card shadow-sm position-relative">
                <div className="card-body">
                    <div className="">
                        <img src={`${config.domain}/${picture}`} alt="" className='img-fluid' />
                    </div>
                    <div className='product-wap pb-2' style={{ position: "absolute", left: "0", bottom: "0" }}>
                        <span class={`product-color-dot color-dot-${color} float-left rounded-circle ml-1`} style={{ padding: "9px" }}></span>
                    </div>
                    <div className='badge' style={{ position: "absolute", right: "0", bottom: "0", background: `#0F9B2D`, color: `#ffffff`, borderRadius: "5px 0 5px 0" }}>
                        <span style={{ fontSize: "1.3rem" }}>{count}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentItem;
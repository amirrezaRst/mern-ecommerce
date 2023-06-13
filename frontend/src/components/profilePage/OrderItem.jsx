import React, { useEffect, useState } from 'react';
import { ClubSvg } from '../utils/ProfileSvg';
import moment from "moment";
import config from "../../services/config.json";


const OrderItem = ({ id, status, products, refId, date }) => {
    const [totalPrice, setTotalPrice] = useState();
    const [allProduct, setAllProduct] = useState();

    useEffect(() => {
        const total = products.reduce(function (a, b) { return a + b.price }, 0)
        setTotalPrice(total);
        if (products) {
            setAllProduct(products);
        }
    }, [])

    const result = () => {
        products.map(item => {
            console.log(item.picture);
        })
    }

    return (
        <div className="card shadow-sm mb-4" style={{ borderRadius: "6px" }}>
            <div className="card-body">

                <div className="d-flex">
                    <div className="rounded-circle d-flex align-items-center justify-content-center mr-2"
                        style={{ width: "25px", height: "25px", padding: "10px", background: `${status == "delivered" ? "#6BB927" : status == "processing" ? "#2F9DFF" : status == "returned" ? "#F0C05B" : status == "canceled" ? "#FF0000" : null}` }}>
                        {status == "delivered" ?
                            <i class="fa-regular fa-check text-white"></i> :
                            null
                        }
                    </div>
                    <span style={{ fontWeight: "normal", fontSize: "1.05rem", textTransform: "capitalize" }} onClick={result}>{status}</span>
                </div>

                <div className="order-info mt-4">
                    <span style={{ color: "#767790" }}>{moment(date).format("YYYY MMMM DD")}</span>
                    <i class="fas fa-period"></i>
                    <span style={{ color: "#767790" }}>Order code<span style={{ color: "#3f4064", fontWeight: "normal" }}>{refId}</span></span>
                    <i class="fas fa-period"></i>
                    <span style={{ color: "#767790" }}>Amount<span style={{ color: "#3f4064", fontWeight: "normal" }}>{totalPrice}$</span></span>
                </div>
                <div className="mt-2 d-flex align-items-center">
                    <ClubSvg /> <span style={{ fontWeight: "normal", fontSize: "1rem", color: "#767790", marginLeft: "4px" }}>Zayclub score</span>
                    <span style={{ fontSize: "1.05rem", color: "#3f4064", fontWeight: "normal", marginLeft: "7px" }}>17</span>
                </div>
                <div className="dropdown-divider mt-3"></div>

                <div className="py-3 d-flex flex-wrap">

                    {products && products.length > 0 ?
                        // products.map(item =>
                        //     // <OrderItem id={item._id} status={item.status} refId={item.refId} products={item.products} date={item.date} />
                        //     <h1>{item.picture}</h1>
                        // )
                        products.map(item =>
                            // <OrderItem id={item._id} status={item.status} refId={item.refId} products={item.products} date={item.date} />
                            // <h1>{item.picture}</h1>
                            <img src={`${config.domain}/${item.picture}`} alt="" style={{width:"17%"}} />
                        )
                        : null
                    }

                </div>

            </div>
        </div>
    );
}

export default OrderItem;
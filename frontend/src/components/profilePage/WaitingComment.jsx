import React, { useEffect, useState } from 'react';

import config from "../../services/config.json"
import { CommentModal } from '../utils/ProfileModals';

const WaitingComment = ({ orders, id, name, picture }) => {

    const [orderId, setOrderId] = useState();

    useEffect(() => {
        findOrderId();
    }, [orders]);

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
        <div className="col-lg-6 mb-4">

            <div className="card">
                <div className="card-body py-2">

                    <div className="d-flex align-items-center">

                        <img src={`${config.domain}/${picture}`} alt="" className='img-fluid py-1 waiting-image' />
                        <span className='ml-3' style={{ fontWeight: "normal", fontSize: "1rem" }}>
                            {name}
                        </span>

                    </div>
                    {/* {id} */}
                    <button className="btn btn-block mt-3 mb-1" style={{ fontSize: ".95rem", background: "transparent", border: "1px solid #169632", color: "#169632" }} data-toggle="modal" data-target="#add-comment-modal">
                        Register comments & points
                    </button>

                    <CommentModal />

                </div>
            </div>

        </div>
    );
}

export default WaitingComment;
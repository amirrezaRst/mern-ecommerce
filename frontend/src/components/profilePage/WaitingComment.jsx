import React from 'react';

import config from "../../services/config.json"

const WaitingComment = ({ id, name, picture }) => {
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
                    <button className="btn btn-block mt-3 mb-1" style={{ fontSize: ".95rem", background: "transparent", border: "1px solid #169632", color: "#169632" }}>
                        Register comments & points
                    </button>

                </div>
            </div>

        </div>
    );
}

export default WaitingComment;
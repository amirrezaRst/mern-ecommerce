import React, { useState } from 'react';

import { Comment } from '../utils/ProfileSvg';

const Comments = ({ userData }) => {

    const [activeTab, setActiveTab] = useState("waiting");

    const changeTab = () => {
        if (activeTab == "waiting") {
            return setActiveTab("sending");
        }
        else {
            setActiveTab("waiting")
        }
    }

    const result = () => {
        console.log(activeTab);
    }

    return (
        <main>
            <div className="card shadow-sm" >
                <div className="card-body pt-4 pb-5">

                    <div className="">
                        <h5 onClick={result}>Opinions</h5>
                    </div>
                    <div className="d-flex my-4" style={{ borderBottom: "2px solid #f1f2f4" }}>

                        <div className="mr-4" style={{ cursor: "pointer" }} onClick={changeTab}>
                            <h6 className='font-weight-normal'>Waiting for comments</h6>
                            <div style={activeTab == "sending" ? { background: "#169632", height: "5px", borderRadius: "5px 5px 0 0", visibility: "hidden" } : { background: "#169632", height: "5px", borderRadius: "5px 5px 0 0" }}></div>
                        </div>
                        <div style={{ cursor: "pointer" }} onClick={changeTab}>
                            <h6 className='font-weight-normal'>My comments</h6>
                            <div style={activeTab == "waiting" ? { background: "#169632", height: "5px", borderRadius: "5px 5px 0 0", visibility: "hidden" } : { background: "#169632", height: "5px", borderRadius: "5px 5px 0 0" }}></div>
                        </div>

                    </div>


                    {/* {!userData ?
                        null : */}
                    <div className="py-3 pb-5">
                        <div className="d-flex justify-content-center">
                            <Comment />
                        </div>
                        <span className='d-block text-center font-weight-normal' style={{ fontSize: "1.15rem" }}>You do not have any products to comment yet</span>
                    </div>
                    {/* } */}

                </div>
            </div>
        </main>
    );
}

export default Comments;
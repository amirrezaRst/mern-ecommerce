import React, { useState } from 'react';
import { Comment } from '../utils/ProfileSvg';


const Orders = ({ userData }) => {

    const [activeTab, setActiveTab] = useState("processing");

    const changeTab = (prop) => {
        setActiveTab(prop);
    }

    const result = () => {
        console.log(activeTab);
    }


    return (
        <main>
            <div className="card shadow-sm" >
                <div className="card-body pt-4 pb-5">

                    <div className="">
                        <h5 onClick={result}>Orders</h5>
                    </div>
                    <div className="d-flex my-4" style={{ borderBottom: "2px solid #f1f2f4" }}>

                        <div className="mr-4" style={{ cursor: "pointer" }} onClick={() => changeTab("processing")}>
                            <h6 className='font-weight-normal'>Processing</h6>
                            <div style={activeTab == "processing" ? { background: "#2f9dff", height: "5px", borderRadius: "5px 5px 0 0" } : { visibility: "hidden" }}></div>
                        </div>
                        <div className='mr-4' style={{ cursor: "pointer" }} onClick={() => changeTab("returned")}>
                            <h6 className='font-weight-normal'>Returned</h6>
                            <div style={activeTab == "returned" ? { background: "#F0C05B", height: "5px", borderRadius: "5px 5px 0 0" } : { background: "#169632", height: "5px", borderRadius: "5px 5px 0 0", visibility: "hidden" }}></div>
                        </div>
                        <div className="mr-4" style={{ cursor: "pointer" }} onClick={() => changeTab("delivered")}>
                            <h6 className='font-weight-normal'>Delivered</h6>
                            <div style={activeTab == "delivered" ? { background: "#5FBD63", height: "5px", borderRadius: "5px 5px 0 0" } : { background: "#169632", height: "5px", borderRadius: "5px 5px 0 0", visibility: "hidden" }}></div>
                        </div>
                        <div className="mr-4" style={{ cursor: "pointer" }} onClick={() => changeTab("canceled")}>
                            <h6 className='font-weight-normal'>Canceled</h6>
                            {/* <div style={activeTab == "canceled" ? { background: "#5FBD63", height: "5px", borderRadius: "5px 5px 0 0" } : { background: "#5FBD63", height: "5px", borderRadius: "5px 5px 0 0", visibility: "hidden" }}></div> */}
                            <div style={activeTab == "canceled" ? { background: "red", height: "5px", borderRadius: "5px 5px 0 0" } : { visibility: "hidden" }}></div>
                        </div>

                    </div>


                    <div className="py-3 pb-5">
                        <div className="d-flex justify-content-center">
                            <Comment />
                        </div>
                        <span className='d-block text-center font-weight-normal' style={{ fontSize: "1.15rem" }}>You do not have any products to comment yet</span>
                    </div>

                </div>
            </div>
        </main >
    );
}

export default Orders;
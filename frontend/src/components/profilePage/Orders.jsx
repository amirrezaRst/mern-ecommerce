import React, { useEffect, useState } from 'react';
import { Comment } from '../utils/ProfileSvg';
import OrderItem from './OrderItem';


const Orders = ({ userData }) => {

    const [activeTab, setActiveTab] = useState("processing");
    const [processing, setProcessing] = useState();
    const [returned, setReturned] = useState();
    const [delivered, setDelivered] = useState();
    const [canceled, setCanceled] = useState();

    const changeTab = (prop) => {
        setActiveTab(prop);
    }

    useEffect(() => {
        if (userData.order) {
            const processingItems = userData.order.filter(item => {
                return item.status == "processing";
            })
            setProcessing(processingItems)
            const deliveredItems = userData.order.filter(item => {
                return item.status == "delivered";
            })
            setDelivered(deliveredItems)
            const returnedItems = userData.order.filter(item => {
                return item.status == "returned";
            })
            setReturned(returnedItems)
        }
    }, [])

    const result = () => {
        console.log(processing);
    }


    return (
        <main>
            <div className="card shadow-sm" >
                <div className="card-body pt-4 pb-5">

                    <div className="">
                        <h5 onClick={result}>Orders</h5>
                    </div>
                    <div className="d-flex my-4 " style={{ borderBottom: "2px solid #f1f2f4" }}>

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

                    <div className="mt-5">
                        {activeTab == "processing" && processing && processing.length > 0 ? processing.map(item =>
                            <OrderItem id={item._id} status={item.status} refId={item.refId} products={item.products} date={item.date} scores={item.scores} />
                        ) : null}
                        {activeTab == "returned" && returned && returned.length > 0 ? returned.map(item =>
                            <OrderItem id={item._id} status={item.status} refId={item.refId} products={item.products} date={item.date} scores={item.scores} />
                        ) : null}
                        {activeTab == "delivered" && delivered && delivered.length > 0 ? delivered.map(item =>
                            <OrderItem id={item._id} status={item.status} refId={item.refId} products={item.products} date={item.date} scores={item.scores} />
                        ) : null}
                        {activeTab == "canceled" && canceled && canceled.length > 0 ? canceled.map(item =>
                            <OrderItem id={item._id} status={item.status} refId={item.refId} products={item.products} date={item.date} scores={item.scores} />
                        ) : null}
                    </div>


                </div>
            </div>
        </main >
    );
}

export default Orders;
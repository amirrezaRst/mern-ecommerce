import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { Delivered, Processing, Returned, History } from "../utils/ProfileSvg";
import SingleFavoriteCart from './SingleHistoryItem';


const Profile = ({ userData }) => {

    const [historyProduct, setHistoryProduct] = useState();
    const [processing, setProcessing] = useState();
    const [returned, setReturned] = useState();
    const [delivered, setDelivered] = useState();

    const result = () => {
        console.log(processing);
        console.log(returned);
        console.log(delivered);


    }

    useEffect(() => {
        const item = JSON.parse(localStorage.getItem("history"));
        setHistoryProduct(item);

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

    return (
        <React.Fragment>

            <main>

                <div className="card shadow-sm" >
                    <div className="card-body">

                        <div className="d-flex justify-content-between align-items-center px-2">
                            <div className="">
                                <h5 onClick={result}>Status of orders</h5>
                                <div className="mt-3" style={{ background: "#169632", width: "75%", height: "3px" }}></div>
                            </div>
                            <h6><Link to="/profile/orders" style={{ color: "#169632", textDecoration: "none" }}>View all <i class="fa-regular fa-arrow-right ml-1"></i></Link></h6>
                        </div>
                        <div className="row mt-4 pb-3">

                            <div className="col-4">
                                <div className="d-flex">
                                    <Link to="/profile/orders"><Delivered /></Link>
                                    <div className="ml-3 d-flex flex-column justify-content-around">
                                        <span className='mb-0 font-weight-normal' style={{ fontSize: "1.12rem" }}>{delivered ? delivered.length : null} Orders</span>
                                        <span className='mb-0 font-weight-normal text-black-50' style={{ fontSize: ".95rem" }}>Delivered</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="d-flex">
                                    <Link to="/profile/orders"><Returned /></Link>
                                    <div className="ml-3 d-flex flex-column justify-content-around">
                                        <span className='mb-0 font-weight-normal' style={{ fontSize: "1.12rem" }}>{returned ? returned.length : null} Orders</span>
                                        <span className='mb-0 font-weight-normal text-black-50' style={{ fontSize: ".95rem" }}>Returned</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="d-flex">
                                    <Link to="/profile/orders"><Processing /></Link>
                                    {/* <Processing /> */}

                                    <div className="ml-3 d-flex flex-column justify-content-around">
                                        <span className='mb-0 font-weight-normal' style={{ fontSize: "1.12rem" }}>{processing ? processing.length : null} Orders</span>
                                        <span className='mb-0 font-weight-normal text-black-50' style={{ fontSize: ".95rem" }}>Processing</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


                <div className="card shadow-sm mt-3" >
                    <div className="card-body">

                        <div className="d-flex justify-content-between align-items-center px-2">
                            <div className="">
                                <h5>History</h5>
                                <div className="mt-3" style={{ background: "#169632", width: "75%", height: "3px" }}></div>
                            </div>
                            <h6 onClick={result}><Link style={{ color: "#169632", textDecoration: "none" }}>View all <i class="fa-regular fa-arrow-right ml-1"></i></Link></h6>
                        </div>

                        <div className="pt-5 pb-4">
                            {historyProduct != null || historyProduct && historyProduct.length > 0 ?
                                <div className='row'>
                                    {historyProduct.map(item => <SingleFavoriteCart id={item.id} name={item.name} picture={item.picture} color={item.color} price={item.price} size={item.size} />)}
                                </div> :
                                // null :
                                <div className="py-3 pb-5">
                                    <div className="d-flex justify-content-center">
                                        <History />
                                    </div>
                                    <span className='d-block text-center font-weight-normal' style={{ fontSize: "1.15rem" }}>You have not visited any products recently</span>
                                </div>
                            }
                        </div>

                    </div>
                </div>


            </main>

        </React.Fragment >
    );
}

export default Profile;
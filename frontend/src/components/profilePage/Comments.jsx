import React, { useEffect, useState } from 'react';
import { CommentMessage, SendingCommentMessage, WaitingCommentMessage } from '../utils/Messages';

import { Comment, UserClubSvg } from '../utils/ProfileSvg';
import SendingComment from './SendingComment';
import WaitingComment from './WaitingComment';

const Comments = ({ userData }) => {

    const [activeTab, setActiveTab] = useState("waiting");
    const [sendingComment, setSendingComment] = useState();
    const [waitingComment, setWaitingComment] = useState();

    const [orderIndex, setOrderIndex] = useState();
    const [productIndex, setProductIndex] = useState();

    const changeTab = () => {
        if (activeTab == "waiting") {
            return setActiveTab("sending");
        }
        else {
            setActiveTab("waiting")
        }
    }

    useEffect(() => {
        const deliverItems = userData.order.filter(item => {
            return item.status == "delivered";
        })
        const allProducts = deliverItems.map(item => {
            return item.products
        })

        const waiting = allProducts.filter(item => {
            return item[0].isViewPoint == false;
        })
        const waitingItems = waiting.map(item => {
            for (let i = 0; i < item.length; i++) {
                return item[i];
            }
        })

        const sending = allProducts.filter(item => {
            return item[0].isViewPoint == true;
        })
        const sendingItems = sending.map(item => {
            for (let i = 0; i < item.length; i++) {
                return item[i];
            }
        })

        setSendingComment(sendingItems);
        setWaitingComment(waitingItems);
    }, [userData])

    const result = () => {
        console.log(waitingComment);
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
                    {activeTab == "waiting" && waitingComment && waitingComment.length > 0 ?
                        <div className="card mb-4" style={{background:"#fcfcfc"}}>
                            <div className="py-3 px-2">
                                <div className="d-flex align-items-center">
                                    <UserClubSvg />
                                    <div className="d-flex flex-column justify-content-between ml-3">
                                        <span style={{ fontWeight: "normal", fontSize: ".95rem", color: "#080a38" }}>Are you satisfied with this product?</span>
                                        <span style={{ fontWeight: "normal", fontSize: ".95rem", marginTop: "5px", color: "#494a5b" }}>Get 5 points from Digiclub by registering a comment for each product</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null
                    }

                    {activeTab == "waiting" && waitingComment ?
                        waitingComment.length > 0 ?
                            <div className='row'>
                                {waitingComment.map(item => <WaitingComment orders={userData.order} id={item._id} name={item.name} picture={item.picture} productId={item.productId} />)}
                            </div>
                            : <WaitingCommentMessage /> : null
                    }
                    {activeTab == "sending" && waitingComment ?
                        waitingComment.length > 0 ?
                            sendingComment.map(item => <SendingComment orders={userData.order} id={item._id} picture={item.picture} text={item.comment.text} accepted={item.comment.accepted} score={item.comment.score} proposal={item.comment.proposal} />)
                            : <SendingCommentMessage /> : null
                    }

                </div>
            </div>
        </main>
    );
}

export default Comments;
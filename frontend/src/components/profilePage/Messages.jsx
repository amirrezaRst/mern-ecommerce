import React from 'react';

import SingleMessageItem from "./SingleMessageItem";
import { Message } from "../utils/ProfileSvg";

const Messages = ({ userData }) => {

    const result = () => {
        console.log(userData);
    }

    return (
        <React.Fragment>
            <main>
                <div className="card shadow-sm" >
                    <div className="card-body pt-4 pb-5">

                        <div className="d-flex mb-4">
                            <div className="">
                                <h5 className='font-weight-normal' onClick={result}>Messages</h5>
                                <div style={{ background: "#169632", width: "75%", height: "3px" }}></div>
                            </div>
                        </div>

                        {userData && userData.message.length > 0 ?
                            userData.message.map(item => <SingleMessageItem id={item._id} icon={item.icon} title={item.title} text={item.text} read={item.isRead} time={item.time} />) :
                            <div className="py-3 pb-5">
                                <div className="d-flex justify-content-center">
                                    <Message />
                                </div>
                                <span className='d-block text-center font-weight-normal' style={{ fontSize: "1.15rem" }}>There are no messages yet</span>
                            </div>
                        }

                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}

export default Messages;
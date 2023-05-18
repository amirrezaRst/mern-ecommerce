import React from 'react';
import { Message } from "../utils/ProfileSvg";

const Messages = ({ userData }) => {
    return (
        <React.Fragment>
            <main>
                <div className="card shadow-sm" >
                    <div className="card-body pt-4 pb-5">

                        <div className="d-flex mb-4">
                            <div className="">
                                <h5 className='font-weight-normal'>Messages</h5>
                                <div style={{ background: "#169632", width: "75%", height: "3px" }}></div>
                            </div>
                        </div>

                        {!userData ?
                            null :
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
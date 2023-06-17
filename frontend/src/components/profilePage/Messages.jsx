import React, { useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from "sweetalert2";

import SingleMessageItem from "./SingleMessageItem";
import { Message } from "../utils/ProfileSvg";
import ContextApi from '../../services/ContextApi';
import config from "../../services/config.json";

const Messages = ({ userData }) => {

    const context = useContext(ContextApi);

    const deleteMessages = async () => {

        Swal.fire({
            icon: "error",
            html: '<span style="font-size:1.4rem;font-weight:normal">Are you sure you want to delete messages?</sp>',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: "#db3030",
            confirmButtonText: "Delete!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`${config.domain}/api/user/deleteMessages/${userData._id}`).then(res => {
                    context.setUserData(res.data.user);
                }).catch(err => {
                    toast.error(`Something went wrong, please try later.`, {
                        position: "bottom-right",
                        theme: "light",
                        closeOnClick: true
                    })
                    console.log(err);
                })
            }
        })
    }


    return (
        <React.Fragment>
            <main>
                <div className="card shadow-sm" >
                    <div className="card-body pt-4 pb-5">

                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="">
                                <h5 className='font-weight-normal'>Messages</h5>
                                <div style={{ background: "#169632", width: "75%", height: "3px" }}></div>
                            </div>
                            <div className='badge py-2 px-2' style={{ border: "1px solid #cc0000" }} onClick={deleteMessages}>
                                <span id="delete-message-btn" ><i className="far fa-trash"></i> Delete messages</span>
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
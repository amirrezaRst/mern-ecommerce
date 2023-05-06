import React from 'react';


const Signup = () => {
    return (
        <React.Fragment>

            <main className='container mb-5 mt-2'>

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-5 d-flex justify-content-center align-items-center">
                            <img src="/./assets/img/register-vector7.avif" className='' alt="zay shop" />
                        </div>

                        <div className="col-lg-7">
                        <span className='mb-5' style={{fontSize:"2.5rem",fontWeight:"400"}}>Sign Up</span>

                            <form className='mt-4'>

                                <label htmlFor="name-filed">Full Name</label>
                                <input type="text" placeholder='Full Name' id='name-filed' className="form-control mb-3" required />

                                <label htmlFor="email-filed">Email</label>
                                <input type="email" placeholder='Email' id='email-filed' className="form-control mb-3" required />

                                <label htmlFor="password-filed">Password</label>
                                <input type="password" placeholder='****' id='password-filed' className="form-control mb-3" required />

                                <label htmlFor="confirm-filed">Confirm Password</label>
                                <input type="password" placeholder='****' id='name-filed' className="form-control mb-3" required />

                                <div className="">
                                    <label for="actual-btn" className='text-dark'>Avatar</label>
                                    {/* <input type="file" id="actual-btn" hidden onChange={e => setAvatarField(e.target.files[0])} /> */}
                                    <input type="file" id="actual-btn" hidden />
                                    {/* <label for="actual-btn" className='w-100' id='register-avatar'>Choose File</label> */}
                                    {/* <label for="actual-btn" className='w-100' id='register-avatar'>{avatarField ? avatarField.name : "Choose File"}</label> */}
                                    <label for="actual-btn" className='w-100' id='register-avatar'>choose file</label>
                                    {/* <span className={avatarClass}>Please select a profile picture</span> */}
                                    {/* <span>Please select a profile picture</span> */}
                                </div>
                                <div class="text-end mt-2">
                                    <button type="button" class="btn btn-success btn-lg px-3">Sign Up</button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>

            </main>

        </React.Fragment>
    );
}

export default Signup;
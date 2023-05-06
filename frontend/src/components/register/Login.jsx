import React from 'react';


const Login = () => {
    return (
        <React.Fragment>

            <main className='container mb-5 mt-4'>

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-5 d-flex justify-content-center align-items-center">
                            <img src="/./assets/img/register-vector7.avif" className='' alt="zay shop" />
                        </div>

                        <div className="col-lg-7">
                            <span className='mb-5' style={{fontSize:"2.5rem",fontWeight:"400"}}>Log In</span>
                            <form className='mt-4'>

                                <label htmlFor="name-filed">Full Name</label>
                                <input type="text" placeholder='Full Name' id='name-filed' className="form-control mb-3" required />

                                <label htmlFor="email-filed">Email</label>
                                <input type="email" placeholder='Email' id='email-filed' className="form-control mb-3" required />

                                <label htmlFor="password-filed">Password</label>
                                <input type="password" placeholder='Password' id='password-filed' className="form-control mb-3" required />

                                <div class="text-end mt-2">
                                    <button type="button" class="btn btn-success btn-lg px-3">Log In</button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>

            </main>

        </React.Fragment>
    );
}

export default Login;
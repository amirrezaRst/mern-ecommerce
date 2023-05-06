import React from 'react';


const Signup = () => {
    return (
        <React.Fragment>

            <main className='container my-5'>

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-5 d-flex justify-content-center bg-danger px-0">
                            <img src="/./assets/img/register-vector7.avif" className='' alt="" />
                        </div>

                        <div className="col-lg-7">
                            <form>

                                <label htmlFor="name-filed">Full Name</label>
                                <input type="text" placeholder='Full Name' id='name-filed' className="form-control" />
                                
                                <label htmlFor="name-filed">Full Name</label>
                                <input type="text" placeholder='Full Name' id='name-filed' className="form-control" />
                                
                                <label htmlFor="name-filed">Full Name</label>
                                <input type="text" placeholder='Full Name' id='name-filed' className="form-control" />

                            </form>
                            {/* <div>
                                <div class="mb-3">
                                    <label htmlFor="name-field">Full Name</label>
                                    <input type="text" class="form-control mt-1" id="name-field" placeholder="Full Name" />
                                </div>
                                <div class="row">
                                    <div class="col text-end mt-2">
                                        <button type="submit" class="btn btn-success btn-lg px-3">Let’s Talk</button>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>

            </main>

        </React.Fragment>
    );
}

export default Signup;
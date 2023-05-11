import React from 'react';


const Profile = () => {
    return (
        <React.Fragment>

            <div className="container my-5 pb-4">
                <div className="row">

                    <main className='col-lg-8'>
                        <div className="card bg-light" style={{boxShadow:" 0px 0px 41px -11px rgba(0,0,0,0.69)"}}>
                            <div className="card-body">
                                main
                            </div>
                        </div>
                    </main>
                    <aside className='col-lg-4'>
                        <div className="card">
                            <div className="card-body">
                                side
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </React.Fragment>
    );
}

export default Profile;
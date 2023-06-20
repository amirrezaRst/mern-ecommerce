import React from 'react';
import { Link } from 'react-router-dom';
import profile from "./user-1.jpg";
import "./styles.min.css";

const Dashboard = () => {
    return (
        <React.Fragment>

            <div className="row">

                <div className="col-lg-3" id='dashboard-aside'>

                    <section id='dashboard-aside-logo' className='container'>
                        <Link class="navbar-brand text-success logo h1 align-self-center container" to="/">
                            Zay
                        </Link>
                    </section>
                    <section className="container">
                        <div className="container menu-navigation">
                            <h5 className='px-3 mb-4'>Menu</h5>
                            <span className='px-3 py-2 menu-item'><i class="fa-light fa-chart-tree-map mr-2"></i> Dashboard</span>
                        </div>
                    </section>

                </div>
                <div className="col-lg-9 container">

                    <nav id='dashboard-nav'>
                        <div className="container-fluid d-flex justify-content-between">

                            {/* fa-shake */}
                            <i class="fa-regular fa-bell-on"></i>
                            <div className="d-flex float-right">
                                <span className='text-capitalize' style={{ fontWeight: "normal", fontSize: "1.1rem" }}>amirreza rostami</span>
                                <div className="">
                                    <img src="./assets/img/user-1.jpg" alt="" className='img-fluid dashboard-profile' />
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>

            </div>

        </React.Fragment>
    );
}

export default Dashboard;
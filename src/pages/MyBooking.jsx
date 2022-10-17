import React from "react";
import "../assets/styles/mybooking.css";
import botArrow from "../assets/icons/bottom-arrow.svg";
import airplane from "../assets/icons/airplane.svg";
import {Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import iconProfile from "../assets/icons/icon-profile.svg";
import iconMyReview from "../assets/icons/icon-myPriview.svg";
import iconSetting from "../assets/icons/icon-setting.svg";
import iconLogout from "../assets/icons/icon-logout.svg";


export default function MyBooking() {

    const logout = () => {
        localStorage.clear();
       
    };
    return (
        <>
            <div className="container-fluid myBooking ml-0 mr-0">
                <Navbar />
                <section className="d-flex w-100">
                    <div className="col-lg-4 col-12 side-content">
                        <div className="card d-flex flex-column w-100">
                          
                                <div className="d-flex flex-column">
                               
                                
                                        <>
                                            <img
                                                width={"200px"}
                                                height={"200px"}
                                                className="card-img-top"
                                         
                                                 src={`https://ui-avatars.com/api/?name=Rizki+Nasution`}
                                                alt="Card cap"
                                            />
                                        </>
                              
                                    <div className="detail-profile">
                                        {<h4>Rizki Romadhona Nasution</h4>}
                                        {<p>Kota Bogor</p>}
                                    </div>
                                </div>
                   

                            <div className="label d-flex">
                                <div className="label-card">Cards</div>
                                <div className="add-card">+ Add</div>
                            </div>
                            <div className="credit-card d-flex flex-column">
                                <label className="mt-3">4441 1235 5512 5551</label>
                                <div className="detail-cc d-flex flex-row">
                                    <p className="type-card">X Card</p>
                                    <p className="balance">$ 1,440.2</p>
                                </div>
                            </div>
                            <div className="card-setting d-flex flex-column justify-content-start">
                                <Link to="/profile">
                                    <div className="">
                                        <img src={iconProfile} alt="" />
                                        <label htmlFor="">Profile</label>
                                    </div>
                                </Link>
                            
                                <div>
                                    <img src={iconMyReview} alt="" />
                                    <label htmlFor="">My Review</label>
                                </div>
                                <div>
                                    <img src={iconSetting} alt="" />
                                    <label htmlFor="">Settings</label>
                                </div>
                                <div>
                                    <button onClick={logout}>
                                        <img src={iconLogout} alt="" />
                                        <label htmlFor="">Logout</label>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8 col-12 main-content d-flex flex-column">
                        <div className="card">
                            <h3>MY BOOKING</h3>
                            <div className="header-booking d-flex">
                                <label className="my-booking">My Booking</label>
                                <label className="order-history">Order History</label>
                            </div>
                        </div>
                  
                           
                                    <div className="card">
                                        <div className="content d-flex flex-column">
                                            <p className="date-departure">11-10-2022</p>
                                            <div className="destination d-flex flex-row">
                                                <h5>CGK</h5>
                                                <img src={airplane} alt="" />
                                                <h5>KNO</h5>
                                            </div>
                                            <p className="code-airplane">
                                                Rizki RN 22D
                                            </p>
                                        </div>
                                        <div className="status">
                                            <label className="label-status">Status</label>
                             
                                                <>
                                                    <button className="ticket-iussue">
                                                        Eticket issued
                                                    </button>
                                                </>
          
                                            <Link to={`/detail`}>
                                            <div className="label-viewDetail">
                                                <label>View Details</label>
                                                <img src={botArrow} alt="" />
                                            </div>
                                            </Link>

                                        </div>
                                    </div>
                      
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}

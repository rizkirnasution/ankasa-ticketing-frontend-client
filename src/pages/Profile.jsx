/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import '../assets/styles/profile.css'
import rightArrow from '../assets/icons/right-arrow.svg'
import { Link} from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import iconProfile from '../assets/icons/icon-profile.svg'
import iconMyReview from '../assets/icons/icon-myPriview.svg'
import iconSetting from '../assets/icons/icon-setting.svg'
import iconLogout from '../assets/icons/icon-logout.svg'

export default function Profile() {

    const [errors] = useState([])
    const [isLoading] = useState(false)

    // photo

    const [isChangePhoto] = useState(false)


    const logout = () => {
        localStorage.clear()
    }

    return (
        <>
            <div className="container-fluid profile ml-0 mr-0">
                <Navbar />
                <section className="d-flex w-100">
                    <div className="row w-100">
                        <div className="col-lg-4 col-12 side-content">
                            <div className="card d-flex flex-column w-100">
     
                                        <div className="d-flex flex-column w-100" >
        
                                                    <>
                                                        <img width={'200px'} height={'200px'} className="card-img-top"
                                                           
                                                            src={`https://ui-avatars.com/api/?name=Rizki+Nasution`}
                                                            alt="Card image cap"/>
                                                    </>
                                           
                                            <label className="select-foto" htmlFor="files">Select Photo</label>
                                            <input className="hidden" hidden type="file" id="files"/>
                                            {
                                                isLoading ?
                                                    (
                                                        <button
                                                            className="btn btn-success btn-lg ms-2"
                                                            type="button"
                                                            disabled
                                                        >
                                                            <span
                                                                className="spinner-border spinner-border-sm"
                                                                role="status"
                                                                aria-hidden="true"
                                                            ></span>
                                                            {" "}
                                                            Loading...
                                                        </button>
                                                    ) :
                                                    (
                                                        isChangePhoto && <button type="submit" >Save</button>
                                                    )

                                            }
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
                        <div className="col-lg-8 col-12 main-content d-flex flex-column">
                            <div className="card w-100">
                                <div className="row">
                                    <div className="col-12">
                                        {errors.length > 0 && (
                                            <div className="alert alert-danger mx-0">
                                                <ul className="m-0">
                                                    
                                                </ul>
                                            </div>
                                        )}
                                        <h3>PROFILE</h3>
                                        <div className="header-booking d-flex">
                                            <label className="my-booking">Profile</label>
                                        </div>
                                    </div>
                                    <div className="col-12 fill-profile">
                                        <div className="title d-flex flex-row">
                                            <div className="col-6 contact"><h6>Contact</h6></div>
                                            <div className="spaci-header" ></div>
                                            <div className="col-6 biodata"><h6>Biodata</h6></div>
                                        </div>
                                        <div className="col-12 form-input">
                                            <form className="d-flex flex-row">
                                                <div className="form-contact col-6 d-flex flex-column">
                                                    <label>Email</label>
                                                    <input type="text" />
                                                    <label>Phone Number</label>
                                                    <input type="text" />
                                                    <div className="button-setting d-flex justify-content-end">
                                                        <h5>Account Settings</h5>
                                                        <img src={rightArrow} alt="" />
                                                    </div>
                                                </div>
                                                <div className="spaci-content" ></div>
                                                <div className="col-6 d-flex flex-column">
                                                    <label>Username</label>
                                                    <input type="text" />
                                                    <label>City</label>
                                                    <input type="text" />
                                                    <label>Address</label>
                                                    <input type="text" />
                                                    <label>Post Code</label>
                                                    <input type="text" />
                                                    {
                                                        isLoading ?
                                                            (
                                                                <button
                                                                    className="btn btn-success btn-lg ms-2"
                                                                    type="button"
                                                                    disabled
                                                                >
                                                                    <span
                                                                        className="spinner-border spinner-border-sm"
                                                                        role="status"
                                                                        aria-hidden="true"
                                                                    ></span>
                                                                    {" "}
                                                                    Loading...
                                                                </button>
                                                            ) :
                                                            (
                                                                <button type="submit">Save</button>
                                                            )
                                                    }

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div >
        </>

    )
}
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Zoom, Slide } from "react-awesome-reveal";

import "../assets/styles/home.css";
=======
import React from "react";
import "../assets/styles/home.css";
import { Link } from "react-router-dom";
import { Zoom, Slide, Fade } from "react-awesome-reveal";

>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
import bgHome from "../assets/images/home_bg.jpg";
import object from "../assets/images/object.svg";
import iTransfer from "../assets/icons/transfer.svg";
import arrow from "../assets/icons/arrow.svg";
import logo from "../assets/images/logo.svg";
import btnBack from "../assets/icons/btnBack.svg";
<<<<<<< HEAD
import vector from "../assets/images/vector.svg";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import BannerCircle from "../components/BannerCircle";

import {
  getDestination,
  getOldDestination,
} from "../redux/actions/destination";
import { setPassenger } from "../redux/actions/stock";

export default function Landing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [getClass, setClass] = useState("");
  const [getForm, setForm] = useState({
    origin: "",
    destination: "",
    child: "",
    adult: "",
  });

  const { destination } = useSelector((state) => state);
  const { oldDestination } = useSelector((state) => state);
  const stock = Number(getForm.adult) + Number(getForm.child);

  useEffect(() => {
    dispatch(getDestination());
    document.title = `${process.env.REACT_APP_APP_NAME} | Explore`;
    window.scrollTo(0, 0);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOldDestination());
  }, [dispatch]);

  const onChange = (e, field) => {
    setForm({
      ...getForm,
      [field]: e.target.value,
    });
  };

  const onClick = (e) => {
    dispatch(setPassenger(getForm.adult, getForm.child));

    navigate(
      `/search?origin=${getForm.origin}&destination=${getForm.destination}&stock=${stock}&type=${getClass}`
    );
  };
=======
import btnPrev from "../assets/icons/previous.svg";
import vector from "../assets/images/vector.svg";
import Tokyo from "../assets/images/tokyo.jpg";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import CircleCard from "../components/CircleCard";

export default function Landing() {
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
  return (
    <>
      <Navbar />
      <div className="container-fluid home">
        <div className="row">
          <div className="col-md-8 col-sm-8">
            <div className="titleBox">
<<<<<<< HEAD
              <Slide>
=======
              <Slide left>
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
                <div className="boxOfTitle">
                  <h1 className="homeTitle">Find your</h1>
                  <h1 className="flightTitle">Flight</h1>
                </div>
                <p className="homeText">and explore the world with us</p>
              </Slide>
            </div>
            <img src={bgHome} className="bgImg" alt="Tokyo" />
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="boxOfMediumImg">
              <img src={bgHome} className="bgMediumImg" alt="Tokyo" />
              <Zoom bottom>
                <img src={object} alt="object" className="object" />
              </Zoom>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <Zoom triggerOnce duration={500}>
=======
        <Fade triggerOnce>
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
          <div className="boxOfCard">
            <h5 className="mediumText">Hey,</h5>
            <h4 className="largeText smMarginTop">Where you want to go?</h4>
            <div className="recently mMarginTop">
              <h5 className="textRecently">Recently Searched</h5>
              <img src={btnBack} alt="" className="btnNext" />
            </div>
            <div className="boxOfDestination">
              <p className="textFrom">From</p>
              <div className="row boxDetailDestination minMarginTop">
<<<<<<< HEAD
                <input
                  placeholder="starting"
                  className="inputDestination"
                  onChange={(e) => onChange(e, "origin")}
                />
=======
                <input placeholder="starting" className="inputDestination" />
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
                {/* <p className="textDestionation">Indonesia</p> */}
                {/* <div className="boxOfIcon"> */}
                <img src={iTransfer} alt="transfer" className="transfer" />
                {/* </div> */}
<<<<<<< HEAD
                <input
                  placeholder="destination"
                  className="inputDestination"
                  onChange={(e) => onChange(e, "destination")}
                />
=======
                <input placeholder="destination" className="inputDestination" />
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
                {/* <p className="textDestionation">Japan</p> */}
              </div>
            </div>

            <button className="btnSend">
              <img src={logo} alt="logo" />
              One way
            </button>
            <h5 className="actionTitle">How many person?</h5>
            <div className="boxOfAdult">
<<<<<<< HEAD
              <input
                type="number"
                className="person"
                placeholder="Child"
                onChange={(e) => onChange(e, "child")}
              />
              <input
                type="number"
                className="person"
                placeholder="Adult"
                onChange={(e) => onChange(e, "adult")}
              />
=======
              <input type="number" className="person" placeholder="Child" />
              <input type="number" className="person" placeholder="Adult" />
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
            </div>
            <h5 className="actionTitle">Which class do you want?</h5>
            <div className="boxOfRadio">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="actionRadio"
                  id="economy"
                  value="economy"
<<<<<<< HEAD
                  onChange={(e) => setClass(e.target.value)}
=======
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
                />
                <label className="form-check-label textRadio" htmlFor="economy">
                  Economy
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="actionRadio"
                  id="bussiness"
                  value="business"
<<<<<<< HEAD
                  onChange={(e) => setClass(e.target.value)}
=======
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
                />
                <label
                  className="form-check-label textRadio"
                  htmlFor="bussiness"
                >
                  Bussiness
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="actionRadio"
                  id="firstClass"
                  value="firstclass"
<<<<<<< HEAD
                  onChange={(e) => setClass(e.target.value)}
=======
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
                />
                <label
                  className="form-check-label textRadio"
                  htmlFor="firstClass"
                >
                  First class
                </label>
              </div>
            </div>
            <div>
<<<<<<< HEAD
              <button className="btnSearch" onClick={() => onClick()}>
=======
              <button className="btnSearch">
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
                SEARCH FLIGHT
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </Zoom>
=======
        </Fade>
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
        <div className="containerItems">
          <p className="textTrendings">TRENDING</p>
          <div className="tableTrendings">
            <h4 className="titleTrendings">Trending destinations</h4>
            <Link to="/" className="viewLink">
              View All
            </Link>
          </div>
<<<<<<< HEAD
          {/* <div className="trendingsBox"> */}
          <Slide>
            <Banner />
          </Slide>
          {/* </div> */}
=======
          <div className="trendingsBox">
            <div>
              <Slide left>
                <Card
                  alt="Tokyo"
                  destination="Tokyo"
                  country="Japan"
                  src={Tokyo}
                  totalAirlines="2"
                  price="Rp 500.000"
                />
              </Slide>
            </div>
          </div>
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
        </div>
        <div className="topContainer">
          <div className="boxTop">
            <img src={vector} alt="" className="vector" />
            <div className="row boxTopCard">
              <div className="col-sm-12 boxOfTop">
                <h5 className="titleOfTop">TOP 10</h5>
                <h3 className="textOfTop">Top 10 destinations</h3>
              </div>
              <div className="col-sm-12 containerCard">
                <div className="margin">
<<<<<<< HEAD
                  <Slide>
                    <BannerCircle />
                  </Slide>
                </div>
              </div>
=======
                  <Slide right>
                    <CircleCard src={Tokyo} title="Tokyo" />
                  </Slide>
                </div>
              </div>
              <div className="col-sm-12 containerBtn">
                <div className="boxOfBtn">
                  <button className="btnPrevious">
                    <img src={btnPrev} alt="" />
                  </button>
                  <button className="btnNextBlue">
                    <img src={btnBack} alt="" className="btnImg" />
                  </button>
                </div>
              </div>
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

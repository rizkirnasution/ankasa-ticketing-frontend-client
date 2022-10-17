import React from "react";
import "../assets/styles/home.css";
import { Link } from "react-router-dom";
import { Zoom, Slide, Fade } from "react-awesome-reveal";

import bgHome from "../assets/images/home_bg.jpg";
import object from "../assets/images/object.svg";
import iTransfer from "../assets/icons/transfer.svg";
import arrow from "../assets/icons/arrow.svg";
import logo from "../assets/images/logo.svg";
import btnBack from "../assets/icons/btnBack.svg";
import btnPrev from "../assets/icons/previous.svg";
import vector from "../assets/images/vector.svg";
import Tokyo from "../assets/images/tokyo.jpg";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import CircleCard from "../components/CircleCard";

export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="container-fluid home">
        <div className="row">
          <div className="col-md-8 col-sm-8">
            <div className="titleBox">
              <Slide left>
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
        <Fade triggerOnce>
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
                <input placeholder="starting" className="inputDestination" />
                {/* <p className="textDestionation">Indonesia</p> */}
                {/* <div className="boxOfIcon"> */}
                <img src={iTransfer} alt="transfer" className="transfer" />
                {/* </div> */}
                <input placeholder="destination" className="inputDestination" />
                {/* <p className="textDestionation">Japan</p> */}
              </div>
            </div>

            <button className="btnSend">
              <img src={logo} alt="logo" />
              One way
            </button>
            <h5 className="actionTitle">How many person?</h5>
            <div className="boxOfAdult">
              <input type="number" className="person" placeholder="Child" />
              <input type="number" className="person" placeholder="Adult" />
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
              <button className="btnSearch">
                SEARCH FLIGHT
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>
        </Fade>
        <div className="containerItems">
          <p className="textTrendings">TRENDING</p>
          <div className="tableTrendings">
            <h4 className="titleTrendings">Trending destinations</h4>
            <Link to="/" className="viewLink">
              View All
            </Link>
          </div>
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

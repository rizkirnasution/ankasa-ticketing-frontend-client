<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, NavbarToggler, Collapse, Nav } from "reactstrap";
import User from "../../src/assets/images/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getDetailUser } from "../redux/actions/user";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();
  const detailUser = useSelector((state) => {
    return state.detailUser;
  });
  const [isOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getDetailUser(localStorage.getItem("id"), navigate));
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    setPhoto(
      detailUser.isLoading === true ? (
        <h1>Loading</h1>
      ) : detailUser.isError === true ? (
        <h1>Error</h1>
      ) : !detailUser.data.photo ? (
        { User }
      ) : (
        detailUser.data.photo
      )
    );
  }, [detailUser.data.photo, detailUser.isError, detailUser.isLoading]);
=======
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, NavbarToggler, Collapse, Nav } from "reactstrap";
import User from "../../src/assets/images/user.png"

function App() {
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
  return (
    <nav
      className="auth navbar navbar-light bg-light"
      style={{
        display: "block",
        width: "100%",
      }}
    >
      <Navbar color="light" light expand="md">
        <Link to="/" className="navbar-brand">
          <div className="form-title">
            <div className="icon"></div>
            <div className="text">Ankasa</div>
          </div>
        </Link>
        <NavbarToggler
<<<<<<< HEAD
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
=======
        />
        <Collapse navbar>
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
          <Nav className="row mr-auto" navbar>
            <div className="form-search col-2">
              <div className="icon"></div>
              <input
                type="text"
                className="input"
                placeholder="Where you want to go?"
              />
            </div>
            <div className="form-page col-2">
              <Link className="navbar-brand" to="/search">
                <div className="text">Find Ticket</div>
              </Link>
<<<<<<< HEAD
              {token && (
                <Link className="navbar-brand" to="/mybooking">
                  <div className="text">My Booking</div>
                </Link>
              )}
            </div>
          </Nav>
          <div className="form-user">
            {!token ? (
              <Link to="/login" className="navbar-brand">
                Login
              </Link>
            ) : detailUser.isLoading === true ? (
              <h5>Loading</h5>
            ) : detailUser.isError === true ? (
              <h5>Error</h5>
            ) : (
=======
        
                <Link className="navbar-brand" to="/mybooking">
                  <div className="text">My Booking</div>
                </Link>
            
            </div>
          </Nav>
          <div className="form-user">
        
              <Link to="/login" className="navbar-brand">
                Login
              </Link>
           
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
              <>
                <div className="icon-message"></div>
                <div className="icon-notification"></div>
                <Link to="/profile">
                  <div>
                    <img
<<<<<<< HEAD
                      src={`${process.env.REACT_APP_API_URL}/${photo}`}
=======
                      src={User}
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
                      className="profile"
                      alt="profile"
                    />
                  </div>
                </Link>
              </>
<<<<<<< HEAD
            )}
=======
       
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
          </div>
        </Collapse>
      </Navbar>
    </nav>
  );
}

export default App;

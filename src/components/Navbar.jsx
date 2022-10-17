import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, NavbarToggler, Collapse, Nav } from "reactstrap";
import User from "../../src/assets/images/user.png"

function App() {
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
        />
        <Collapse navbar>
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
        
                <Link className="navbar-brand" to="/mybooking">
                  <div className="text">My Booking</div>
                </Link>
            
            </div>
          </Nav>
          <div className="form-user">
        
              <Link to="/login" className="navbar-brand">
                Login
              </Link>
           
              <>
                <div className="icon-message"></div>
                <div className="icon-notification"></div>
                <Link to="/profile">
                  <div>
                    <img
                      src={User}
                      className="profile"
                      alt="profile"
                    />
                  </div>
                </Link>
              </>
       
          </div>
        </Collapse>
      </Navbar>
    </nav>
  );
}

export default App;

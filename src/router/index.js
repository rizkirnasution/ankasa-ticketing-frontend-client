import React from "react";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "../pages/Profile";
import MyBooking from "../pages/MyBooking";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import SearchPage from "../pages/SearchPage";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  if (token) {
    return children;
  }
  return <Navigate to="/login" />;
}

function PublicRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return children;
  }
  return <Navigate to="/" />;
}
=======
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "../pages/Profile";
import MyBooking from "../pages/MyBooking";
import Login from "../pages/Login";
import Home from "../pages/Home"
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route
          path="/"
          element={
            // <PrivateRoute>
            <Home />
            //  </PrivateRoute>
          }
        />
        <Route path="/search" element={<SearchPage />} />
=======
      <Route
          path="/"
          element={
            // <PrivateRoute>
                <Home />
            //  </PrivateRoute>
          }
        />
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a

        <Route
          path="/mybooking"
          element={
            // <PrivateRoute>
<<<<<<< HEAD
            <MyBooking />
=======
                <MyBooking />
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
            //  </PrivateRoute>
          }
        />

<<<<<<< HEAD
        <Route path="/profile">
          <Route
            index
            element={
              // <PrivateRoute>
              <Profile />
              // </PrivateRoute>
            }
          />
        </Route>
        <Route
=======
        <Route
          path="/profile"
          element={
            // <PrivateRoute>
                <Profile />
            // </PrivateRoute>
          }
        />
          <Route
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
          path="/login"
          element={
            // <PublicRoute>
            <Login />
            // </PublicRoute>
          }
        />
<<<<<<< HEAD
        <Route
          path="/signup"
          element={
            // <PublicRoute>
            <Signup />
            // </PublicRoute>
          }
        />
=======
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
      </Routes>
    </BrowserRouter>
  );
}

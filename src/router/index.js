import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "../pages/Profile";
import MyBooking from "../pages/MyBooking";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import SearchPage from "../pages/SearchPage";
import TicketDetail from "../pages/TicketDetail";
import BookingDetail from "../pages/BookingDetail";

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

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // <PrivateRoute>
            <Home />
            //  </PrivateRoute>
          }
        />
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/detail"
          element={
            <PrivateRoute>
              <BookingDetail />
            </PrivateRoute>
          }
        />

        <Route
          path={"/ticket-detail/:id"}
          element={
            <PrivateRoute>
              <TicketDetail />
            </PrivateRoute>
          }
        />

        <Route
          path="/mybooking"
          element={
            <PrivateRoute>
              <MyBooking />
            </PrivateRoute>
          }
        />

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
          path="/login"
          element={
            // <PublicRoute>
            <Login />
            // </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            // <PublicRoute>
            <Signup />
            // </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import MyBooking from "../pages/MyBooking";
import Login from "../pages/Login";
import Home from "../pages/Home";

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

        <Route
          path="/mybooking"
          element={
            // <PrivateRoute>
            <MyBooking />
            //  </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            // <PrivateRoute>
            <Profile />
            // </PrivateRoute>
          }
        />
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
            <Login />
            // </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

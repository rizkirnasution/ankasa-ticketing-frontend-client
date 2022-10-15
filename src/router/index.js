import React from "react";
import Login from "../pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
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

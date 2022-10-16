import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "../pages/Profile";
import MyBooking from "../pages/MyBooking";

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
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

      </Routes>
    </BrowserRouter>
  );
}

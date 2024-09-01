import React from "react";
import "./Home.css";
import BookingForm from "../bookingForm/BookingForm";

function Home() {
  return (
    <div className="container-fluid main-body">
      <BookingForm />
    </div>
  );
}

export default Home;

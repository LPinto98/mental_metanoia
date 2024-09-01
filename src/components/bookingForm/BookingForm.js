import React, { useState } from "react";
import "./BookingForm.css";
import formGif from "../../photos/formPanel.gif";

function BookingForm() {
  const [attendeeName, setAttendeeName] = useState("");
  const [attendeeEmail, setAttendeeEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="booking_form">
      <div className="booking_form_left">
        <img src={formGif} alt="Form Panel Animation" />
      </div>
      <div className="booking_form_right">
        {!isSubmitted ? (
          <form onSubmit={handleBooking}>
            {/* Attendee's Name */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="attendeeName"
                placeholder="Your Full Name"
                value={attendeeName}
                onChange={(e) => setAttendeeName(e.target.value)}
                required
              />
              <label htmlFor="attendeeName">Your Full Name</label>
            </div>

            {/* Attendee's Email */}
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="attendeeEmail"
                placeholder="Email Address"
                value={attendeeEmail}
                onChange={(e) => setAttendeeEmail(e.target.value)}
                required
              />
              <label htmlFor="attendeeEmail">Email Address</label>
            </div>

            <button type="submit" className="btn btn-primary">
              Book Session
            </button>
          </form>
        ) : (
          <div id="schedule_form" className="calendly-container">
            <iframe
              src={`https://calendly.com/larissapinto98/60min?name=${encodeURIComponent(
                attendeeName
              )}&email=${encodeURIComponent(attendeeEmail)}`}
              width="100%"
              height="450px"
              frameBorder="0"
              title="Schedule Appointment"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingForm;

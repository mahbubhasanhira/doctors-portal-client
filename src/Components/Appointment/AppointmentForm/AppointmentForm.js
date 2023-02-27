import React from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AppointForm.css";

const AppointmentForm = (props) => {
  const bookingData = props.bookingData;
  const date = props.date;
  const modalHide = props.onHide;

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    if (data) {
      data.service = bookingData.doctors_categories;
      data.Status = "Not Visited";
      data.createdDate = new Date().toLocaleDateString();

      fetch("https://api-doctors-portal.onrender.com/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((success) => {
          if (success) {
            alert("Your Appointment successfully Created");
            modalHide();
          }
        });
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Title
        className="text-center text-brand pt-2"
        id="contained-modal-title-vcenter"
      >
        {bookingData.doctors_categories}
      </Modal.Title>
      <Modal.Body>
        <form
          className="pl-5 pr-5 booking_form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="input-group">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="form-control"
              ref={register({ required: true })}
            />
          </div>
          {errors.name && (
            <span style={{ color: "red" }}>This field is required</span>
          )}

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              ref={register({ required: true })}
            />
          </div>
          {errors.email && (
            <span style={{ color: "red" }}>This field is required</span>
          )}

          <div className="input-group">
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="form-control"
              ref={register({ required: true })}
            />
          </div>
          {errors.phone && (
            <span style={{ color: "red" }}>This field is required</span>
          )}

          <div className="input-group">
            <input
              name="appointmentDate"
              type="text"
              defaultValue={date.toDateString()}
              placeholder="Date"
              className="form-control"
              ref={register({ required: true })}
            />
          </div>
          {errors.date && (
            <span style={{ color: "red" }}>This field is required</span>
          )}

          <div className="row">
            <div className="input-group col-md-4">
              <select
                name="gender"
                className="custom-select"
                ref={register({ required: true })}
              >
                <option name="male" selected value="male">
                  Male
                </option>
                <option name="female" value="female">
                  Female
                </option>
                <option name="other" value="other">
                  Other
                </option>
              </select>
            </div>

            <div className="input-group col-md-4  pl-1 pr-1">
              <input
                name="age"
                type="number"
                placeholder="Age"
                className="w-100 d-block form-control"
                ref={register({ required: true })}
              />
              <br />
              {errors.age && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
            </div>

            <div className="input-group col-md-4">
              <input
                name="weight"
                type="number"
                placeholder="Weight"
                className="w-100 d-block form-control"
                ref={register({ required: true })}
              />
              <br />
              {errors.weight && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
            </div>
          </div>

          <div className="input-group">
            <button className="btn btn-brand ml-auto mt-1 pl-3 pr-3">
              Send
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AppointmentForm;

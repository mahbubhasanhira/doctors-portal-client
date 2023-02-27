import React, { useEffect, useState } from "react";
import loading from "../../../doctor-portal-resource/images/loading.gif";
import "./Doctor.css";
import DoctorsCard from "./DoctorsCard/DoctorsCard";
const Doctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://api-doctors-portal.onrender.com/getallDoctors")
      .then((res) => res.json())
      .then((doctors) => {
        if (doctors) {
          setDoctors(doctors);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="mb-5 pb-5">
      <h4 className="text-green text-center">Our Doctors</h4>
      <div className="container d-flex justify-content-center">
        <div className="row pt-2 d-flex align-items-center">
          {doctors.length > 0 ? (
            doctors.map((doctor) => (
              <DoctorsCard key={doctor._id} doctor={doctor} />
            ))
          ) : (
            <div className="col-lg-12 col-md-12 p-5">
              <div className="p-5 w-50 ml-auto mr-auto">
                <img className="img-fluid" src={loading} alt="" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Doctor;

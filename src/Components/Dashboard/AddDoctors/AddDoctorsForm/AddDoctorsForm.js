import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { useForm } from "react-hook-form";

const AddDoctorsForm = () => {
  const [file, setFile] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (file) {
      const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      if (userInfo) {
        if (userInfo.email) {
          const formData = new FormData();
          formData.append("name", data.name);
          formData.append("email", data.email);
          formData.append("phone", data.phone);
          formData.append("image", file);

          fetch(
            `https://api-doctors-portal.onrender.com/addDoctor?adminEmail=${userInfo.email}`,
            {
              method: "POST",
              body: formData,
            }
          )
            .then((response) => response.json())
            .then((data) => {
              if (data) {
                alert("Doctor Successfully Added by You");
                window.location.reload();
                setFile("");
              }
            })
            .catch((error) => {
              console.log(error);
              if (error) {
                alert("Opps!!!, There are some problem please try again");
              }
            });
        }
      }
    } else {
      alert("Please select Doctor Image");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="doctorsName">Doctors Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="doctorsName"
            placeholder="Doctors Name"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            name="phone"
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="Phone Number"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="customFile">Choose Photo</label>
          <br />
          <FileBase64
            id="customFile"
            multiple={false}
            onDone={(image_link) =>
              image_link.type.slice(0, 5) === "image"
                ? setFile(image_link.base64)
                : alert("Please Select Just Image")
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddDoctorsForm;

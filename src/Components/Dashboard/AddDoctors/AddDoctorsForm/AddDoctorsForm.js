import React, { useState } from 'react';

const AddDoctorsForm = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }   

    const handleChange = e =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('phone', info.phone); 
      
        fetch('http://localhost:4200/addDoctor', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          if(data){
              alert('Doctor Successfully Added');
          }
        })
        .catch(error => {
          console.error(error)
        })
    }

console.log(info, file);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="doctorsName">Doctors Name</label>
                    <input name='name' onChange={handleBlur} type="text" className="form-control" id="doctorsName" placeholder="Doctors Name"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input name='email' onChange={handleBlur} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label for="phoneNumber">Phone Number</label>
                    <input name='phone' onChange={handleBlur} type="text" className="form-control" id="phoneNumber" placeholder="Phone Number"/>
                </div>
                <div className="form-group">
                    <label for="customFile">Choose Photo</label><br/>
                    <input onChange={handleChange} type="file" className="" id='customFile' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddDoctorsForm;
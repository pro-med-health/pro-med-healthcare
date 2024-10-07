import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./Register.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    requirement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle registration logic
  };

  return (
    <div className="register-container">
      <div className="left-section">
        <h1 className="punchline">Your Health, Our Priority</h1>
        <p className="description">
          Get personalized care with our expert healthcare services tailored to
          your needs.
        </p>
        <img
          src="https://as2.ftcdn.net/v2/jpg/02/45/92/11/1000_F_245921195_8btMKM5TqLVUcxVhcJobvIn9HtAOhSTg.jpg" // Replace with your doctor's image URL
          alt="Doctor"
          className="doctor-image"
        />
      </div>
      <div className="register-form-section">
        <h2>Register Yourself</h2>
        <Form className="register-form" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone Number</Label>
            <Input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              type="textarea"
              name="address"
              id="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="requirement">Requirement</Label>
            <Input
              type="select"
              name="requirement"
              id="requirement"
              value={formData.requirement}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="doctorConsult">Doctor Consult</option>
              <option value="homeCareNurse">Home Care Nurse</option>
              <option value="physioTherapist">Physio Therapist</option>
              <option value="stomaCareNurse">Stoma Care Nurse</option>
            </Input>
          </FormGroup>
          <Button type="submit" className="btn-register">
            Register
          </Button>
        </Form>
        <div className="links">
          <p>
            Already registered?{" "}
            <a href="/login" className="login-link">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

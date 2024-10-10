import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./Login.scss"; // Import the SCSS file
import Footer from "../Footer/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log({ email, password });
  };

  return (
    <>
      <div className="login-container">
        <div className="left-section">
          <h1 className="punchline">Your Health, Our Priority</h1>
          <p className="description">
            Connect with the best healthcare providers for all your medical
            needs.
          </p>

          <img
            src="https://as2.ftcdn.net/v2/jpg/02/45/92/11/1000_F_245921195_8btMKM5TqLVUcxVhcJobvIn9HtAOhSTg.jpg" // Replace with your doctor's image URL
            alt="Doctor"
            className="doctor-image"
          />
        </div>
        <Form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <Button type="submit" className="btn-login">
            Login
          </Button>
          <div className="links">
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
            <div className="register-link">
              <a href="/register">Don't have an account? Register</a>
            </div>
          </div>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default Login;

import React from "react";
import "./ContactUs.scss";
import Footer from "../Footer/Footer";
function ContactUs() {
  return (
    <>
      <div className="contactusBody">
        <div className="form-container">
          <h2 className="form-title">Fill Out This Form</h2>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfrmKYQ5sTwP_7-OurVeJUBo3u6h6XphMCb9v-CPUqBJj5KTg/viewform?embedded=true"
            width="100%"
            height="1017"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Google Form"
          >
            Loading…
          </iframe>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;

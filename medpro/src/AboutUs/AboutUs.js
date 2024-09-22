import React from "react";
import { Card, CardBody, CardTitle, CardText, Row, Col } from "reactstrap";
import "./AboutUs.scss"; // Add this for custom styles
const doctors = [
  {
    name: "Dr. Sarah Johnson",
    info: "Cardiologist with 10 years of experience.",
    img: "https://imgs.search.brave.com/eZOUGalzfoACikHWpvzRAu1cDLCepvCBXdc1LCNodHk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/b2N0b3Itb2ZmZXJp/bmctbWVkaWNhbC10/ZWxlY29uc3VsdGF0/aW9uXzIzLTIxNDkz/MjkwMDcuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
  },
  {
    name: "Dr. James Patel",
    info: "Orthopedic Surgeon with 8 years of experience.",
    img: "https://imgs.search.brave.com/sYGCbfR60RaJh6KPexJ6kQXSo8ar5mYyRJtyeeG5kFc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tZW4tZG9jdG9y/LWltYWdlLXdoaXRl/LWJhY2tncm91bmQt/cGhvdG9fOTQzODk4/LTE0Nzg2LmpwZz9z/aXplPTYyNiZleHQ9/anBn",
  },
  {
    name: "Dr. Emily Davis",
    info: "Dermatologist specializing in skin conditions.",
    img: "https://imgs.search.brave.com/RgOflUsQCs-MfNi5ObXEY8g0nLC0qwwhJYXqgpTxEe0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by95b3VnLWRvY3Rv/ci1tYW4tcHJvZmls/ZS1waWN0dXJfMTA2/Mzk4NS0yNTAzMi5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw",
  },
  {
    name: "Dr. John Williams",
    info: "Neurologist focused on brain and spine health.",
    img: "https://imgs.search.brave.com/he8KNb0ndP03sDftb-zT-eXeeLKarXomlGbatIpVS2w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/My8xNC8wMy8yMC93/b21hbi0yMTQxODA4/XzY0MC5qcGc",
  },
  {
    name: "Dr. Maria Garcia",
    info: "Pediatrician caring for infants and children.",
    img: "https://leman-clinic.ch/wp-content/uploads/2018/11/02.jpg",
  },
  {
    name: "Dr. Ahmed Khan",
    info: "General Surgeon with 15 years of experience.",
    img: "https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg?w=1060",
  },
  {
    name: "Dr. Rebecca Lee",
    info: "Obstetrician and Gynecologist.",
    img: "https://i.pinimg.com/originals/53/c4/22/53c422cefbdddd5d74d1a089795068d0.jpg",
  },
  {
    name: "Dr. Carlos Gonzalez",
    info: "Endocrinologist with a focus on diabetes.",
    img: "https://imgs.search.brave.com/eZOUGalzfoACikHWpvzRAu1cDLCepvCBXdc1LCNodHk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/b2N0b3Itb2ZmZXJp/bmctbWVkaWNhbC10/ZWxlY29uc3VsdGF0/aW9uXzIzLTIxNDkz/MjkwMDcuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
  },
  {
    name: "Dr. Laura Smith",
    info: "Oncologist treating cancer patients.",
    img: "https://imgs.search.brave.com/eZOUGalzfoACikHWpvzRAu1cDLCepvCBXdc1LCNodHk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/b2N0b3Itb2ZmZXJp/bmctbWVkaWNhbC10/ZWxlY29uc3VsdGF0/aW9uXzIzLTIxNDkz/MjkwMDcuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
  },
  {
    name: "Dr. Michael Brown",
    info: "Urologist specializing in urinary tract disorders.",
    img: "https://imgs.search.brave.com/eZOUGalzfoACikHWpvzRAu1cDLCepvCBXdc1LCNodHk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/b2N0b3Itb2ZmZXJp/bmctbWVkaWNhbC10/ZWxlY29uc3VsdGF0/aW9uXzIzLTIxNDkz/MjkwMDcuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
  },
];

function AboutUs() {
  return (
    <>
      {/* <div>About Us Page</div> */}
      {/* <h6>
        Here's a powerful line to describe doctors: "Guardians of health,
        doctors blend science with compassion, dedicating their lives to healing
        and saving others."
      </h6> */}
      <div className="container mt-5">
        <Row>
          {doctors.map((doctor, index) => (
            <Col md="4" sm="6" className="mb-4" key={index}>
              <Card className="doctor-card">
                <div className="card-img-wrapper">
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="doctor-img"
                  />
                </div>
                <CardBody>
                  <CardTitle tag="h5">{doctor.name}</CardTitle>
                  <CardText>{doctor.info}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default AboutUs;

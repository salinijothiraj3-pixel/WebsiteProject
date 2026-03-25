import React, { useState } from "react";
import Fashion from "../images/Fashion.jss.webp";
import { Modal, Button, Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Topbarr() {
  const [show, setShow] = useState(false);
  const [formType, setFormType] = useState("");

  const handleShow = (type) => {
    setFormType(type);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${formType} submitted successfully`);
    setShow(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">

          <Link className="navbar-brand" to="/">
            <img src={Fashion} alt="Fashion" width="50" height="50" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-4">

              <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? "nav-link fw-bold text-primary" : "nav-link"} to="/home">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? "nav-link fw-bold text-primary" : "nav-link"} to="/saree">
                  Sarees
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? "nav-link fw-bold text-primary" : "nav-link"} to="/kurtis">
                  Kurtis
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? "nav-link fw-bold text-primary" : "nav-link"} to="/nightwears">
                  Night Wears
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? "nav-link fw-bold text-primary" : "nav-link"} to="/westerntops">
                  Western Tops
                </NavLink>
              </li>

            </ul>

            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary" onClick={() => handleShow("Signin")}>
                Signin
              </button>

              <button className="btn btn-outline-primary" onClick={() => handleShow("Create Account")}>
                Create Account
              </button>

              <button className="btn btn-outline-primary" onClick={() => handleShow("Contact Us")}>
                Contact Us
              </button>

              <button className="btn btn-outline-primary" onClick={() => handleShow("Buy Now")}>
                Buy Now
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* MODAL */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{formType}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            {/* SIGN IN FORM */}
            {formType === "Signin" && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" required />
                </Form.Group>

                <Form.Check type="checkbox" label="Show Password" className="mb-3" />
              </>
            )}

            {/* CREATE ACCOUNT FORM */}
            {formType === "Create Account" && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Birthdate</Form.Label>
                  <Form.Control type="date" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Preferred Username</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>

                <Form.Label>Receive Updates?</Form.Label>
                <div>
                  <Form.Check inline label="Yes" type="radio" name="updates" />
                  <Form.Check inline label="No" type="radio" name="updates" />
                </div>
              </>
            )}

            {/* CONTACT FORM */}
            {formType === "Contact Us" && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} required />
                </Form.Group>
              </>
            )}

            {/* BUY NOW FORM */}
            {formType === "Buy Now" && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Shipping Address</Form.Label>
                  <Form.Control type="text" placeholder="Address line 1" className="mb-2" required />
                  <Form.Control type="text" placeholder="Address line 2" className="mb-2" />
                  <Form.Control type="text" placeholder="City" className="mb-2" required />
                  <Form.Control type="text" placeholder="Region" className="mb-2" required />
                  <Form.Control type="text" placeholder="Postal Code" required />
                </Form.Group>
              </>
            )}

            <Button type="submit" className="w-100">
              Submit
            </Button>

          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Topbarr;

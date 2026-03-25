import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">

          {/* BRAND INFO */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">Fashion Store</h4>
            <p className="small text-muted">
              Discover the latest trends in Sarees, Kurtis, Western wear and more.
              Quality fashion at affordable prices.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link className="text-decoration-none text-light" to="/home">Home</Link></li>
              <li><Link className="text-decoration-none text-light" to="/saree">Sarees</Link></li>
              <li><Link className="text-decoration-none text-light" to="/kurtis">Kurtis</Link></li>
              <li><Link className="text-decoration-none text-light" to="/westerntops">Western Tops</Link></li>
              <li><Link className="text-decoration-none text-light" to="/testimonials">Testimonials</Link></li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3 mt-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-4"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-4"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* COPYRIGHT */}
        <div className="text-center pb-3 small">
          © 2026 Fashion Store. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

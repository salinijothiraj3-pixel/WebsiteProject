import React, { useState } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "../images/top1.webp";
import img2 from "../images/top2.webp";
import img3 from "../images/top3.webp";
import img4 from "../images/top4.webp";
import img5 from "../images/top5.webp";
import img6 from "../images/top6.webp";
import img7 from "../images/top7.webp";
import img8 from "../images/top8.webp";
import img9 from "../images/top9.webp";

export default function Cardsec() {

  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const [size, setSize] = useState("");
  const [success, setSuccess] = useState(false);

  const cards = [
    { title: "WesternTops1", text: "TOPLOT Women's Western Stylish Trendy Oversized Shirt", WesternTop: img1, price: 510 },
    { title: "WesternTops2", text: "Elyraa Women's Western Style Printed Half Sleeve Top", WesternTop: img2, price: 999 },
    { title: "WesternTops3", text: "Bollyclues Women's Printed Rayon Shirt Top for Women", WesternTop: img3, price: 1020 },
    { title: "WesternTops4", text: "ICW Women Knitted Rhinestone Embellised Mesh Crop Top", WesternTop: img4, price: 1129 },
    { title: "WesternTops5", text: "Impression Fab Women's Solid Long Sleeve Crop Top", WesternTop: img5, price: 450 },
    { title: "WesternTops6", text: "Twenty Dresses Floral V Neck Wrap Crop Top", WesternTop: img6, price: 1520 },
    { title: "WesternTops7", text: "Rigo Women's V Neck Rib Knit Slim Fit Top", WesternTop: img7, price: 1650 },
    { title: "WesternTops8", text: "Women's Trendy Off-Shoulder Long Sleeve Top", WesternTop: img8, price: 1255 },
    { title: "WesternTops9", text: "ICW Women's French Retro Style Floral Top", WesternTop: img9, price: 1300 }
  ];

  const handleBuyNow = (card) => {
    setSelectedCard(card);
    setQuantity(1);
    setName("");
    setAddress("");
    setPayment("");
    setSize("");
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setShow(false);
      setSelectedCard(null);
    }, 2000);
  };

  return (
    <>
      {success && (
        <Alert variant="success" className="text-center">
          Ordered Successfully ✅
        </Alert>
      )}

      <div className="container mt-4">
        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body text-center">

                  <h5>{card.title}</h5>

                  {/* ✅ DESCRIPTION TEXT ADDED */}
                  <p className="text-muted small">
                    {card.text}
                  </p>

                  <img
                    src={card.WesternTop}
                    width="150"
                    alt={card.title}
                  />

                  <h6 className="text-success mt-2">
                    ₹ {card.price}
                  </h6>

                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => handleBuyNow(card)}
                  >
                    Buy Now
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Buy Now</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedCard && (
            <Form onSubmit={handleSubmit}>

              <Form.Group className="mb-2">
                <Form.Label>Product Name</Form.Label>
                <Form.Control value={selectedCard.title} disabled />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Description</Form.Label>
                <Form.Control value={selectedCard.text} disabled />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Product Price</Form.Label>
                <Form.Control value={`₹ ${selectedCard.price}`} disabled />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Customer Address</Form.Label>
                <Form.Control
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Payment Mode</Form.Label>
                <Form.Select
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  <option>Cash on Delivery</option>
                  <option>UPI</option>
                  <option>Card</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Size</Form.Label>
                <Form.Select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </Form.Group>

              <Button type="submit" className="w-100 mt-2">
                Place Order
              </Button>

            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

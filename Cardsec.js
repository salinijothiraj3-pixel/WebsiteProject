import React, { useState } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "../images/sarees.jff.webp";
import img2 from "../images/saree1.jff.webp";
import img3 from "../images/saree2.jff - Copy.webp";
import img4 from "../images/saree3.jff - Copy.webp";
import img5 from "../images/saree4.jff.webp";
import img6 from "../images/saree5.jff.jpg";
import img7 from "../images/saree6.jff.webp";
import img8 from "../images/saree9.jff.webp";
import img9 from "../images/saree8.jff.webp";

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
    { title: "Saree1", text: "Saree Mall Sequinned Net Sarees", saree: img1, price: 510 },
    { title: "Saree2", text: "Saree Mall Blue Embroidered Saree With Unstitched Blouse", saree: img2, price: 999 },
    { title: "Saree3", text: "Saree Mall Floral Sequinned Pure Georgette Sarees", saree: img3, price: 1020 },
    { title: "Saree4", text: "KASEE Women's Textured Art Silk Saree", saree: img4, price: 1129 },
    { title: "Saree5", text: "Chaand Party Wear Saree With Readymade Blouse", saree: img5, price: 450 },
    { title: "Saree6", text: "Satrani Women's Silk Weaving Saree", saree: img6, price: 1520 },
    { title: "Saree7", text: "Mohey Glistening Light Pink Saree for Women", saree: img7, price: 1650 },
    { title: "Saree8", text: "Odette Women's Embroidered Georgette Saree", saree: img8, price: 1255 },
    { title: "Saree9", text: "Sidhidata Women's Digital Printed Saree", saree: img9, price: 1300 }
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
          Order placed successfully ✅
        </Alert>
      )}

      {/* PRODUCT CARDS */}
      <div className="container mt-4">
        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5>{card.title}</h5>

                  {/* ✅ TEXT ADDED HERE */}
                  <p className="text-muted small">{card.text}</p>

                  <img
                    src={card.saree}
                    alt={card.title}
                    width="150"
                    className="my-2"
                  />

                  <h6 className="text-success">₹ {card.price}</h6>

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

      {/* BUY NOW MODAL */}
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
                <Form.Label>Product Price</Form.Label>
                <Form.Control value={`₹ ${selectedCard.price}`} disabled />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Customer Address</Form.Label>
                <Form.Control value={address} onChange={(e) => setAddress(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Payment Mode</Form.Label>
                <Form.Select value={payment} onChange={(e) => setPayment(e.target.value)} required>
                  <option value="">Select</option>
                  <option>Cash on Delivery</option>
                  <option>UPI</option>
                  <option>Card</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Size</Form.Label>
                <Form.Select value={size} onChange={(e) => setSize(e.target.value)} required>
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

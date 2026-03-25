import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import img1 from "../images/top1.webp";
import img2 from "../images/top2.webp";
import img3 from "../images/top3.webp";
import img4 from "../images/top4.webp";
import img5 from "../images/top5.webp";
import img6 from "../images/top6.webp";

export default function SareeShop() {

  // 🔹 category state
  const [category, setCategory] = useState("all");

  // 🔹 all products
  const products = [
    { id: 1, name: "Saree 1", price: 510, image: img1, category: "saree" },
    { id: 2, name: "Saree 2", price: 999, image: img2, category: "saree" },
    { id: 3, name: "Saree 3", price: 1020, image: img3, category: "saree" },

    { id: 4, name: "Kurti 1", price: 650, image: img4, category: "kurti" },
    { id: 5, name: "Night Wear 1", price: 450, image: img5, category: "night" },
    { id: 6, name: "Western Top 1", price: 799, image: img6, category: "western" }
  ];

  // 🔹 filtering logic
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((item) => item.category === category);

  return (
    <Container className="mt-4">

      {/* ✅ Navbar Buttons */}
      <div className="text-center mb-4">
        <Button className="m-2" onClick={() => setCategory("all")}>Home</Button>
        <Button className="m-2" onClick={() => setCategory("saree")}>Sarees</Button>
        <Button className="m-2" onClick={() => setCategory("kurti")}>Kurtis</Button>
        <Button className="m-2" onClick={() => setCategory("night")}>Night Wears</Button>
        <Button className="m-2" onClick={() => setCategory("western")}>Western Tops</Button>
      </div>

      {/* ✅ Product Cards */}
      <Row>
        {filteredProducts.map((item) => (
          <Col md={4} className="mb-4" key={item.id}>
            <Card className="text-center shadow-sm">
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>₹ {item.price}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
}

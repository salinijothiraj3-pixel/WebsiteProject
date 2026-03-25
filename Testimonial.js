import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Testimonial() {

  const testimonials = [
    {
      name: "Anitha R",
      product: "Saree Collection",
      review:
        "Quality romba nalla irundhuchu. Saree exactly image maadhiriye vandhuchu. Very satisfied!",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Priya S",
      product: "Western Tops",
      review:
        "Stylish tops, perfect fitting. Delivery also fast-aa vandhuchu.",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Divya K",
      product: "Kurtis",
      review:
        "Material soft-aa irukku. Office wear-ku perfect. Price um reasonable.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Meena P",
      product: "Nightwear",
      review:
        "Comfortable night suits. Daily use-ku best. Will order again!",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Lakshmi V",
      product: "Party Wear Sarees",
      review:
        "Party-ku vaanginen, ellarum super-nu sonnaanga. Thank you!",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Kavitha M",
      product: "Western Wear",
      review:
        "Trendy designs and good stitching quality. Worth for money.",
      rating: "⭐⭐⭐⭐"
    }
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">What Our Customers Say</h2>

      <Row>
        {testimonials.map((item, index) => (
          <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold">
                  {item.name}
                </Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                  Purchased: {item.product}
                </Card.Subtitle>

                <Card.Text>
                  “{item.review}”
                </Card.Text>

                <div className="text-warning">
                  {item.rating}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

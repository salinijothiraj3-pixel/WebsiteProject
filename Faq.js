import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Faq() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions (FAQ)</h2>

      <Accordion defaultActiveKey="0" flush>

        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What types of fashion products do you sell?
          </Accordion.Header>
          <Accordion.Body>
            We offer a wide range of fashion products including Sarees,
            Kurtis, Western Tops, Nightwear, and Party Wear collections.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Are the product images real?
          </Accordion.Header>
          <Accordion.Body>
            Yes, all product images shown on our website are real images
            of the actual products. Slight color variations may occur due
            to lighting or screen resolution.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What sizes are available?
          </Accordion.Header>
          <Accordion.Body>
            Sizes generally range from S, M, L, and XL. Available sizes
            are mentioned on each product’s Buy Now page.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            What payment methods do you accept?
          </Accordion.Header>
          <Accordion.Body>
            We accept Cash on Delivery (COD), UPI payments, Debit Cards,
            and Credit Cards.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            How long does delivery take?
          </Accordion.Header>
          <Accordion.Body>
            Delivery usually takes 3–7 working days depending on your
            location.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>
            Can I return or exchange a product?
          </Accordion.Header>
          <Accordion.Body>
            Yes, we offer easy returns and exchanges within 7 days of
            delivery, provided the product is unused and in original
            condition.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            Is my personal information safe?
          </Accordion.Header>
          <Accordion.Body>
            Absolutely. We value your privacy and ensure all your personal
            and payment details are secure.
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </Container>
  );
}

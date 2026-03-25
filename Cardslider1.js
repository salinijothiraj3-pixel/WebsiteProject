import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../images/night1.webp";
import img2 from "../images/night2.webp";
import img3 from "../images/night3.webp";
import img4 from "../images/night4.webp";
import img5 from "../images/night5.webp";
import img6 from "../images/night6.webp";
import img7 from "../images/night7.webp";
import img8 from "../images/night8.webp";
import img9 from "../images/night9.webp";

export default function Cardslider() {
  const [showForm, setShowForm] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [product, setProduct] = useState(null);

  const cards = [
    { title: "Nightwear1", text: "Olive Muslin Pyjama Set", Nightwear: img1, price: 520 },
    { title: "Nightwear2", text: "Sweet Calm Pyjama Set", Nightwear: img2, price: 459 },
    { title: "Nightwear3", text: "Bloom Whisper Pyjama Set", Nightwear: img3, price: 399 },
    { title: "Nightwear4", text: "Women's 3 Piece Set Night Suit", Nightwear: img4, price: 329 },
    { title: "Nightwear5", text: "Printed Rayon Night Suit", Nightwear: img5, price: 450 },
    { title: "Nightwear6", text: "Contrast Piping Pyjama Set", Nightwear: img6, price: 520 },
    { title: "Nightwear7", text: "Striped Stylish Night Suit", Nightwear: img7, price: 599 },
    { title: "Nightwear8", text: "Cotton Pointelle Pyjamas", Nightwear: img8, price: 455 },
    { title: "Nightwear9", text: "Winter Warm Night Suit", Nightwear: img9, price: 425 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
    ],
  };

  // Buy Now click
  const openBuyNow = (item, e) => {
    e.stopPropagation(); // ❗ important
    setProduct(item);
    setShowForm(true);
  };

  // Place Order
  const placeOrder = (e) => {
    e.preventDefault();
    setSuccessMsg("Order placed successfully ✅");
    e.target.reset();

    setTimeout(() => {
      setSuccessMsg("");
      setShowForm(false);
      setProduct(null);
    }, 2000);
  };

  return (
    <div
      className="container mt-5"
      onClick={() => {
        if (showForm) {
          setShowForm(false);
          setProduct(null);
        }
      }}
    >
      {/* SUCCESS MESSAGE */}
      {successMsg && (
        <div className="alert alert-success text-center">
          {successMsg}
        </div>
      )}

      {/* SLIDER */}
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="p-2">
            <div className="card h-100 text-center">
              <div className="card-body d-flex flex-column">
                <h5>{card.title}</h5>

                <img
                  src={card.Nightwear}
                  alt={card.title}
                  height={120}
                  width={120}
                />

                <p>{card.text}</p>
                <h6 className="text-success">₹ {card.price}</h6>

                <button
                  className="btn btn-primary mt-auto"
                  onClick={(e) => openBuyNow(card, e)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* BUY NOW FORM – Buy Now click pannina mattum */}
      {showForm && product && (
        <div
          className="card mt-4 p-3"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h4>Buy Now</h4>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => {
                setShowForm(false);
                setProduct(null);
              }}
            >
              ✖
            </button>
          </div>

          <form onSubmit={placeOrder}>
            <input className="form-control mb-2" placeholder="Customer Name" required />

            <textarea
              className="form-control mb-2"
              placeholder="Customer Address"
              required
            />

            <select className="form-control mb-2" required>
              <option value="">Payment Mode</option>
              <option>Cash on Delivery</option>
              <option>UPI</option>
              <option>Card</option>
            </select>

            <input className="form-control mb-2" value={product.title} readOnly />
            <input className="form-control mb-2" value={`₹ ${product.price}`} readOnly />

            <input
              className="form-control mb-2"
              type="number"
              placeholder="Quantity"
              required
            />

            <select className="form-control mb-2" required>
              <option value="">Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>

            <button className="btn btn-success w-100">
              Place Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

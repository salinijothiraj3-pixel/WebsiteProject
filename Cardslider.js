import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../images/kurti1.jff.webp";
import img2 from "../images/kurti2.jff.webp";
import img3 from "../images/kurti3.jff.webp";
import img4 from "../images/kurti4.jpg";
import img5 from "../images/kurti5.jpg";
import img6 from "../images/kurti6.webp";
import img7 from "../images/kurti7.webp";
import img8 from "../images/kurti8.webp";
import img9 from "../images/kurti9.jpg";

export default function Cardslider() {
  const [showForm, setShowForm] = useState(false);
  const [product, setProduct] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");

  const cards = [
    { title: "kurti1", text: "ANNI DESIGNER Women's Rayon Blend Solid Straight Kurta with Pant & Dupatta", kurti: img1, price: 520 },
    { title: "kurti2", text: "GoSriKi Women's Rayon Viscose Anarkali Printed Kurta with Pant & Dupatta", kurti: img2, price: 859 },
    { title: "kurti3", text: "Indo Era Women's Floral Embroidered Thread Work Anarkali Kurta", kurti: img3, price: 999 },
    { title: "kurti4", text: "24 Carat Suit Women's Roman Silk Straight Cut Kurti Pant with Dupatta Set", kurti: img4, price: 329 },
    { title: "kurti5", text: "Traditional Indian Kurta Set with Dupatta", kurti: img5, price: 450 },
    { title: "kurti6", text: "Shagufta Block Printed Cotton Kurti", kurti: img6, price: 1520 },
    { title: "kurti7", text: "Stylish Kurtis & Kurtas | Libas", kurti: img7, price: 999 },
    { title: "kurti8", text: "Stylish Kurtis & Kurtas | Janasya", kurti: img8, price: 1055 },
    { title: "kurti9", text: "Fancy Women Frock Kurti Long Gown", kurti: img9, price: 1115 },
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
    e.stopPropagation(); // important
    setProduct(item);
    setShowForm(true);
  };

  // Place order
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

                <img src={card.kurti} alt={card.title} height={120} width={120} />

                <p>{card.text}</p>
                <h6 className="text-success fw-bold">₹ {card.price}</h6>

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
            <textarea className="form-control mb-2" placeholder="Customer Address" required />

            <select className="form-control mb-2" required>
              <option value="">Payment Mode</option>
              <option>Cash on Delivery</option>
              <option>UPI</option>
              <option>Card</option>
            </select>

            <input className="form-control mb-2" value={product.title} readOnly />
            <input className="form-control mb-2" value={`₹ ${product.price}`} readOnly />

            <input type="number" className="form-control mb-2" placeholder="Quantity" required />

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

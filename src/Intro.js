import React from 'react'
import "./Intro.css";
export default function Intro() {
  return (
    <>
    <div className="navbar">
        <div className="nav-links">
          <div>
            <a href="#" className="nav-link">
              Home
            </a>
          </div>
          <div>
            <a href="#" className="nav-link">
              About
            </a>
          </div>
          <div>
            <a href="#" className="nav-link">
              Contact
            </a>
          </div>
        </div>

        <div className="logo">
          <h1 className="landing">Landing</h1>
        </div>

        <div className="navbar-button">
          <button type="button" className="buy-button">
            Buy Now
          </button>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content">

          <h1 className="intro">Introduce Your Product Quickly & Effectively</h1>
          <h2 className="intro-content"><span className="intro-content-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</span><br/> <br/>
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</h2>
          <button type="button" className="purchase-button">
            Purchase UI Kit
          </button> 
          <button type="button" className="learnmore-button">
            Learn More
          </button>
        </div>

        <div className="designer-img">
          <img src="../media/designer_1.jpg" alt="designer" />
        </div>
      </div>
    </>
  )
}

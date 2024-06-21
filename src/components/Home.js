import React from "react";
import pic1 from "./pic1.avif";
import pic2 from "./pic2.jpeg";
import pic3 from "./pic3.gif";
const Home = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={pic2}
              className="d-block w-100"
              alt="..."
              style={{ height: "40rem",opacity:"0.9" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={{fontSize:"40px",color:"darkblue"}}>
                In today's fast-paced academic environment, time is a valuable
                resource. Students often face the tedious task of taking
                pictures of lengthy notes and sending them to friends, leading
                to numerous inefficiencies. NoteVault emerges as a powerful
                solution to this problem, transforming how students share and
                access educational resources.
              </h2>
              <h1>Work hard and make it happen</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={pic1}
              className="d-block w-100"
              alt="..."
              style={{ height: "40rem" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-dark">Hold on!Stay Positive</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={pic3}
              className="d-block w-100"
              alt="..."
              style={{ height: "40rem" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-dark">Remember,Why you started ?</h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import "./App1.css";
import Rating from "./Rating.js";
const About = () => {
  return (
    <div className="App2">
      <div className="container my-3" style={{ backgroundColor: "lightblue" }}>
        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-primary">VISION</h5>
                <p class="card-text">
                  Our mission is to empower individuals and organizations to
                  capture, organize, and share their knowledge effectively
                  through an intuitive, seamless, and feature-rich notes-making
                  platform. Core Values Simplicity: Deliver a user-friendly
                  experience that requires minimal learning curve. Productivity:
                  Enhance users' productivity by offering tools that streamline
                  the notes-making process. Accessibility: Ensure the platform
                  is accessible across all devices and platforms. Collaboration:
                  Foster a collaborative environment where users can easily
                  share and work on notes together. Customization: Provide
                  extensive customization options to cater to diverse user
                  needs. Security: Prioritize the privacy and security of user
                  data.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-primary">WHAT WE OFFER!</h5>
                <p class="card-text">
                  Our notes-providing website will offer a comprehensive suite
                  of features designed to enhance user productivity and
                  collaboration. The platform will boast an intuitive user
                  interface that is clean, modern, and easy to navigate,
                  ensuring a seamless user experience across desktop, mobile,
                  and web applications.Collaboration will be at the forefront,
                  with real-time collaboration, commenting, and sharing options
                  to facilitate teamwork. The integration of task management
                  tools will enable users to manage to-do lists and tasks
                  directly within the platform.Overall, these features will
                  provide a robust and versatile platform for capturing,
                  organizing, and sharing knowledge effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Key features*/}
      <h1 className="text-center text-primary text-bold">Key Features</h1>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Centralized Resource Sharing
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Students can upload their notes
              once and have them accessible for a lifetime. This eliminates the
              repetitive process of taking and sending pictures. 
              By centralizing notes on NoteVault, sharing becomes as simple as
              providing a link, saving considerable time and effort.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Organized and Searchable Database
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
            Notes are organized into categories, making it
              easy to find specific topics or subjects.
              Powerful search tools allow users to quickly locate the notes they
              need, enhancing study efficiency.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >Access Anytime, Anywhere</button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">Being a web platform, NoteVault ensures that notes are accessible from any device with an internet connection, providing flexibility for students on the go.
            Options for downloading notes for offline access ensure that students can study without interruption.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Collaboration and Community
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
             NoteVault encourages collaboration,
              allowing students to contribute and share notes, fostering a
              community of shared learning.Notes can
              be reviewed and rated by peers, ensuring high-quality and reliable
              resources.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Time Management
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
             With all resources in one place,
              students can plan their studies more effectively, dedicating more
              time to learning rather than administrative tasks.
            </div>
          </div>
        </div>
      </div>

      {/*Testimonials*/}
      <h1 className="text-center text-primary text-bold" style={{padding:"5px"}}>Testimonials</h1>
      <div class="row" style={{ marginLeft: "23px" }}>
        <div class="col-md-4">
          <div
            class="card card-hover"
            style={{
              width: "23rem",
              backgroundColor: "#333399",
              color: "white",
            }}
          >
            <div class="card-body">
              <h5 class="card-title">Akshat Jain</h5>
              <p class="card-text">
                <p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </p>
                It is really very helpful.No doubt,It isbest to go ahead with.It
                makes task very easy. It helped me a lot during days when I was
                very sick and unable to go to classes.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div
            class="card card-hover"
            style={{
              width: "23rem",
              backgroundColor: "#333399",
              color: "white",
              marginLeft: "0px",
            }}
          >
            <div class="card-body">
              <h5 class="card-title">Akshita Mehar</h5>
              <p class="card-text">
                <p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </p>
                I feel it really informative.It has resources of all the subject
                taught in class.Many times,it become difficult for us to share
                so many notes with my friends.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div
            class="card card-hover"
            style={{
              width: "23rem",
              backgroundColor: "#333399",
              color: "white",
            }}
          >
            <div class="card-body">
              <h5 class="card-title">Rishi Yadav</h5>
              <p class="card-text">
                <p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </p>
                I am very thankful to this website.This is real-problem solving
                web application.This is something like a stick which helps us to
                not to drew.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Footer*/}
       
      <footer className="footer my-4">
      <h5>Follow us:</h5>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-facebook list" style={{ color: "white" }}></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-x-twitter list" style={{ color: "white" }}></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-instagram list" style={{ color: "white" }}></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-linkedin list" style={{ color: "white" }}></i>
        </a>
          </div>
          <p>&copy; 2024 NoteVault. All rights reserved.</p>
          
    </footer>

    </div>
  );
};

export default About;

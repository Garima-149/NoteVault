import React from "react";

import "./Resource.css";
function Resource() {
  return (
    <div className="resource">
      <h1 className="text-center" style={{ fontSize: "44px" }}>
        Resource
      </h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item  " >
          <h2 class="accordion-header ">
            <button
              class="accordion-button mx-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              CSE <i class="fa-solid fa-laptop"></i>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <div
                      class="card"
                      style={{ width: "18rem", backgroundColor: "#ffff84" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">Semester 1</h5>

                        <a href="#" class="btn btn-primary">
                          Click
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div
                      class="card"
                      style={{ width: "18rem", backgroundColor: "#ffff84" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">Semester 2</h5>

                        <a href="#" class="btn btn-primary">
                          Click
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div
                      class="card"
                      style={{ width: "18rem", backgroundColor: "#ffff84" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">Semester 3</h5>

                        <a href="#" class="btn btn-primary">
                          Click
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed  mx-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             ECE <i class="fa-solid fa-laptop"></i>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <div
                      class="card"
                      style={{ width: "18rem", backgroundColor: "#ffff84" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">Semester 1</h5>
                        <a href="#" class="btn btn-primary">
                          Click
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div
                      class="card"
                      style={{ width: "18rem", backgroundColor: "#ffff84" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">Semester 2</h5>

                        <a href="#" class="btn btn-primary">
                          Click
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div
                      class="card"
                      style={{ width: "18rem", backgroundColor: "#ffff84" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">Semester 3</h5>

                        <a href="#" class="btn btn-primary">
                          Click
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed mx-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
           IT <i class="fa-solid fa-laptop"></i>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <div
                      class="card"
                      style={{ width: "18rem", backgroundColor: "#ffff84" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">Semester 1</h5>
                        <a href="#" class="btn btn-primary">
                          Click
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div
                      class="card"
                      style={{ width: "18rem", backgroundColor: "#ffff84" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">Semester 2</h5>

                        <a href="#" class="btn btn-primary">
                          Click
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div
                      class="card"
                      style={{ width: "18rem", backgroundColor: "#ffff84" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">Semester 3</h5>

                        <a href="#" class="btn btn-primary">
                          Click
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed mx-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             ECE-AI <i class="fa-solid fa-laptop"></i>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <div
                      class="card"
                      style={{ width: "18rem", backgroundColor: "#ffff84" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">Semester 1</h5>
                        <a href="#" class="btn btn-primary">
                          Click
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div
                      class="card"
                      style={{ width: "18rem", backgroundColor: "#ffff84" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">Semester 2</h5>

                        <a href="#" class="btn btn-primary">
                          Click
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div
                      class="card"
                      style={{ width: "18rem", backgroundColor: "#ffff84" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">Semester 3</h5>

                        <a href="#" class="btn btn-primary">
                          Click
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed mx-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              CSE-AI <i class="fa-solid fa-laptop"></i>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="card" style={{width:"18rem",backgroundColor:"#ffff84"}}> 
                      <div class="card-body">
                        <h5 class="card-title">Semester 1</h5>
                        <a href="#" class="btn btn-primary">
                          Click
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card" style={{width:"18rem",backgroundColor:"#ffff84"}}>
                      <div class="card-body">
                        <h5 class="card-title">Semester 2</h5>

                        <a href="#" class="btn btn-primary">
                          Click
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card" style={{width:"18rem",backgroundColor:"#ffff84"}}>
                      <div class="card-body">
                        <h5 class="card-title">Semester 3</h5>

                        <a href="#" class="btn btn-primary">
                          Click
                        </a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resource;

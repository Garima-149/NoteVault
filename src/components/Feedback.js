import React,{useState} from "react";
import "./App1.css";
import Rating from "./Rating.js";
import Top from "./ScrolltoTop.js";

function Feedback(props) {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Thank you for your feedback :)");
  };
  const manageRating = () => {
    console.log("done");
    setRating(0);
  }
  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <>
    <h3 className="h3 my-5 mx-5 text-center">{message}</h3>
    <div className="container text-white justify-center feedback">
      
      <form onSubmit={handleSubmit}>
        <label className="mx-3 my-2" style={{fontWeight:"bold"}}>Give Your Valuable Feedback </label><i class="fa-solid fa-face-smile"></i>
        <div class="input-group my-3">
          <span class="input-group-text">First and last name</span>
          <input type="text" aria-label="First name" class="form-control" />
          <input type="text" aria-label="Last name" class="form-control" />
          </div>
          <div class="input-group flex-nowrap my-3">
          <span class="input-group-text" id="addon-wrapping"></span>
          <input
            type="text"
            class="form-control"
            placeholder="Email-Id"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div class="input-group flex-nowrap my-3">
          <span class="input-group-text" id="addon-wrapping"></span>
          <input
            type="text"
            class="form-control"
            placeholder="Feedback"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
          </div>
         <p className="my-3"><Rating totalStars={5} onRate={handleRating} initialRating={rating}/></p> 
        <div class="col-12 my-3">
          <button type="submit" class="btn btn-primary" onClick={manageRating}>
            Submit
          </button>
        </div>
        </form>
        <Top/>
      </div>
      </>
  );
}

export default Feedback;

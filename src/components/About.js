import React from "react";
import "../styles/About.css";


function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundColor: "grey"}}>

      </div>
      <div className="aboutBottom">
        <h1> <strong>ABOUT US</strong></h1>
        <p>
        “What really knocks me out is a book that, when you're all done
         reading it, you wish the author that wrote it was a terrific 
         friend of yours and you could call him up on the phone whenever
          you felt like it. That doesn't happen much, though.”
          ― J.D. Salinger, The Catcher in the Rye<br></br>
        </p>
      </div>
    </div>
  );
}

export default About;
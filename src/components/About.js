import React, { useState } from "react";

function About() {
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btntext, setBtnText] = useState("Enable Darkmode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Whitemode");
    } else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Darkmode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">About</h3>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Upper Case function
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                The <strong> toUpperCase()</strong> method in JavaScript can be
                used to convert a string into uppercase characters. This method
                converts every lowercase character to uppercase and does not
                alter any other character. The toUpperCase method returns a new
                string and doesn't modify the original one.
              </p>

              <h4>Syntax</h4>
              <code>str.toUpperCase()</code>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Lower Case function
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                The <strong> toLowerCase()</strong> method in JavaScript can be
                used to convert a string into lowercase characters. This method
                converts every uppercase character to lowercase and does not
                alter any other character. The toLowerCase method returns a new
                string and doesn't modify the original one.
              </p>
              <h4>Syntax</h4>
              <code>str.toLowerCase()</code>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              First Letter Upper Case function
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                The <strong>toUpperCase()</strong> method converts a string
                value to uppercase. The <strong>slice()</strong> method is used
                to get all of the characters from index position 1 to the end of
                the string. The uppercase first letter is concatenated with the
                rest of the string. This method does not alter the original
                string.
              </p>
              <h4>Syntax</h4>
              <code>str.charAt(0).toUpperCase() + str.slice(1);</code>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button type="button" class="btn btn-primary" onClick={toggleStyle}>
          {btntext}
        </button>
      </div>
    </div>
  );
}

export default About;

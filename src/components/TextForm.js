import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleUpChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleFirstClick = () => {
    if (text) {
      const newText = text.charAt(0).toUpperCase() + text.slice(1);
      setText(newText);
    }
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  return (
    <div>
      <div>
        <h3>Enter some text here - </h3>
        <label for="myBox" className="form-label">
          Text Area
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="10"
          value={text}
          onChange={handleUpChange}
        ></textarea>
      </div>

      <div className="container">
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Upper Case
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>
          Lower Case
        </button>
        <button className="btn btn-primary my-3" onClick={handleFirstClick}>
          First Letter Upper Case
        </button>
        <button
          className="btn btn-primary my-3 mx-3"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>

      <div className="container">
        <h3>Text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>Time to read above text is: {0.008 * text.split(" ").length}</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TextForm;



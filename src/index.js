// import the react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom";

// create a react component
const App = () => {
    const buttonText = { text: 'Click Me'}
  return(
  <div>
    <label className="label" htmlFor="name">
      Enter Nmae:
    </label>
    <input id="name" type="text" />
    <button style={{ background: "blue", color: "white" }}>
        {buttonText.text}
    </button>
  </div>
  )
};

//take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

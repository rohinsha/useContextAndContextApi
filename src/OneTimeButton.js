// we need to import the `useState` hook:
// (or write React.useState)
import React, { useState } from "react";

function OneTimeButton(props) {
  // Create a new piece of state.
  // It comes with its own updater function!
  const [clicked, setClicked] = useState(false);

  // We need to handle button clicks by
  // calling out to the callback prop and then
  // turning the button off
  function doClick() {
    props.onClick();
    setClicked(true);
  }

  // This part is pretty much the same, but a little
  // less cluttered without `this`
  return (
    <button onClick={clicked ? undefined : doClick} disabled={clicked}>
      You Can Only Click Me Once
    </button>
  );
}

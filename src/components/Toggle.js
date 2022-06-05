import React, { useState } from "react";

/* Should state be added for feature: 
   1) Is it passed as a prop?
   2) Can you compute it based 
      on any other state or props in your component?
   3) Does it remain unchanged over time?
*/

function Toggle() {
  /* Create state variable.
     Call useState with initial value.
     Then array destructure state value and state setter function. */
  const [isOn, setIsOn] = useState(false);

  /* Event handler callback function. */
  function handleClick() {
    // Use setter function.
    setIsOn((isOn) => !isOn)
  }
  // Change background color.
  const color = isOn ? "red" : "white"

  return <button style={{ background: color }} onClick={handleClick}>
          {isOn ? "ON" : "OFF"}
         </button>;
}

export default Toggle;

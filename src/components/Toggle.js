import React, { useState } from "react";

function Toggle() {
  /* Create state variable.
     Call useState with initial value.
     Then array destructure state value and state setter function. */
  const [isOn, setIsOn] = useState(false);

  return <button>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;

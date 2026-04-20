import { useState } from "react";

const ToggleText = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <h1>{show}</h1>
      {show && <h1>Hello Rehan!</h1>}
      <button onClick={() => setShow(true)}>Show</button>
      <button onClick={() => setShow(false)}>Hide</button>
    </>
  );
};

export default ToggleText;
import React, { useState } from "react";

const Details = () => {
  const [font, setFont] = useState(2);
  return (
    <div>
      <p style={{ fontSize: font }}>Naveen</p>
      <button onClick={() => setFont(font + 4)}>Click me</button>
    </div>
  );
};

export default Details;

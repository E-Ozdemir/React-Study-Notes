import React, { useState } from "react";

function NameComponent() {
  const [input, setValue] = useState("");
  console.log('ilk input :>> ', input);
  const [name, setName] = useState("Initial value: >>> React Learner!");

  const handleInput = (event) => {
      console.log('handle input calisti');
    setValue(event.target.value);
  };

  const updateName = () => {
    // console.log('input :>> ', input);
    setName(input);
    console.log('set name calisti');
    setValue("");//save e bastiktan sonra kutuyu bosaltiyor.
  };

  return (
    <div>
      <p>Hello, {name}! Welcome to Clarusway</p>
      <div>
        <input type="text" value={input} onChange={handleInput} />
        <button onClick={updateName}>Save</button>
      </div>
    </div>
  );
}

export default NameComponent;
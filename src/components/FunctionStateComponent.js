import { useState } from "react";

function FunctionStateComponent() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <div>Function State Component</div>
      <button onClick={() => increase()}>Increase</button>
      <p>Counter:{counter}</p>
    </div>
  );
}

export default FunctionStateComponent;

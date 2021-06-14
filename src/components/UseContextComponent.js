import { useContext } from "react";
import NumberContext from "./NumberContext";

function UseContextComponent() {
  const value = useContext(NumberContext);
  return (
    <div>
      <div>UseContext Example </div>
      <div>This value is {value}</div>
    </div>
  );
}

export default UseContextComponent;

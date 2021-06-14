import { useContext } from "react";
import App from "../App";
import NumberContext from "./NumberContext";

function UseContextComponent() {
  const value = useContext(NumberContext);
  return <div>This value is {value}</div>;
}

export default UseContextComponent;

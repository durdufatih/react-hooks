import "./App.css";
import { ClassStateComponent } from "./components/ClassStateComponent";
import FunctionStateComponent from "./components/FunctionStateComponent";

function App() {
  return (
    <div className="App">
      <div className="cardClass"><ClassStateComponent /></div>
      <div className="cardFunction"><FunctionStateComponent /></div>      
    </div>
  );
}

export default App;

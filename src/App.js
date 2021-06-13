import "./App.css";
import { ClassStateComponent } from "./components/ClassStateComponent";
import { ClassUseEffectComponent } from "./components/ClassUseEffectComponent";
import FunctionStateComponent from "./components/FunctionStateComponent";
import FunctionUseEffectComponent from "./components/FunctionUseEffectComponent";

function App() {
  return (
    <div className="App">
      <div className="cardClass"><ClassStateComponent /></div>
      <div className="cardFunction"><FunctionStateComponent /></div> 
      <div className="cardClass"><ClassUseEffectComponent /></div>
      <div className="cardFunction"><FunctionUseEffectComponent /></div>      
    </div>
  );
}

export default App;

import "./App.css";
import { ClassStateComponent } from "./components/ClassStateComponent";
import { ClassUseEffectComponent } from "./components/ClassUseEffectComponent";
import FunctionStateComponent from "./components/FunctionStateComponent";
import FunctionUseEffectComponent from "./components/FunctionUseEffectComponent";
import GithubViewComponent from "./components/GithubViewComponent";
import NumberContext from "./components/NumberContext";
import UseContextComponent from "./components/UseContextComponent";

function App() {
  return (
    <NumberContext.Provider value={42}>
      <div className="App">
        <div className="cardClass">
          <ClassStateComponent />
        </div>
        <div className="cardFunction">
          <FunctionStateComponent />
        </div>
        <div className="cardClass">
          <ClassUseEffectComponent />
        </div>
        <div className="cardFunction">
          <FunctionUseEffectComponent />
        </div>
        <div className="cardContext">
          <UseContextComponent />
        </div>
        <div className="cardContext">
          <GithubViewComponent />
        </div>
      </div>
    </NumberContext.Provider>
  );
}

export default App;

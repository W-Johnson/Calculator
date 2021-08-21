import React, {useState} from 'react';
import './App.css';
import Screen from "./components/Screen";
import ToolBar from "./components/ToolBar";
function App() {

    let calcul: string, setCalcul: (value: (((prevState: string) => string) | string)) => void;
    [calcul, setCalcul] = useState("");
  return (
      <div>
      <Screen calcul={calcul}/>
      <ToolBar calcul={calcul} setCalcul={setCalcul}  />
      </div>
  );
}

export default App;

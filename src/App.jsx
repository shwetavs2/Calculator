import style from "./App.module.css";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let [calVal, setcalval] = useState("");
  const onButtonClick = (button) => {
    if (button === "c") {
      setcalval("");
    } else if (button === "=") {
      const result = eval(calVal);
      setcalval(result);
    } else {
      const newDisplayVal = calVal + button;
      setcalval(newDisplayVal);
    }
  };
  return (
    <div className={style.calculator}>
      <Input displayVal={calVal}></Input>
      <Button onButtonClick={onButtonClick}></Button>
    </div>
  );
}

export default App;

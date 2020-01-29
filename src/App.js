import React, { useState } from "react";
import Input from "./components/Input";
import MessageBox from "./components/MessageBox";
import "./App.css";

const App = () => {
  const [lastKeyPress, setLastKeyPress] = useState("");

  const onKeyPress = ({ charCode }) => {
    setLastKeyPress(String.fromCharCode(charCode));
  };

  return (
    <div className="App">
      <Input onKeyPress={onKeyPress} />
      <MessageBox text={`Last key pressed was: ${lastKeyPress}`} />
    </div>
  );
};

export default App;

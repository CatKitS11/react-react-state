import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");

  const handleThaiGreeting = () => {
    setGreetingMessage("สวัสดี");
  };

  const handleEnglishGreeting = () => {
    setGreetingMessage("Hi!");
  };

  const handleChineseGreeting = () => {
    setGreetingMessage("你好!");
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button onClick={handleThaiGreeting}>สวัสดี!</button>
        <button onClick={handleEnglishGreeting}>Hi!</button>
        <button onClick={handleChineseGreeting}>你好!</button>
      </div>
    </div>
  );
}

export default App;

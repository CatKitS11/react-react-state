import "./App.css";
import { useState } from "react";
function App() {
  const [text, setText] = useState('Greeting Message')
  const greetingMessage = (text) => {
    setText(text)
  }
  return (
    <div className="App">
      <div className="greeting-container">{text}</div>
      <div className="buttons">
        <button onClick={() => greetingMessage("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => greetingMessage("Hi!")}>Hi!</button>
        <button onClick={() => greetingMessage("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;

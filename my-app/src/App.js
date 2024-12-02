import React, { useState, useRef } from "react";

function App() {
  const [input, setInput] = useState(""); // Initialize input as an empty string
  const [seconds, setSeconds] = useState(0);
  const renders = useRef(0); // Track renders
  const timer = useRef(null); // Initialize timer ref as null

  const handleChange = (e) => {
    setInput(e.target.value);
    renders.current++; // Increment renders count
  };

  const startTimer = () => {
    if (!timer.current) {
      timer.current = setInterval(() => {
        setSeconds((prev) => prev + 1); // Update seconds state
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timer.current);
    timer.current = null; // Reset timer ref
  };

  const reset = () => {
    stopTimer();
    renders.current++;
    setSeconds(0); // Reset seconds state
  };

  return (
    <main className="App">
      <input
        type="text"
        value={input}
        placeholder="random input"
        onChange={handleChange}
      />
      <br />
      <br />
      <p>renders: {renders.current}</p>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
      <button onClick={reset}>reset</button>
      <p>Timer: {seconds}s</p>
      <p>{input}</p>
    </main>
  );
}

export default App;

import "./styles/App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchMessage = async () => {
      const data = await fetch("http://localhost:5000/api/projects")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setMessage(data);
        });
    };
    fetchMessage().catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>{message.message}</h1>
    </div>
  );
}

export default App;

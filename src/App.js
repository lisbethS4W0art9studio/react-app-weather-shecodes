import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App-container">
      <h1>Weather App</h1>
      <div className="container-info">
        <footer>
          {" "}
          Coded by Lisbeth Stafferton ©2024 with some open-source{" "}
          <em>
            <a href="https://github.com/lisbethS4W0art9studio/react-app-weather-shecodes">
              Github
            </a>
          </em>{" "}
          code <em>Hosted with </em>
          <a href="https://www.netlify.com">Netlify</a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App-container">
      <h1>Weather App</h1>
      <div className="container-info">
        <Weather defaultCity="Hobart" />
        <footer className="footer-info">
          {" "}
          <small>
            Coded by Lisbeth Stafferton ©2024 with some open-source{" "}
            <em>
              <a
                href="https://github.com/lisbethS4W0art9studio/react-app-weather-shecodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </em>{" "}
            code <em>Hosted with </em>
            <a
              href="https://stellular-druid-d1c567.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;

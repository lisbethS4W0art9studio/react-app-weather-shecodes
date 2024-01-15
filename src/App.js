import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Weather App</p>
      </header>
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
  );
}

export default App;

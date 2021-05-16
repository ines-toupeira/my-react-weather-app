import './App.css';
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defautCity="Alaska" />
        <footer>This project was coded by Inês Marques and is {" "}
        <a href="https://github.com/ines-marques/my-react-weather-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
}

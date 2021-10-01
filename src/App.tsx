import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { ProjectListScreen } from "screen/project-list";
import { LoginScreen } from "screen/login";

function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      <LoginScreen></LoginScreen>
    </div>
  );
}

export default App;

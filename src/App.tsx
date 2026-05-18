import React from "react";
import Navbar from "./components/Navbar/Navbar";
import IconsDesktop from "./components/IconsDesktop/IconsDesktop";
import "./App.css";

const App: React.FC = () => {
  console.log("funcionando con deploy de skill.md");
  return (
    <div className="app-shell">
      <Navbar />
      <IconsDesktop />
    </div>
  );
};

export default App;

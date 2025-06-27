import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Moviecard from "./components/Moviecard";

function App() {
  return (
    <>
      <Moviecard movie={{ title: "Kevals film", relese: "2005" }} />
    </>
  );
}

export default App;

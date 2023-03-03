import React from "react";
import "./app.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div>
      <>
        <Header />
        <main className="main">
          <Home />
        </main>
      </>
    </div>
  );
};

export default App;

import React from "react";
// import ReactDOM from "react-dom";
import Cards from "./components/card/Cards";
import Header from "./components/header/Header";
import data from "./helper/data";

function App() {
  // console.log(data);
  return (
    <>
      <Header />
      <Cards data={data} />
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import { CatFactsList } from "./CatsFactsList";
import CatBreedList from "./CatBreedList";
import { CatBreedList2 } from "./HooksDemo/CatBreedList2";

function App() {
  return (
    <div>
      <CatFactsList />
      <br />
      <CatBreedList />
      {/* <CatBreedList2 /> */}
    </div>
  );
}

export default App;

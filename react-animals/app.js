import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const title = "" || "Click an animal for a fun fact";
const background = (
  <img className="background" src="./images/ocean.jpeg" alt="ocean" />
);

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
    />
  );
}

const animalFacts = (
  <div>
    {background}
    <div className="animals">{images}</div>
    <h1>{title}</h1>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));

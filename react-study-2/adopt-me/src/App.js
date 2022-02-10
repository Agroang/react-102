import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet"

const App = () => {
  // Once we use JSX we never write createElement again
  // but it's good to understand whats happening under the hood
  return React.createElement("div", {}, [
    // it seems the [] is optional, used when passing a bunch of components
    // you could pass html attributes here in the {}, same bellow
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mix",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

import React from "react"; // With the latests versions of React we really
// dont have to import React anymore, Babel is intelligent enough to do it for
// you
import ReactDOM from "react-dom";
// import Pet from "./Pet"
import SearchParams from "./SearchParams";

// const App = () => {
//   // Once we use JSX we never write createElement again
//   // but it's good to understand whats happening under the hood
//   return React.createElement("div", {}, [
//     // it seems the [] is optional, used when passing a bunch of components
//     // you could pass html attributes here in the {}, same bellow
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mix",
//     }),
//   ]);
// };

const App = () => {
  return (
  <div>
    <h1>Adopt Me!</h1>
    {/* <Pet
      name="Luna"
      animal="Dog"
      breed="Havanese"
    />
    <Pet
      name="Pepper"
      animal="Bird"
      breed="Cockatiel"
    />
    <Pet
      name="Doink"
      animal="Cat"
      breed="Mix"
    /> */}
    <SearchParams />;
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

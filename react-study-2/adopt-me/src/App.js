const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Luna"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Havanese"),
  ]);
};

const App = () => { // Once we use JSX we never write createElement again
  // but it's good to understand whats happening under the hood
  return React.createElement( "div", {}, [ // it seems the [] is optional, used when passing a bunch of components
    // you could pass html attributes here in the {}, same bellow
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
    ]);
};
// Same as above, just cleaner
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet),
//     React.createElement(Pet),
//     React.createElement(Pet),
//   ]);
// };

ReactDOM.render(React.createElement(App), document.getElementById("root"));

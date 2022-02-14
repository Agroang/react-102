// https://www.freecodecamp.org/news/react-beginners-guide/
// https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/
// https://reactjs.org/tutorial/tutorial.html
// https://www.w3schools.com/REACT/DEFAULT.ASP

////////////// https://www.w3schools.com/REACT/react_memo.asp //////////////////

// React memo ------------------------------------------------------------------

// Using memo will cause React to skip rendering a component if its props have
// not changed. This can improve performance.

// Example problem:

// In this example, the Todos component re-renders even when the todos have not
// changed.

// (index.js)

import { useState } from "react";
import ReactDOM from "react-dom";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// Todo.js

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default Todos;

// When you click the increment button, the Todos component re-renders.
// If this component was complex, it could cause performance issues.

// Solution (for the above example/problem):

// To fix this, we can use memo.
// Use memoto keep the Todos component from needlessly re-rendering.
// Wrap the Todos component export in memo.

// (index.js)

import { useState } from "react";
import ReactDOM from "react-dom";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// Todo.js

import { memo } from "react"; // import memo

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos); // This is the change, wrapped the export

// Now the Todos component only re-renders when the todos that are passed to it
// through props are updated.

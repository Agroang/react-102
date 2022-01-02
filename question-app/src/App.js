// import logo from './logo.svg';
import './App.css';
// <img src={logo} className="App-logo" alt="logo" />
import React from "react"
import Questions from './components/Questions';
import Landing from './components/Landing';


export default function App() {
  // here state if true question, if false landing?
  // const [display, setDisplay] = React.setState(true)

  return (
    <div className="App">
      <Landing />
      <Questions />
    </div>
  );
}

// import logo from './logo.svg';
import './App.css';
import Main from "./components/Main"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
        /* <img src={logo} className="App-logo" alt="logo" /> */

        // <a
        //   className="App-link"
        //   href="https://reactjs.org"
        //   target="_blank"
        //   rel="noopener noreferrer"
        // >
        //   Learn React
        // </a>
        <div className="app-container">
          <Header />
          <Main />
          <Footer />
        </div>
  );
}

export default App;

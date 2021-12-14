import './App.css';
import Main from "./components/Main"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
        <div className="app-container">
          <Header />
          <Main />
          <Footer />
        </div>
  );
}

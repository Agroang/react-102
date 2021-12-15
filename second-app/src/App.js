// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}
// I have used it before, but to use JS inside your JSX you just need to put it
// between curly braces {}

// Interesting example (it returns the current time in hours)
// function App() {
//   const date = new Date()
//   const hours = date.getHours() % 12

//   return (
//     <h1>It is currently about {hours} o'clock!</h1>
//   )
// }

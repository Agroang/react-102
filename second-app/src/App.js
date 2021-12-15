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

// Properties or "Props" are very similar to what an attribute in HTML
// would be. So far we have harcoded what our componets were returning
// but the ideal would be to have props that can be changed given new
// values.

// function App() {
//   return (
//     <div className="contacts">
//       <Contact
//         img="./images/mr-whiskerson.png"
//         name="Mr. Whiskerson"
//         phone="(212) 555-1234"
//         email="mr.whiskaz@catnap.meow"
//       />
//     </div>
//   )
// }

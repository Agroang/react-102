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

// You can name the props (in the example above, those are the img, name, etc)
// whatever you want.

// Then, following the example above, the actual Contact.js component would
// look something like this:

// (you all the argument props but you can call it whatever you want and to
// to check what you are getting you can use console.log(props)).

// export default function Contact(props) {
//   return (
//     <div className="contact-card">
//       <img src={props.img} />
//       <h3>{props.name}</h3>
//       <div className="info-group">
//         <img src="./images/phone-icon.png" />
//         <p>{props.phone}</p>
//       </div>
//       <div className="info-group">
//         <img src="./images/mail-icon.png" />
//         <p>{props.email}</p>
//       </div>
//     </div>
//   )
// }

// JS Object destructuring: (very common to do when using React)
// const person = {
//     img: "./images/mr-whiskerson.png",
//     name: "Mr. Whiskerson",
//     phone: "(800) 555-1234",
//     email: "mr.whiskaz@catnap.meow"
// }

// const {img, name} = person
// console.log(name)

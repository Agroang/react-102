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

// A full example of destructured props would be:
// (important to remember, the arguments that we
// are passing come from the rendering so it must the same
// names (you can re declared using colons but we are not
// there yet....))

// export default function Contact({ img, name, phone, email }) {
//   return (
//     <div className="contact-card">
//       <img src={img} />
//       <h3>{name}</h3>
//       <div className="info-group">
//         <img src="./images/phone-icon.png" />
//         <p>{phone}</p>
//       </div>
//       <div className="info-group">
//         <img src="./images/mail-icon.png" />
//         <p>{email}</p>
//       </div>
//     </div>
//   )
// }

// How to put some conditionals, in this case only to display if true(truthy,
// meaning that exists, in this case if props.setup exists it will display
// it inside that h3), otherwise it won't
// export default function Joke(props) {
//   return (
//     <div>
//       {props.setup && <h3>Setup: {props.setup}</h3>}
//       <p>Punchline: {props.punchline}</p>
//       <hr />
//     </div>
//   )
// }

// Of course you can also pass JS through the props, instead of just
// string.

/* <Joke
  punchline="I got my daughter a fridge for her birthday."
  upvotes={1}
  downvotes={1}
  comments={["great", "awful", "send help"]}
  isPun={true}
/> */

// It's a little bit more tricky to try to pass JS inside a string,
// so remember to use template literals (interpolation)

// const image = props.img
// console.log(image)
// const srcImg = `../images/${image}`
// console.log(srcImg)
// return (
//   <div className="card">
//     <img src={srcImg} className="card--image" />
// You can also do it directly into the src= BUT as
// `` is JS, you would have to do it like: {`../images/${props.img}`}

// React is quite intelligent and in a way it can map over an array if you pass
// and array while rendering, of course we usually map ourselves over the data
// but the idea could be like the following:

// export default function App() {
//   const colors = [
//     <h3>Red</h3>,
//     <h3>Orange</h3>,
//     <h3>Yellow</h3>,
//     <h3>Green</h3>,
//     <h3>Blue</h3>,
//     <h3>Indigo</h3>,
//     <h3>Violet</h3>
//   ]
//   return (
//     <div>
//       {colors}
//     </div>
//   )
// }

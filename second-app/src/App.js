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

// Knowing this, the next is to have a js file with an array and export default
// that array (just export default = []) and then in App import that array as:
// import jokesData from "./jokesData"
// With that we can do the following:

// export default function App() {
//   const jokeElements = jokesData.map(joke => {
//     return <Joke
//       setup={joke.setup}
//       punchline={joke.punchline}
//     />
//   })
//   return (
//     <div>
//       {jokeElements}
//     </div>
//   )
// }

// Kind of finishing what we have been doing, if we have the data in a js file:
// import dataArray from "./data"
// export default function App() {
//   // <Hero />
//   const cardElements = dataArray.map(card => {
//     console.log(card.coverImg)
//     return (
//       <Card
//         img={card.coverImg}
//         rating={card.stats.rating}
//         reviewCount={card.stats.reviewCount}
//         location={card.location}
//         title={card.title}
//         price={card.price}
//       />
//     )
//   })
//   return (
//     <div>
//       <Navbar />
//       {cardElements}
//     </div>
//   )
// }

// When using .map on data we usually get a React error that says
// that we should have a unique key, a normal way to fix this
// is by passing a unique value (unique to that item) and give
// it a name of key, usually what it is passed is the id.
// <Card
//    key = { item.id } (this is inside the component) ...

// Another example on how to have display logic (display only under certain
// conditions)
// { props.openSpots === 0 && <div className="card--badge">SOLD OUT</div> }
// The above will only be displayed if props.openSpots === 0

// You can also pass a whole object as props!
// (inside our App)
// export default function App() {
//   const cards = data.map(item => {
//     return (
//       <Card
//         key={item.id}
//         item={item}
//       />
//     )
//   })
// (inside our Card component)
// export default function Card(props) {
//   let badgeText
//   if (props.item.openSpots === 0) {
//     badgeText = "SOLD OUT"
//   } else if (props.item.location === "Online") {
//     badgeText = "ONLINE"
//   }

//   return (
//     <div className="card">
//       {badgeText && <div className="card--badge">{badgeText}</div>}
//       <img src={`../images/${props.item.coverImg}`} className="card--image" />
//       <div className="card--stats">
//         <img src="../images/star.png" className="card--star" />
//         <span>{props.item.stats.rating}</span>
//         <span className="gray">({props.item.stats.reviewCount}) • </span>
//         <span className="gray">{props.item.location}</span>
//       </div>
//       <p className="card--title">{props.item.title}</p>
//       <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
//     </div>
//   )
// }

// There is also another way that instead of passing the item as an object, you can use the spread operator
// and it will be just like before (passing each property individually)
// The syntax would be as follows:
// export default function App() {
//   const cards = data.map(item => {
//     return (
//       <Card
//         key={item.id}
//         {...item} (this is the spread operator, the other way is as item={item}, but this one
// will need more read on the card component side, console.log to check what you are getting,
// it seems that there is no right or wrong, but it's prefference and you might find it
// will working on react)
// More info in the following link (about object spread)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals

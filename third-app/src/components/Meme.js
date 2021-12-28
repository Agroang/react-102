import React from "react"

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])


  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))

  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          className="form--button"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="meme img"/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

// information about React mouse handle events:
// https://reactjs.org/docs/events.html#mouse-events
// inside the button for example we can add:
// onClick={handleClick} (onClick is the official syntax for onClick handlers)
// and define the function handleClick (inside the component function) but
// before the return

// Even if we update a variable to change, once it has been rendered on React
// the value won't change, for it to change we need React "states".

// In React, values that are created by the function or the component itself are
// usually handled with "state". A "state" is a way for React to remember saved
// values from within a component. This is similar to declaring variables from
// within a component.

// Within the React library you have a hook called useState(), you can use as
// React.useState() but is often deconstructed when you import as the following:
// import React, {useState} from "react"
// and then used just as .useState()

// If we console.log React.useState what we get back is an array that is
// expecting a value and a function.

// One way of getting the value out of the array and display it on the
// component would be to just get the index [0] of the array but a more clean
// is to deconstruct the array from the begginning and use that:

// export default function App() {
//   const [whateverWeWant, func] = React.useState("Yes") (We get to call the
//   first value whatever we want to call it, and the second we called func as
//   it is expecting a function, we are just not passing it, yet.
//   Ideally we will call the value something that is related to the actual
//   value, like "isImportant" or something like that (as we get "Yes") back
//   console.log(whateverWeWant)
//   return (
//     <div className="state">
//       <h1 className="state--title">Is state important to know?</h1>
//       <div className="state--value">
//         <h1>{whateverWeWant}</h1> Here we get the first value of the array
//       </div>
//     </div>
//   )
// }

// The naming convention for the function that we pass to the react state
// is to use set + the name of the variable, so if we have
// const [isImportant, func] = React.useState("Yes")
// the func name would be setIsImportant. We would run this function based
// on events that happen on the page (and this would change the value of the
// variable)

// A nice example of state. It increases or decrases the value of a counter
// when you click the plus or minus button:
// export default function App() {
//   const [count, setCount] = React.useState(0)
//   function add() {
//     setCount(count + 1)
//   }

//   function substract() {
//     setCount(count - 1)
//   }

//   function clickAddHandler() {
//     add()
//   }

//   function clickMinusHandler() {
//     substract()
//   }

//   return (
//     <div className="counter">
//       <button className="counter--minus" onClick={clickMinusHandler}>–</button>
//       <div className="counter--count">
//         <h1>{count}</h1>
//       </div>
//       <button className="counter--plus" onClick={clickAddHandler}>+</button>
//     </div>
//   )
// }

// a shorter way for the above example would be to call directly onClick the
// add or substract functions and the result should be the same

// Now, using the value of state directly on the set function works BUT it's
// best practice to do it through a callback function. That function will be
// passed as parameter the "old" value of state.

// export default function App() {
//   const [count, setCount] = React.useState(0)

//   function add() {
//     setCount(function (oldValue) {
//       return oldValue + 1
//     })
//   }
//   ...

// You can use an arrow function to shorten it, and is common to find
// as a convention to use the name of oldValue as "prev{variable_name}"

// function add() {
//   setCount(prevCount => prevCount + 1)
// }

// The above function is the same as the one above it

// Example of using a ternary operator to flip a boolean and display something
// different (nice example that mixes some of the stuff that we have been
// checking)

// export default function App() {
//   /**
//    * Challenge:
//    * - Initialize state for `isGoingOut` as a boolean
//    * - Make it so clicking the div.state--value flips that
//    *   boolean value (true -> false, false -> true)
//    * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
//    */
//   const [isGoingOut, setIsGoingOut] = React.useState(true)

//   function changeState() {
//     setIsGoingOut(prevState => !prevState)
//   }

//   return (
//     <div className="state">
//       <h1 className="state--title">Do I feel like going out tonight?</h1>
//       <div className="state--value" onClick={changeState}>
//         <h1>{isGoingOut ? "Yes" : "No"}</h1>
//       </div>
//     </div>
//   )
// }

// It's important to remember that with React we never want to modify the
// state variable directly, so no .push for example (even if we use the
// prevState), so here is an example of what we can do to modify the value
// if it's needed:

// function App() {

//   const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

//   function addItem() { //we divided it in two lines as it was getting long
//   so because of that we added the return. We use the spread operator that
//   will give us the whole array back and then we add the new item with the
//   template literal)
//     setThingsArray(prevThingsArray => {
//       return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
//     })
//   }

//   const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
//   (we add the key here to avoid getting that error on the console)
//   return (
//     <div>
//       <button onClick={addItem}>Add Item</button>
//       {thingsElements}
//     </div>
//   )
// }

// If we wanted to change the value of an object, we would do the following:

// export default function App() {
//   const [contact, setContact] = React.useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (719) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false
//   })

//   let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

//   function toggleFavorite() {
//     setContact(prevContact => ({ //the parenthesis are for implicit return,
//     it can be done without it but you need to add the return {}
//       ...prevContact,
//       isFavorite: !prevContact.isFavorite
//     }))
//   }

// We can not only pass states through props, but we can also pass functions
// that we can later use on the component as an event listener
//  <Star
//    isFilled={contact.isFavorite}
//    handleClick={toggleFavorite} (this is a function that will handle the click)
//  />
// Then on the actual component we can use that function as onClick={props.handleClick}

// Passing data to components can only be done through props so if a sibling component
// needs data you cannot pass it through the sibling, you need to raise the state
// to the parent component and from the pass it as props (this can get tidious if
// if it has too many layers and for that exists state managers like Redux)

// As a rule of thumb, keep the state as close as it is needed for the component
// to use, there is no need to keep it at a parent level and pass it through
// props if only 1 component needs it, if that is the case the component should
// have the state. If other components need the state then you can raise it to the
// parent level.

// Just like in HTML, you can also style within JSX, but the syntax is a little
// bit different. You need to pass an objet to the style property. And, as you
// will pass an object (JS) you need to get inside curly braces, but the object
// is also curly braces, so its a set of 2 curly braces. For that reason sometimes
// it's better to just define that object outside JSX and just pass it to the
// style. Also, as it is JS, even if it's background-color you should write it
// with the JS syntax (camelCase) so it becomes backgroundColor

// export default function App() {
//   const [squares, setSquares] = React.useState(boxes)

//   const styles = {
//     backgroundColor: "black"
//   }

//   const squareElements = squares.map(square => (
//     <div style={styles} className="box" key={square.id}></div>
//   ))
//   return (
//     <main>
//       {squareElements}
//     </main>
//   )
// }

// One of the major benefits of being able to use JS while styling is
// that you can use ternary operators to change the style based on conditions.
// Example bellow: (lets assume that the App(props) and the props come with a
// darkMode attribute set to true)

// export default function App(props) {
//   const [squares, setSquares] = React.useState(boxes)
//   props.darkMode

//   const styles = {
//     backgroundColor: props.darkMode ? "#222222" : "#cccccc"
//   }

//   const squareElements = squares.map(square => (
//     <div style={styles} className="box" key={square.id}></div>
//   ))
//   return (
//     <main>
//       {squareElements}
//     </main>
//   )
// }


// It is possible to create a state based on the props that come
// from the props (derived state) and then use that to actually
// modify the value of state based on events, nevertheless there is also
// a "better" way that is called "unified state". The reason is that
// if you use derived state you would have two sources of the same value,
// the one at the App level and the new one at the component level. It
// is better to pass a function through props that will modify the state
// at the App level.

// To be able to do this we need to also pass the id of the object when
// passing the function otherwise the function won't know which object
// to target and it would target everything (I think).

// Let's say that we render the following component that is comming from a
// .map iteration

//<Box
//  key={square.id}
//  id={square.id}
//  on={square.on}
//  toggle={toggle}
///>

// We are passing a toggle function and the id that is coming from the iteration
// as well

// The component itself could have the onClick as the following:


// return (
//   <div
//     style={styles}
//     className="box"
//     onClick={() => props.toggle(props.id)}
//   >
//   </div>
// )

// And as mentioned, the id is comming from the props, and we pass an arrow
// function to the event, but only use the callback function, in this case
// the toggle with the id

// That will go back to the app with the id if the clicked object.


// function toggle(id) {
//   setSquares(prevSquares => {
//     return prevSquares.map((square) => {
//       return square.id === id ? { ...square, on: !square.on } : square
//     })
//   })
// }

// We pass the id to the function and then we call the setSquares method to
// change the state, we use the previous value which is a whole array of objects
// and we return the iteration (map) that will return a new array with the
// the updated values based on what we do on the function, in this case we use
// a ternary to compare each object's id with the id that is comming from the
// function and if it's true it will toggle the value of .on. We also need
// to pass all the other properties of the object that is why we first use
// the spare operator and also we use {} as it is an object. If it doesn't
// match the id we simply return the object.

// You could as well from the beginning instead of passing just the function
// pass the id to the function as well as props, so (this is called "closure")

//<Box
//  key={square.id}
//  on={square.on}
//  toggle={() => toggle(square.id)}
///>

// And of the Box component it could be just like this:
// onClick = { props.toggle }

// Nevertheless the main toggle function would still be the same

// Another example of conditional rendering, remember that
// {isShown && <p>{props.punchline}</p>} means "if isShown is true then render
// <p>{props.punchline}</p>"

// export default function Joke(props) {
//   const [isShown, setIsShown] = React.useState(false)

//   function toggleShown() {
//     setIsShown(prevShown => !prevShown)
//   }
//   return (
//     <div>
//       {props.setup && <h3>{props.setup}</h3>}
//       {isShown && <p>{props.punchline}</p>}
//       <button onClick={toggleShown}>Show Punchline</button>
//       <hr />
//     </div>
//   )
// }

// You can go even further and check for longer conditions:
// (the h1 will render only if there are messages)

// export default function App() {
//   const [messages, setMessages] = React.useState([1, 2, 3])

//   return (
//     <div>
//       {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>}
//     </div>
//   )
// }

// When you need to display or hide something you use the && and when you need
// to pick between 2 things on what to display you use a ternary (this two are
// pretty much 90% of the conditionals you see on React)

/* <div>
  {props.setup && <h3>{props.setup}</h3>}
  {isShown && <p>{props.punchline}</p>}
  <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
  <hr />
</div> */

// Another conditional examples, using two methods if or ternary:

// export default function App() {
//   const [messages, setMessages] = React.useState([1, 2])

//   let message
//   if (messages.length === 0) {
//     message = <h2>You're all caught up!</h2>

//   } else if (messages.length > 1) {
//     message = <h2>You have {messages.length} unread messages</h2>

//   } else {
//     message = <h2>You have {messages.length} unread message</h2>

//   }

//   return (
//     <div>
//       {message}
//     </div>
//   )
// }

// second way using only ternary operators
//   <div>
//     {
//       messages.length === 0 ?
//         <h1>You're all caught up!</h1> :
//         <h1>You have {messages.length} unread
//         {messages.length > 1 ? "messages" : "message"}</h1>
//     }
//   </div>

// Building forms in React is a little bit more complex than other components.
// Usually you check for all the changes on the input and not just the final
// value that gets submitted.

// export default function Form() {
//   const [firstName, setFirstName] = React.useState("")

//   console.log(firstName)

//   function handleChange(event) {
//     setFirstName(event.target.value)
//   }

//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="First Name"
//         onChange={handleChange}
//       />
//     </form>
//   )
// }

// For our handler function, we have so far ignored the parameter that you can
// pass but usually when an event occurs you get an "event" object that has a lot
// of information, in our case the most important one is the target property
// that represents the DOM element and the value from it that is the actual
// input. For the setFirstName function we don't need the previous value of the
// state so we can just set the value to the one that comes from calling
// event.target.value instead of re assigning a value to the prevState which is
// never recommended.

// Making new states and different event handlers for each input is maneagable
// to maybe up to 4 inputs but beyond that it's pretty hard. The best way to
// do this is to have 1 event handler but the state itself to be an object
// and to differentiate the inputs by giving them a name that will have the
// same name as the key in the object:


// export default function Form() {
//   const [formData, setFormData] = React.useState(
//     { firstName: "", lastName: "" }
//   )

//   function handleChange(event) {
//     setFormData(prevFormData => {
//       return {
//         ...prevFormData,
//         [event.target.name]: event.target.value // this over here is a new
//          feature of ES6, its called "computed properties" and allow us to use
//          the .something as a key to access the object (as long as it is
//          inside the brackets)
//       }
//     })
//   }

//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="First Name"
//         onChange={handleChange}
//         name="firstName"
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         onChange={handleChange}
//         name="lastName"
//       />
//     </form>
//   )
// }

// Controlled components is an important concept in React, it related to having
// one source of truth, in few words, not having a different value for a state
// for example in different components or even between React and HTML. To avoid
// this what we do with our forms is that we add another attribute called value
// and we set it to the corresponding value of the representing state, that way
// React is the one controlling the value of the input and not HTML.

// export default function Form() {
//   const [formData, setFormData] = React.useState(
//     { firstName: "", lastName: "", email: "" }
//   )

//   function handleChange(event) {
//     setFormData(prevFormData => {
//       return {
//         ...prevFormData,
//         [event.target.name]: event.target.value
//       }
//     })
//   }

//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="First Name"
//         onChange={handleChange}
//         name="firstName"
//         value={formData.firstName}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         onChange={handleChange}
//         name="lastName"
//         value={formData.lastName}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         onChange={handleChange}
//         name="email"
//         value={formData.email}
//       />
//     </form>
//   )
// }

// HTML inputs have more differences in React:
// <textarea></textarea> < HTML <textarea /> < React (self closing!)

// Checkboxes are a lot harder, as they don't really have a value in the sense
// that inputs have, they have a "checked" property that is true or false
// depending if the box is checked or not, because of that even the handler
// function must consider this otherwise it simply won't work for the checkbox:

// export default function Form() {
//   const [formData, setFormData] = React.useState(
//     {
//       firstName: "",
//       lastName: "",
//       email: "",
//       comments: "",
//       isFriendly: true
//     }
//   )

//   function handleChange(event) {
//     const { name, value, type, checked } = event.target
//     setFormData(prevFormData => {
//       return {
//         ...prevFormData,
//         [name]: type === "checkbox" ? checked : value
//       }
//     })
//   }

//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="First Name"
//         onChange={handleChange}
//         name="firstName"
//         value={formData.firstName}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         onChange={handleChange}
//         name="lastName"
//         value={formData.lastName}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         onChange={handleChange}
//         name="email"
//         value={formData.email}
//       />
//       <textarea
//         value={formData.comments}
//         placeholder="Comments"
//         onChange={handleChange}
//         name="comments"
//       />
//       <input
//         type="checkbox"
//         id="isFriendly"
//         checked={formData.isFriendly}
//         onChange={handleChange}
//         name="isFriendly"
//       />
//       <label htmlFor="isFriendly">Are you friendly?</label>
//       <br />
//     </form>
//   )
// }

// Radio buttons are also a little bit tricky in React. As previously mentioned
// we want to controll everything from the React side so we need to have a
// controlled component, in some cases before we were just using the value but
// in radio buttons we need to do a little bit more.

// export default function Form() {
//   const [formData, setFormData] = React.useState(
//     {
//       firstName: "",
//       lastName: "",
//       email: "",
//       comments: "",
//       isFriendly: true,
//       employment: "" // this is the new key that represent the button
//     }
//   )
//   console.log(formData.employment)

//   function handleChange(event) {
//     const { name, value, type, checked } = event.target
//     setFormData(prevFormData => {
//       return { // we don't add a new one as we use value
//         ...prevFormData,
//         [name]: type === "checkbox" ? checked : value
//       }
//     })
//   }

//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="First Name"
//         onChange={handleChange}
//         name="firstName"
//         value={formData.firstName}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         onChange={handleChange}
//         name="lastName"
//         value={formData.lastName}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         onChange={handleChange}
//         name="email"
//         value={formData.email}
//       />
//       <textarea
//         value={formData.comments}
//         placeholder="Comments"
//         onChange={handleChange}
//         name="comments"
//       />
//       <input
//         type="checkbox"
//         id="isFriendly"
//         checked={formData.isFriendly}
//         onChange={handleChange}
//         name="isFriendly"
//       />
//       <label htmlFor="isFriendly">Are you friendly?</label>
//       <br />
//       <br />

//       <fieldset> //this is the start of the radio button
//         <legend>Current employment status</legend>

//         <input
//           type="radio"
//           id="unemployed"
//           name="employment"
//           value="unemployed"
//           checked={formData.employment === "unemployed"} // this is for the
//           // controlled component
//           onChange={handleChange}
//         />
//         <label htmlFor="unemployed">Unemployed</label>
//         <br />

//         <input
//           type="radio"
//           id="part-time"
//           name="employment"
//           value="part-time"
//           checked={formData.employment === "part-time"}
//           onChange={handleChange}
//         />
//         <label htmlFor="part-time">Part-time</label>
//         <br />

//         <input
//           type="radio"
//           id="full-time"
//           name="employment"
//           value="full-time"
//           checked={formData.employment === "full-time"}
//           onChange={handleChange}
//         />
//         <label htmlFor="full-time">Full-time</label>
//         <br />

//       </fieldset>
//     </form>
//   )
// }

// Radio button continuation: we only update 1 value, the selected one, that
// is why we only update 1 state (the employment), nevertheless each button
// has a unique value and the value is what is actually gets saved in the state
// because of that the controlled component in this case is not value but checked
// It is longer than the check box because it is not a boolean by default, so we
// need to make it a boolean by checked={formData.employment === "unemployed"},
// which, in this case, checks if the value("unemployed") is the same as the
// formData.employment (state) and that will return a boolean, giving us the same
// result that we had with check box. If true it will checked and if false it
// won't, so that way only one can be checked at the same time.

// Select & Option in React forms is not that hard and it's similar to what we
// have been doing with the other form elements, so we use the value and name.

// <label htmlFor="favColor">What is your favorite color?</label>
//   <br />
//   <select
//       id="favColor"
//       value={formData.favColor}
//       onChange={handleChange}
//       name="favColor"
//   >
//       <option value="">-- Choose --</option>
//       <option value="red">Red</option>
//       <option value="orange">Orange</option>
//       <option value="yellow">Yellow</option>
//       <option value="green">Green</option>
//       <option value="blue">Blue</option>
//       <option value="indigo">Indigo</option>
//       <option value="violet">Violet</option>
//   </select>

// Probably one difference is that we are initializing the value as an empty
// string on the state (favColor: "") but we also need to represent that, and
// to do that we add the <option value="">-- Choose --</option> that has the
// value of "" solving our problem.

// In before HTML5 the submit was done through an input with the type of submit
// and the value was the text that it would display. Nevertheless, with HTML5
// if we add a button inside the form element, then it recognizes that as the
// submit. By the type of that button will be submit so if you DON't want it
// to be a submit button, you need to tell html that is a type="button"
// To handle the event that occurs when we submit the form we make a new
// function and add its handler to the form as well:
//  <form onSubmit={handleSubmit}>
// (the button looks just like this:  <button>Submit</button>)

// function handleSubmit(event) {
//   event.preventDefault() // to avoid the refresh and the queries in the url
//   // submitToApi(formData), this would be if we had some kind of API call
//      that handles the data
//   console.log(formData) //just to prove that we have all the information
//                          that we update
// }

// We prevent the default behaviour as it would refresh and send the info into
// the url query as the submit was an action in HTML.
// As shown above, as we have been updating the state with each input that
// we make to the form, passing the information of the form to the backend
// it's fairly easy with React.

// Usually with React you want to use the API call to set a state or to send
// the state data to an API, one of the biggest problems that occur with this
// is that putting the fetch inside the top level of the component and then
// setting calling the setState will re render the component to update the
// state, and if we render the component the fetch will be called again,
// calling setState again with the returned data, starting an infitite loop
// of fetches and re renderings. To deal with this we have React's useEffect()

// useEffect() runs AFTER the component has been rendered. The useEffect()
// function has two parameters, the function callback (usually an arrow function)
// and, although not necesary almost always included, an array called
// "dependencies array". The values that this array have will limit "when" the
// useEffect() function should run, otherwise it will run after every render of
// the component. With the array, the effect run when the values that are
// included in the array change. If we add the array but leave it empty, then
// the function will run only with the first render of the component and never
// again.

// export default function App() {
//   const [count, setCount] = React.useState(0)

//   console.log("Component rendered")

//   React.useEffect(function () {
//     console.log("Effect function ran")
//   }, [count])

//   return (
//     <div>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
//     </div>
//   )
// }

// Example of useEffect() using a Star Wars API call:

// export default function App() {
//   const [starWarsData, setStarWarsData] = React.useState({})
//   const [count, setCount] = React.useState(1)

//   React.useEffect(function () {
//     fetch(`https://swapi.dev/api/people/${count}`)
//       .then(res => res.json())
//       .then(data => setStarWarsData(data))
//   }, [count])

//   return (
//     <div>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//     </div>
//   )
// }

//

// There is a common problem when using useEffect() and that is what it is known
// as a "memory leak". If we have a conditional rendering of a component, and
// that component is using useEffect, let's say we are listening for window
// events, even if the component is unmounted, the event is still there and it
// will try to run the event listener, generating a warning of memory leak on
// the console.

// (example of a use effect in a component that is conditionally rendered)

// React.useEffect(() => {
//   window.addEventListener("resize", function () {
//     setWindowWidth(window.innerWidth)
//   })
// }, [])

// The solution is a "clean-up function". Currently on the example above we are
// not returning anything, and what we can do is actually return a function, that
// will be our clean-up function.

// As we want to clean up a function in this case it's better to declare it
// outside the event listener so we can target it easier:

// React.useEffect(() => {
//   function watchWidth() { // we declare the function
//     console.log("Setting up...") // just for us to see when it's used
//     setWindowWidth(window.innerWidth)
//   }

//   window.addEventListener("resize", watchWidth) // resize is an event

//   return function () { //this is the cleanup function
//     console.log("Cleaning up...") // for us to see, if the component is
//     // unmounted this will be run
//     window.removeEventListener("resize", watchWidth)
//   }
// }, [])

// NOT always clean up functions are needed, but when there is a memory leak
// we need to fix that.

// When it comes to async functions inside the useEffect() function, it is
// possible but unless you have to, then probably you should just stick to
// using .then
// Bellow more information about asyn useEffect function:

// useEffect takes a function as its parameter.If that function
// returns something, it needs to be a cleanup function.Otherwise,
// it should return nothing.If we make it an async function, it
// automatically retuns a promise instead of a function or nothing.
// Therefore, if you want to use async operations inside of useEffect,
// you need to define the function separately inside of the callback
// function, as seen below:

// React.useEffect(() => {
//   async function getMemes() {
//     const res = await fetch("https://api.imgflip.com/get_memes")
//     const data = await res.json()
//     setAllMemes(data.data.memes)
//   }
//   getMemes()
// }, [])

// "Lazy State Initialization" : As we know, React re renders a component
// each time a state changes to update it. Because of that it is making
// calls of functions each time that happens. If it's a simple console.log
// it doesn't take too much for the browser to handle, even if it's a lot of
// times, but if it's a localStorage call, or an API call, or something like
// that, it will be taxing. For that, "Lazy State Initialization" exists,
// pretty much trying to initialize a state only one time.

// For example, if we have this:
// const [state, setState] = React.useState(console.log("State initialization"))
// It will be run everytime that a state somewhere changes, as the component is
// re rendered. To make it a lazy state initialization what we need to do is
// to make the initial value not an actual value, but a function:

// const [state, setState] = React.useState(
//   () => console.log("State initialization")
// )

// With the above, the lazy initialization is done, it will run the first time
// and only when its setState is run, not with every re render, making the app
// more efficient.

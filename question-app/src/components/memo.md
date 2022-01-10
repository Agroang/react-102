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

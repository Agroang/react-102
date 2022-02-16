import React from "react"

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };


// This is the same as above, bellow is JSX version, and it transform it into
// the above
// const Pet = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.animal}</h2>
//       <h2>{props.breed}</h2>
//     </div>
//   )
// }

// export default Pet;

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;
  // the above could be done as(don't even have to mention props):
// const Pet = ({
//   name,
//   animal,
//   beed,
//   images,
//   location,
//   id
// }) => { ...

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;

import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  // you can write a function for onChange if you want to be more verbose:
  // function updateLocation(e) {
  //   setLocation(e.target.value);
  // }
  // and pass that to the onChange instead of the arrow function:
  // onChange={updateLocation}

  // NEVER put state inside loops, or if statements, it really messes order up
  // and you can get weird rendering, its a no-no
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const breeds = [];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => updateAnimal(e.target.value)}
            onBlur={(e) => updateAnimal(e.target.value)}
            // onBlue is for accesibility
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>;
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            // disabled property to disable the dropdown when you don't have any breeds.
            id="breed"
            value={breed}
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>;
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

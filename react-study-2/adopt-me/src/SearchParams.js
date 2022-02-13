import { useState } from "react";

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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

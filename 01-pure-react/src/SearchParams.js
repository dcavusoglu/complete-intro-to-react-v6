import {useState} from "react";

const SearchParams = () => {
  const [location, SetLocation] = useState("Seatle, WA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
        <input
          id="location"
          onChange={(e) => SetLocation(e.target.value)}
          value={location}
          placeholder="Location"
        />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

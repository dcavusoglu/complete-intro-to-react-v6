import { async } from "q";
import {useState, useEffect, useContext} from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";


const ANIMALS = ["dog", "bird", "rabbit", "cat", "reptile"]

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);

useEffect(() => {
  requestPets();
}, []); // eslint-disable-line react-hooks/exhaustive-deps


  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    console.log(json);
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
      onSubmit={e => {
        e.preventDefault();
        requestPets();
      }}
      >
        <label htmlFor="location">
          Location
        <input
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="Location"
        />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option value=""/>
            {
              ANIMALS.map(animal => (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
          >
            <option value=""/>
            {
              breeds.map(breed => (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="theme">
          Theme
          <select
          id="theme"
          value={theme}
          onChange={e => setTheme(e.target.value)}
          onBlur={e => setTheme(e.target.value)}
          >
            <option value=""/>
            <option value="blue">Blue</option>
            <option value="orange">Orange</option>
            <option value="purple">Purple</option>
            <option value="green">Green</option>
          </select>
        </label>
        <button style={{backgroundColor: theme}}>Submit</button>
      </form>
      <Results pets = {pets}/>
    </div>
  );
};

export default SearchParams;

import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import Pet from "./Pet";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";


// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, { name: "Luna", type: "Dog", breed: "Havanese" }),
//     React.createElement(Pet, {
//       name: "Hopi",
//       type: "Rabbit",
//       breed: "English Angora",
//     }),
//     React.createElement(Pet, { name: "Cool", type: "Cat", breed: "Chartreux" }),
//   ]);
// };


const App = () => {
  return (
    <div>
        {/* <Pet name="Luna" type="Dog" breed="Havanese"/>
        <Pet name="Hopi" type="Rabbit" breed="English Angora"/>
      <Pet name="Cool" type="Cat" breed="Chartreux"/> */}
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details/>
          </Route>
          <Route path="/">
            <SearchParams/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  document.getElementById("root")
);

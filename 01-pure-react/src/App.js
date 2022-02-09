const Pet = (props) => {
  return  React.createElement("div", {}, [
          React.createElement("h2", {}, props.name),
          React.createElement("h3", {}, props.type),
          React.createElement("h3", {}, props.breed),
  ])
}


const App = () => {
    return React.createElement(
      "div",
      {},
      [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {name: "Luna", type: "Dog", breed: "Havanese"}),
        React.createElement(Pet, {name: "Hopi", type: "Rabbit", breed: "English Angora"}),
        React.createElement(Pet, {name: "Cool", type: "Cat", breed: "Chartreux"}),
      ]
    );
  };
  ReactDOM.render(React.createElement(App), document.getElementById('root'));

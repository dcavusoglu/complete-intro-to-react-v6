import { Link } from "react-router-dom";
// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.type),
//     React.createElement("h3", {}, props.breed),
//   ]);
// };

const Pet = ({animal, breed, location, images, name, id}) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if(images.length) {
    hero = images[0];
  }
  return (
    <Link to={`./details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name}/>
      </div>
      <div className="info">
        <h2>{name}</h2>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;

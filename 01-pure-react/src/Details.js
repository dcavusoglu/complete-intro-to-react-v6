import { async } from "q";
import { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
  constructor() {
    super();
    this.state = {loading: true}
  }
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false
        },
        json.pets[0]
      )
    );
  }
  render () {
    console.log(this.state);
    if(this.state.loading) {
      return <h2>loading...</h2>
    };

    const  { name, animal, breed, city, state, description, images} = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <img src={images[0]} alt={name}></img>
          <h2>{animal}, {breed}, {city}, {state}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}


export default withRouter(Details);
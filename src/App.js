import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

class StarService extends Component {
  constructor() {
    super();
    this.state = {
      starData: null,
    }
  }

  componentDidMount() {
    const id = this.props.id;
    const apiURL = "https://swapi.co/api/planets/?page=" + id;
    fetch(apiURL)
      .then(res => res.json())
      .then(json => { this.setState({ starData: json }) })
  }

  render() {
    const starData = this.state.starData;
    if (!starData) return (<div>Waiting for a Force</div>);
    const planets = starData.results;
    console.log(planets);
    return (
      planets.map((planet, index) => (
        <div>
          <table className="center">
            <tbody>
            <tr>
              <th>Name</th>
              <th>{planet.name}</th>
            </tr>
            <tr>
              <td>Rotation period</td>
              <td>{planet.rotation_period}</td>
            </tr>
            <tr>
              <td>Orbital period</td>
              <td>{planet.orbital_period}</td>
            </tr>
            <tr>
              <td>Diameter</td>
              <td>{planet.diameter}</td>
            </tr>
            <tr>
              <td>Climate</td>
              <td>{planet.climate}</td>
            </tr>
            <tr>
              <td>Gravity</td>
              <td>{planet.gravity}</td>
            </tr>
            <tr>
              <td>Terrain</td>
              <td>{planet.terrain}</td>
            </tr>
            <tr>
              <td>Surface water</td>
              <td>{planet.surface_water}</td>
            </tr>
            <tr>
              <td>Population</td>
              <td>{planet.population}</td>
            </tr>
            </tbody>
          </table>
        </div>
      ))
    );
  }
}

const PAGES = [
  { name: "1", id: "1" },
  { name: "2", id: "2" },
  { name: "3", id: "3" },
  { name: "4", id: "4" },
  { name: "5", id: "5" },
  { name: "6", id: "6" },
  { name: "7", id: "7" },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 0,
    }
  }

  render() {
    const activePage = this.state.activePage;
    return (
      <div className="App">
        {
          PAGES.map((page, index) => (
            <button key={index}
              className={"button is-primary"}
              onClick={() => {
                // console.log(`Button ${index} clicked!`)
                this.setState({ activePage: index })
              }}>
              {page.name}
            </button>
          ))}
        <StarService id={PAGES[activePage].id} key={activePage} />
      </div>
    );
  }
}

export default App;
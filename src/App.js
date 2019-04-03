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
          <table style="border: 1px solid black">
            <tr>Name: {planet.name}</tr>
            <tr>Rotation period: {planet.rotation_period}</tr>
            <tr>Orbital period: {planet.orbital_period}</tr>
            <tr>Diameter: {planet.diameter}</tr>
            <tr>Climate: {planet.climat}</tr>
            <tr>Gravity: {planet.gravity}</tr>
            <tr>Terrain: {planet.terrain}</tr>
            <tr>Surface water: {planet.surface_water}</tr>
            <tr>Population: {planet.population}</tr>
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
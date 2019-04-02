import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

class StarService extends Component{
  constructor(){
    super();
    this.state={
      starData:null,
    }
  }

  componentDidMount(){
    const id=this.props.id;
    const apiURL="https://swapi.co/api/planets/?page="+id;
    fetch(apiURL)
      .then(res=>res.json())
      .then(json=>{this.setState({starData:json})})
  }

  render(){
    const starData=this.state.starData;
    if(!starData)return(<div>Waiting for a Force</div>);
    const planet=starData.result;
    console.log(planet);
    return(
      planet.map((planet,index)=>(
      <div>
        <h1>{planet.planet} {starData.planet}</h1>
        <p>Name: {planet.name}</p>
        <p>Rotation period: {planet.rotation_period}</p>
        <p>Orbital period: {planet.orbital_period}</p>
        <p>Diameter: {planet.diameter}</p>
        <p>Climate: {planet.climat}</p>
        <p>Gravity: {planet.gravity}</p>
        <p>Terrain: {planet.terrain}</p>
        <p>Surface water: {planet.surface_water}</p>
        <p>Population: {planet.population}</p>
      </div>
      ))
    );
  }
}

const PAGES=[
  {name:"1",id:"1"},
  {name:"2",id:"2"},
  {name:"3",id:"3"},
  {name:"4",id:"4"},
  {name:"5",id:"5"},
  {name:"6",id:"6"},
  {name:"7",id:"7"},
];

class App extends Component {
  constructor(){
    super();
    this.state={
      activePage:0,
    }
  }

  render() {
    const activePage=this.state.activePage;
    return (
      <div className="App">
        {
          PAGES.map((page,index)=>(
            <button key={index}
            className={"button is-primary"}
                    onClick={()=>{
                      // console.log(`Button ${index} clicked!`)
                      this.setState({activePage:index})
                    }}>
              {page.name}
            </button>
          ))}
        <StarService id={PAGES[activePage].id} key={activePage}/>
      </div>
    );
  }
}

export default App;
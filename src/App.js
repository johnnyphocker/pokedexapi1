import React,  { Component, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Nav from './components/Nav';
import PokemonDetail from './components/PokemonDetail';
import PokemonList from './components/PokemonList';


class App extends Component {
  state = {
    pokemon: []
  }

  // const [pokemon, setPokemon] = useState([]);

  // const getPokemon = () => {
  //   axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964')
  //     .then(res => {
  //       let poke = res.data.results;
  //       setPokemon(poke);
  //       console.log(pokemon)
  //     })
  //     .catch(err => console.error(err))
  // }

  // useEffect(() => {
  //   getPokemon();
    
  // }, []);

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
      .then(res => {
        this.setState({pokemon: res.data.results})
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route exact path='/' render={() => <PokemonList pokemon={this.state.pokemon} />} />
          <Route path='/pokemon-detail' component={PokemonDetail} />
        </Switch>
      </>
    );
  }
}

export default App;

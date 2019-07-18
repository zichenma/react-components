import React from 'react';
import './App.css';
import TodoList from './containers/todoList/todoList';
import PokemoSearch from './containers/pokemonSearch/PokemonSearch';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList/>
      <PokemoSearch 
      name="John Doe"
      numberofPokemons={5}
      ></PokemoSearch>
    </div>
  );
}

export default App;

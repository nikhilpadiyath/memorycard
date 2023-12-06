import {useState, useEffect} from 'react'
import PokemonImages from "./components/PokemonImages"
import axios from "axios"

function App() {

  const [pokemonList, setPokemonList] = useState([])
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [clickedArray, setClickedArray] = useState([])

  
 useEffect(() => {
  const fetchPokemon = async () => {
    try {
      // Fetch the list of first 20 Pokémon
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30');
      const results = response.data.results;

      // Fetch details for each Pokémon to get the image URL
      const pokemonDetails = await Promise.all(
        results.map(async (pokemon) => {
          const detailsResponse = await axios.get(pokemon.url);
          return detailsResponse.data;
        })
      );

      setPokemonList(pokemonDetails);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

  fetchPokemon();
}, []);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  
  const handleClick = (val) => {
    setClickedArray([...clickedArray, val])
    console.log(clickedArray)
  if(clickedArray.includes(val)){
      alert("Game Over")
      getHighScore(score)
      setClickedArray([])
      setScore(0)
    } else if(score === 30){
      alert('Level completed')
      getHighScore(score)
      setClickedArray([])
      setScore(0)
    } else {
      setPokemonList(()=> shuffle(pokemonList))
      setScore(prev=> prev+1)
      
    }


  function getHighScore(score){
        if(score> highScore){
          setHighScore(score)
        }
    }
    
}
  return (
    <>
      <PokemonImages pokemonList={pokemonList} handleClick={handleClick} score={score} highScore={highScore}/>
    </>
  );
}

export default App;

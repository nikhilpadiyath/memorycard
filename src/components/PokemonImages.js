
const PokemonImages = ({pokemonList, score, highScore, handleClick}) => {
 
  return (
        <>
        <div className="flex justify-center">
        <div className="font-indie text-2xl sm:text-sm mt-6 mx-8 border-2 text-center border-slate-500 w-40  h-16 bg-slate-800 font-semibold p-4 rounded-xl text-slate-200">Score: {score}</div>
        <div className="font-indie text-2xl sm:text-sm mt-6 mx-8 border-2 text-center border-slate-500 w-40  h-16 bg-slate-800 font-semibold p-4 rounded-xl text-yellow-500">High Score: {highScore}</div>
        </div>
        <div className="grid grid-cols-6 mx-20 my-6 gap-10 sm:grid-cols-3 sm:m-4 md:grid-cols-4">
          {pokemonList.map((pokemon) => (
            <div className="bg-yellow-200 w-20 h-20 border-2 cursor-pointer rounded-xl hover:border-slate-500" key={pokemon.id}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} onClick={()=>handleClick(pokemon.id)} />
            </div>
          ))}
        </div>
        </>
      
  )
}

export default PokemonImages
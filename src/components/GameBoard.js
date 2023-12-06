const GameBoard = ({value, handleClick, score, highScore}) => {

    return (
    <>
    <div className="mt-6 mx-4">Score: {score}</div>
    <div className="mt-2 mx-4">High Score: {highScore}</div>
    <div className="grid grid-cols-3 mx-40 mt-6 gap-10">
      {value.map(val=> (
          <button className="w-20 h-20 border-2" key={val} onClick={()=>handleClick(val)}>{val}</button>
      ))}
    </div>
    </>
  )
}


export default GameBoard
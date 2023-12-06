import GameBoard from "./components/GameBoard"
import {useState} from 'react'

function App() {
  const [value, setValue] = useState([1,2,3,4,5,6,7,8,9])
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [clickedArray, setClickedArray] = useState([])

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
    } else {
      setValue(()=> shuffle(value))
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
      <GameBoard value={value} handleClick={handleClick} score={score} highScore={highScore}/>
    </>
  );
}

export default App;

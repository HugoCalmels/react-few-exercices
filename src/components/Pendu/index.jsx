import { useEffect, useState } from 'react'
import Word from './Word'

const Pendu = () => {

  const [randomWord, setRandomWord] = useState('')
  const [lifes, setLifes] = useState(6)
  const [isLost, setIsLost] = useState(false)

  const loseLife = () => {
    setLifes(lifes - 1)
    //console.log(lifes)
  }

  useEffect(() => {
    console.log(lifes)
    if (lifes < 0)setIsLost(true)
  }, [lifes])
  



  async function getRandomWord() {
    const response = await fetch('https://random-word-api.herokuapp.com/word?number=1')
    const data = await response.json()
    return data
  }


  useEffect(() => {
    getRandomWord().then((data) => { 
      console.log(data)
      setRandomWord(data)
      toUnderscores(data[0])
      }
    )
    
  }, []) // will trigger only 1x time

  return (
    <div className="pendu">

      {!isLost ? 
        <>
        <h2>Le jeu du pendu</h2>
        <p> lifes : {lifes}</p>
        <Word word={randomWord} loseLife={loseLife} />
        </>
      :
        <p>YOU LOST</p>
      }

      


    </div>
  )
}

export default Pendu


function toUnderscores(word) {
  //console.log(word.length)
  let res = ''
  for (let i = 0; i < word.length; i++) {
    res += '_'
  }
  //console.log(res.split(''))
  return word.lenght * '_'
}
import { useState } from 'react'
import RandomMeal from './RandomMeal'
const MealDB = () => {

  const [randomMeal, setRandomMeal] = useState('')

   async function getRandomMeal() {
     const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
     const data = await response.json()
     console.log(data)
     return data
   }


  const getData = () => {
    getRandomMeal().then((data) => setRandomMeal(data))
  }


  return (
    <div className="meal-db">
      <h2>Meal DB</h2>
      <button onClick={getData}>get a random meal !</button>
      <RandomMeal randomMeal={randomMeal}/>
    </div>
  )
}


export default MealDB
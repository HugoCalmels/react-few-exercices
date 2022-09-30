const RandomMeal = (props) => {
  console.log(props)


  return (
    <div className="rdm-meal">
      <p>{JSON.stringify(props)}</p>
      <hr />
      {props.randomMeal === '' ? "" :
        <>
      <img src={props.randomMeal.meals[0].strMealThumb}/>
          <p>{props.strMeal}</p>
          </>
      }
    </div>
  )
}

export default RandomMeal
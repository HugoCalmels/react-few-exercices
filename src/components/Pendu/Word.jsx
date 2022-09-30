import {useState} from 'react'
const Word = (props) => {


  
  let letters
  let firstLetter
  
  if (props.word !== '') {
    letters = props.word[0].split('')
    firstLetter = letters.shift() 
    //console.log(letters)
    toUnderscores(letters)
    console.log(letters)
  }
  //console.log(word[0].split(''))

  const focus = (event) => {
    
    event.preventDefault()
    //console.log(event)
    const lettersElements = document.querySelectorAll('.word span')
    console.log(lettersElements)
    lettersElements.forEach((el) => {
      el.style.border = "none"
    })
    console.log("event",event.target.attributes.value.value)

    console.log(event)
 

    event.target.style.border = '1px solid black'


    document.addEventListener('keyup', (res) => {
       res.preventDefault()
      if (res.key === event.target.attributes.value.value) {
        console.log("good key")
        event.target.innerText = res.key
        event.target.style.border = 'none'
        
      } else if (res.key !== event.target.attributes.value.value) {
        console.log('/§///////////////////')
        console.log('key', res.key)
        console.log(event.target)
        console.log('event',event.target.attributes.value.value)
        props.loseLife()
        event.target.style.border = 'none'
        console.log('/§///////////////////')
      }
      res.stopPropagation()
    })
   
 
    event.stopPropagation()
  }

  const play = () => {
    console.log('test')
  }

  return (
    <div className="word">
 {letters ? <span>{firstLetter.toUpperCase()}</span> : ''}
      {letters ? letters.map((letter, index) => (
        <span key={index} value={letter} onClick={(e)=>focus(e)}>_</span>
      )) : ""}
    </div>
  )
}

export default Word


function toUnderscores(letters) {
  //console.log('//////////////////////')
  //console.log(letters.length)

  //console.log('//////////////////////')
}
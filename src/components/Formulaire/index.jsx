

const Formulaire = (props) => {

  


  return (
    <div className="form">
      <h3>Form :<span> Impossible to write Uppercase</span></h3>
      <input type="text" value={props.text} onChange={(e) => props.changeText(e)}/>
    </div>
  )
}


export default Formulaire
import React, { useState } from "react";
import { connect } from "react-redux"
import { pushSmurf } from "../store/actions/smurfsActions"

function AddSmurf ({ pushSmurf }) {
  const [formInput, setFormInput] = useState({
    name: "",
    age: null,
    height: "",
    id: null
  })

  const handleChange = (e) => {
    e.persist();
    const newFormInput = {
      //its weird to put the id generator here, but I couldn't get it to cooperate in the handleSubmit, so we're just gonna make it work...
      ...formInput, [e.target.name]: e.target.value, id: Math.random()
    }
    setFormInput(newFormInput)
  }
  // console.log("FORM INPUT:", formInput)


  const handleSubmitHERE = (e) => {
    e.preventDefault();
    console.log("handleSubmitHERE from AddSmurf.js ran")
    // setNewSmurf(...formInput, {id: Math.random()} )
    pushSmurf(formInput)
    setFormInput({ name: "", age: null, height: "", id: null})
  }

  return (
    <>
      <h2>Who should we invite to Smurf-topia next?!</h2>
      <form onSubmit={handleSubmitHERE}>
        Smurf:
          <input type="text" name="name" onChange={handleChange} placeholder="name" /> <br />
        is <input type="text" name="age" onChange={handleChange} placeholder="ex: 74" /> years old<br />
        and is <input type="text" name="height" onChange={handleChange} placeholder="ex: 15 pebbles" /> tall.<br />
        <button type="submit">Invite them with purest of intentions</button><br />
        <button type="button">Not yet sure how sincere I am (does nothing)</button>
      </form>
    </>
  )
}

export default connect(null, { pushSmurf })(AddSmurf);
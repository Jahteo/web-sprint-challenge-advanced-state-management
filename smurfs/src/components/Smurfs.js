import React from "react";
import { connect } from "react-redux";

function Smurfs ({smurfs}) {

  return (
    <>
    Howdy from Smurfs
    {smurfs.map(smurfling => {
      return (
        <>
        <h3>{smurfling.name}</h3>
      <p>{smurfling.age} years old</p>
      <p>{smurfling.height} tall</p>
        </>
      )
    })}
    </>
  )
};

function mapPropsToState (state) {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapPropsToState, {})(Smurfs)
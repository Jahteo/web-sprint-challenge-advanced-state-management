import React from "react";
import { connect } from "react-redux";

function Smurfs ({smurfs}) {

  return (
    <div>
    <h2>Have you met all the smurfs so far?</h2>
    {smurfs.map(smurfling => {
      return (
        <>
        <h3>{smurfling.name}</h3>
      <p>{smurfling.age} years old</p>
      <p>{smurfling.height} tall</p>
        </>
      )
    })}
    </div>
  )
};

function mapPropsToState (state) {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapPropsToState, {})(Smurfs)
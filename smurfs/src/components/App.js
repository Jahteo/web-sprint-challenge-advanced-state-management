import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import Smurfs from "./Smurfs";
import AddSmurf from "./AddSmurf";
import { fetchSmurfs } from "../store//actions/smurfsActions";

function App({fetchSmurfs}) {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs])

  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <AddSmurf />
      <Smurfs />
    </div>
  );
}



export default connect(null, {fetchSmurfs})(App);

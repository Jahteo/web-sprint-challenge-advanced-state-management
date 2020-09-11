import axios from "axios";


export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";
export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS";

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch ({ type: FETCH_SMURFS});
    axios
      .get("http://localhost:3333/smurfs")
      .then( res => {
        console.log("success res from smurfsActions:", res.data)
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data})
      })
      .catch(err => {
        console.log(err)
        dispatch({type: FETCH_SMURFS_ERROR, payload: err})
      })
  }
};

export const pushSmurf = (formInput) => {
  return (dispatch) => {
    // dispatch ({ type: POST_SMURFS});
    axios
      .post("http://localhost:3333/smurfs",
    formInput
      )
      .then( res => {
        console.log("PUSHSUCCESS", res.data)
        dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data})
      })
      .catch(err => {
        console.log("PUSH ERROR:", err)
        // dispatch({type: POST_SMURFS_ERROR, payload: err})
      })
  }
};
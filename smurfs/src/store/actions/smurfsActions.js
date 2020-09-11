import axios from "axios";



export const fetchSmurfs = () => {
  return (dispatch) => {
    // dispatch ({ type: FETCH_SMURFS});
    axios
      .get("http://localhost:3333/smurfs")
      .then( res => {
        console.log(res)
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res})
      })
      .catch(err => {
        console.log(err)
        dispatch({type: FETCH_SMURFS_ERROR, payload: err})
      })
  }
};
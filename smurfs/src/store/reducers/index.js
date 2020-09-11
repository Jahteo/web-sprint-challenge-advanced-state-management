import {
  FETCH_SMURFS,
  FETCH_SMURFS_ERROR,
  FETCH_SMURFS_SUCCESS
} from "../actions/smurfsActions"


const initialState = {
  smurfs: [
    // {
    //   "name": "Test Subject 626",
    //   "age": 2,
    //   "height": "5cm",
    //   "id": 0
    // }
  ],
  loadingSmurfs: true,
  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      console.log("FETCH_SMURFS from reducers")
      return {
        ...state,
        loadingSmurfs: true
      }
    case FETCH_SMURFS_SUCCESS:
      console.log("FETCH_SMURFS_SUCCESS from reducers")
      return {
        ...state,
        smurfs: action.payload,
        loadingSmurfs: false
      };
      case FETCH_SMURFS_ERROR:
        console.log("FETCH_SMURFS_ERROR from reducers", action.payload)
        return {
          ...state,
          loadingSmurfs: false,
          errorMessage: `${action.payload.status} error: ${action.payload.message}`
          // Eventual production error message, more useful/entertaining to users:
          // errorMessage: "Oops, we dropped it water, please try again shortly or leave a message shaming us for ruining was was a previously glorious day. ...oh, I should make a way to contact us..."
        };
    default:
      console.log("Default Switch from Reducer")
      return state;
  }
};
import {
  FETCH_SMURFS,
  FETCH_SMURFS_ERROR,
  FETCH_SMURFS_SUCCESS,
  POST_SMURFS_SUCCESS,
} from "../actions/smurfsActions"


const initialState = {
  smurfs: [
    // {
    //   "name": "Test Subject 626",
    //   "age": 2,
    //   "height": "5cm",
    //   "id": 626
    // }
  ],
  loadingSmurfs: true,
  errorMessage: "",
  smurfToInvite: {}
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
        };
      case POST_SMURFS_SUCCESS:
        return {
          ...state,
          smurfs: action.payload
        }
    default:
      console.log("Default Switch from Reducer")
      return state;
  }
};
import {
  CUCREATESUCCESS,
  CUCREATEFAIL,
  CUDELETE,
  CULOGINSUCCESS,
  CULOGINFAIL
} from "../actions/index";

const initialState = {
  signedIn: false,
  accountCreated: false,
  id: 0,
  username: "",
  FirstName: "",
  LastName: "",
  email: "",
  accountDeleted: false
};

function cuReducer(state = initialState, action) {
  switch (action.type) {
    case CUCREATESUCCESS:
      return {
        ...state,
        accountCreated: true,
        id: action.payload.id,
        username: action.payload.username,
        FirstName: action.payload.FirstName,
        LastName: action.payload.LastName,
        email: action.payload.email
      };
    case CUCREATEFAIL:
      return { ...state };
    case CULOGINSUCCESS:
      return {
        ...state,
        signedIn: true,
        id: action.payload.id,
        username: action.payload.username,
        FirstName: action.payload.FirstName,
        LastName: action.payload.LastName,
        email: action.payload.email
      };
    case CULOGINFAIL:
      return { ...state };
    case CUDELETE:
      return { ...state, accountDeleted: true };
    default:
      return { ...state };
  }
}

export default cuReducer;

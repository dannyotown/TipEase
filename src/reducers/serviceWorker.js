import {
  SWCREATESUCCESS,
  SWCREATEFAIL,
  SWLOGINSUCCESS,
  SWLOGINFAIL,
  SWDELETE
} from "../actions/index";

const initialState = {
  signedIn: false,
  accountCreated: false,
  id: 0,
  username: "",
  FirstName: "",
  LastName: "",
  email: "",
  company: "",
  accountDeleted: false
};

function swReducer(state = initialState, action) {
  switch (action.type) {
    case SWCREATESUCCESS:
      return {
        ...state,
        accountCreated: true,
        id: action.payload.id,
        username: action.payload.username,
        FirstName: action.payload.FirstName,
        LastName: action.payload.LastName,
        email: action.payload.email,
        company: action.payload.company
      };
    case SWCREATEFAIL:
      return { ...state };
    case SWLOGINSUCCESS:
      return {
        ...state,
        signedIn: true,
        id: action.payload.id,
        username: action.payload.username,
        FirstName: action.payload.FirstName,
        LastName: action.payload.LastName,
        email: action.payload.email
      };
    case SWLOGINFAIL:
      return { ...state };
    case SWDELETE:
      return { ...state, accountDeleted: true };
    default:
      return { ...state };
  }
}
export default swReducer;

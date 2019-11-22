import { SWCREATESUCCESS, SWCREATEFAIL, SWDELETE } from "../actions/index";

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

export default function Reducer(state = initialState, action) {
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
    case SWDELETE:
      return { ...state, accountDeleted: true };
    default:
      return { ...state };
  }
}

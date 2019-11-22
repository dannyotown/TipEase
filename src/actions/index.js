// import api from "../utils/api";

export const SWCREATESUCCESS = "SWCREATESUCCESS";
export const SWCREATEFAIL = "SWCREATEFAIL";
export const SWDELETE = "SWDELETE";
export const SWLOGINSUCCESS = "SWLOGINSUCCESS";
export const SWLOGINFAIL = "SWLOGINFAIL";
export const CUCREATESUCCESS = "CUCREATESUCCESS";
export const CUCREATEFAIL = "CUCREATEFAIL";
export const CUDELETE = "CUDELETE";
export const CULOGINSUCCESS = "CULOGINSUCCESS";
export const CULOGINFAIL = "CULOGINFAIL";

// export function deleteAPI(userid) {
//   return dispatch => {
//     dispatch({ type: SWDELETE });
//     api()
//       .get(`/api/serviceworker/${userid}`)
//       .then(res => {
//         dispatch({ type: "test", payload: res.data.results });
//       })
//       .catch(err => {
//         dispatch({ type: "test", payload: err });
//       });
//   };
// }

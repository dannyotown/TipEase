import axios from "axios";

export function getToken() {
  return localStorage.getItem("key");
}
export default function() {
  return axios.create({
    baseURL: "https://tipsease-msm.herokuapp.com",
    headers: {
      Authorization: getToken()
    }
  });
}

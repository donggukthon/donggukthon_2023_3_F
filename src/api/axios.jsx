import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.37.81.68/",
  headers: {
    "Content-Type": "application/json",
  },
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFTOKEN",
});
export default instance;

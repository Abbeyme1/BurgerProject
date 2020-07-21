import axios from "axios";

const instance = axios.create({
  baseURL: "https://reactburger-60525.firebaseio.com/",
});

export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-app-9bddb.firebaseio.com/",
});
export default instance;

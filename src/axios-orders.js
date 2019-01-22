import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-make-your-burger.firebaseio.com/"
});

export default instance;

import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://tndr-back-end.herokuapp.com/",
});

export default baseUrl;
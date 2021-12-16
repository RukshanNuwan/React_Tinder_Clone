import Axios from "axios";

const baseUrl = Axios.create({
  baseURL: 'http://localhost:8001'
});

export default baseUrl;
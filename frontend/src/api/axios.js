import axios from "axios";

const baseUrl = axios.create({
  baseURL: 'http://localhost:8001'
});

export default baseUrl;
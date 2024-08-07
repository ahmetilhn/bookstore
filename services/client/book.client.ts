import axios from "axios";

// axios instance for book microservice
export default axios.create({
  baseURL: "https://dev-test.360y.co",
  timeout: 5000,
});

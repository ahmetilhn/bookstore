import axios from "axios";

export default axios.create({
  baseURL: "https://dev-test.360y.co",
  timeout: 5000,
});

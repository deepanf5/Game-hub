import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f2e0ee0112e540ec9afb82f64d391b8d",
  },
});

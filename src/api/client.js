import axios from "axios";

const api = axios.create({
  baseURL: "https://amankushwaha007-stock-market-prediction.hf.space/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

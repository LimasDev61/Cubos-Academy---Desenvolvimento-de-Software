import * as axios from "axios";

export const cepGet = axios.create({
  baseURL: "https://brasilapi.com.br",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

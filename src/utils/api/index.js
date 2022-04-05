import axios from "axios";

import buildApiClient from "./client";

export default buildApiClient(
  axios.create({
    baseURL: `${process.env.REACT_APP_BASE_API_URL}/api`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
  })
);

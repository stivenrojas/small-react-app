import axios from "axios";

import settings from "../settings/settings";

const api = axios.create({
  baseURL: `${settings.apiUrl}/api`,
  crossDomain: true,
  headers: {
    post: {
      "Content-Type": "application/json",
    },
  },
});


export { api };

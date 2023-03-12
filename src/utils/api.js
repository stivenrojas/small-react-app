import axios from "axios";
import settings from "../settings/settings.js";

// Setting up general axios configuration to be used across the app.
const api = axios.create({
  baseURL: `${settings.apiUrl}`,
  crossDomain: true,
});


export { api };

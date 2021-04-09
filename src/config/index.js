let apiBaseUrl = "";
let oAuthBaseUrl = "";
let isDevelopment = true;

if (window.location.hostname === "localhost") {
  apiBaseUrl = ``;
  oAuthBaseUrl = "";
  isDevelopment = true;
} else if (window.location.hostname === "") {
  apiBaseUrl = ``;
  oAuthBaseUrl = "";
  isDevelopment = false;
} else {
  apiBaseUrl = ``;
  oAuthBaseUrl = "";
  isDevelopment = false;
}

export const IS_DEVELOPMENT = isDevelopment;
export const API_BASE_URL = apiBaseUrl;
export const OAUTH_BASE_URL = oAuthBaseUrl;
/**
 * REST API endpoints
 */

export const API_ENDPOINT = {
  LOGIN: "/Labadmin_Login",
};

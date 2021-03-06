import { API_ENDPOINT } from "../config";
import Client from "../utils/AxiosInstance";

export const get = (callback) => {
  return async () => {
    try {
      const response = await Client.post(API_ENDPOINT, {});
      if (response.Code === 200) {
        callback(true, response);
      } else {
        callback(false);
      }
    } catch (error) {
      callback(false);
    }
  };
};

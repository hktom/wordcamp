import axios from "axios";
import { API_URL } from "../../helpers/apiKeys";

export const fetchEventRequest = async () => {
  try {
    const data = await axios.get(API_URL);
    return { data };
  } catch (error) {
    return { error };
  }
};

import axios from "axios";
import { API_URL } from "../../helpers/apiKeys";
import { status } from "../../helpers/enum";
import { IWordCamp } from "../../helpers/apiInterface";
import {
  filterEventByData,
  formatApiData,
  handleQueryParams,
} from "../../helpers/events";

export const fetchEventRequest = async (per_page?: number, page?: number) => {
  try {
    const res: any[] = await axios.get(
      API_URL + "?" + handleQueryParams(undefined, per_page, page),
    );
    const data = formatApiData(res);
    return { data };
  } catch (error) {
    return { error };
  }
};

export const fetchEventRequestByStatus = async (
  status: status,
  per_page?: number,
  page?: number,
) => {
  try {
    const res: any[] = await axios.get(
      `${API_URL}?${handleQueryParams(status, per_page, page)}`,
    );
    const data = formatApiData(res);
    return { data };
  } catch (error) {
    return { error };
  }
};

export const fetchEventRequestByDate = async (
  start_date: string,
  end_date: string,
  status?: status,
  per_page?: number,
  page?: number,
) => {
  try {
    const res: any[] = await axios.get(
      `${API_URL}?${handleQueryParams(status, per_page, page)}`,
    );
    const data = filterEventByData(start_date, end_date, formatApiData(res));
    return { data };
  } catch (error) {
    return { error };
  }
};

import axios from "axios";
import { API_URL } from "../../helpers/apiKeys";
import { status } from "../../helpers/enum";
import {
  IQueryParams,
  IQueryParamsDate,
  IWordCamp,
} from "../../helpers/apiInterface";
import {
  filterEventByData,
  formatApiData,
  handleQueryParams,
} from "../../helpers/events";

export const fetchEventRequest = async ({ per_page, page }: IQueryParams) => {
  try {
    const res = await axios.get(
      API_URL + "?" + handleQueryParams(undefined, per_page, page),
    );
    const data = formatApiData(res.data);
    return { data };
  } catch (error) {
    return { error };
  }
};

export const fetchEventRequestByStatus = async ({
  status,
  per_page,
  page,
}: IQueryParams) => {
  try {
    const res = await axios.get(
      `${API_URL}?${handleQueryParams(status, per_page, page)}`,
    );
    const data = formatApiData(res.data);
    return { data };
  } catch (error) {
    return { error };
  }
};

export const fetchEventRequestByDate = async ({
  start_date,
  end_date,
  per_page,
  page,
  status,
}: IQueryParamsDate) => {
  try {
    const res = await axios.get(
      `${API_URL}?${handleQueryParams(status, per_page, page)}`,
    );
    const data = filterEventByData(
      start_date,
      end_date,
      formatApiData(res.data),
    );
    return { data };
  } catch (error) {
    return { error };
  }
};
